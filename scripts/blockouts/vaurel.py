"""Blender blockout of Vaurel (Cerebraun) standing at the capsule, for images.md § 33.

LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
touched by CI. Needs Blender (5.2 used, 26 October 2026).

    blender -b -P scripts/blockouts/vaurel.py -- <out.png>

WHY THIS EXISTS: every text prompt for a Cerebraun drew an Earth animal (an
octopus, then an elephant once the body was asked to stand), because an image
generator knows only Earth's life. A grey blockout built from the body design in
`story-bible/species-design.md` (*Cerebraun*: a headless hydrostat with no front,
resting low on four short broad ventral limbs, four longer dorsal working limbs,
blunt closed tips, small eyes along the limbs) fixes the shape; an image edit then
makes it a photograph, keeping the shape. The edit instruction of record is in
images.md § 33 under Vaurel. The body is one metaball, so the limbs grow out of
it with no joint, as a hydrostat's would.
"""
import bpy, math, sys
from mathutils import Vector

out = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)
scn = bpy.context.scene

def mat(name, rgb, rough=0.85):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    return m

skin = mat('skin', (0.55, 0.50, 0.44))      # sand-grey, matte
eye = mat('eye', (0.03, 0.03, 0.03), 0.3)
stone = mat('stone', (0.62, 0.61, 0.58))
cap = mat('capsule', (0.05, 0.05, 0.055), 0.35)

# --- body as one metaball, so limbs grow out of it without seams (a hydrostat has no joints)
mb = bpy.data.metaballs.new('vaurel'); mb.resolution = 0.04; mb.render_resolution = 0.02; mb.threshold = 0.6
body = bpy.data.objects.new('vaurel', mb); scn.collection.objects.link(body); body.data.materials.append(skin)

def ball(p, r, squash=None):
    e = mb.elements.new(); e.co = Vector(p); e.radius = r
    if squash:
        e.type = 'ELLIPSOID'; e.size_x, e.size_y, e.size_z = squash
    return e

TABLE_TOP = 0.0          # the floor the body stands on (the low broad surface is the floor of the room here)
BODY_Z = 0.55
# low, broad, dome-topped body; flatter underneath; no front
ball((0, 0, BODY_Z), 1.05, (1.1, 1.0, 0.6))
ball((0, 0, BODY_Z + 0.18), 0.8, (0.75, 0.68, 0.45))

def limb(points, r0, r1, step=0.09):
    """chain of balls along a polyline, radius tapering r0 -> r1, ending in a blunt round tip"""
    pts = [Vector(p) for p in points]
    total = sum((pts[i+1]-pts[i]).length for i in range(len(pts)-1)); d = 0.0
    for i in range(len(pts)-1):
        a, b = pts[i], pts[i+1]; seg = (b-a).length; n = max(1, int(seg/step))
        for k in range(n):
            t = k/n; p = a.lerp(b, t); r = r0 + (r1-r0)*((d + seg*t)/total)
            ball(p, r)
        d += seg
    ball(pts[-1], r1 * 1.05)   # blunt rounded tip, no swelling beyond the limb
    return pts

# four ventral limbs: short, broad, splayed outward and down, ending in broad pads on the floor
vent = []
for ang in (40, 140, 220, 320):
    a = math.radians(ang); dx, dy = math.cos(a), math.sin(a)
    pts = [(0.45*dx, 0.45*dy, BODY_Z-0.15), (0.85*dx, 0.85*dy, 0.28), (1.05*dx, 1.05*dy, 0.10)]
    vent.append(limb(pts, 0.32, 0.26))

# capsule position (in front of the body, on the floor surface)
CX, CY = 1.9, -0.1
dorsal = []
# two working limbs laid on the surface either side of the capsule
dorsal.append(limb([(0.4, 0.35, BODY_Z+0.35), (1.0, 0.55, 0.45), (1.6, 0.42, 0.12), (2.05, 0.30, 0.10)], 0.20, 0.11))
dorsal.append(limb([(0.4, -0.45, BODY_Z+0.35), (1.0, -0.65, 0.45), (1.6, -0.55, 0.12), (2.05, -0.48, 0.10)], 0.20, 0.11))
# third raised and bent above the capsule
dorsal.append(limb([(0.3, -0.05, BODY_Z+0.5), (0.9, -0.1, 1.55), (1.55, -0.1, 1.75), (1.85, -0.1, 1.35)], 0.20, 0.11))
# fourth draped back over the body
dorsal.append(limb([(-0.5, 0.5, BODY_Z+0.2), (-1.0, 1.0, 0.25), (-1.4, 1.6, 0.12), (-1.6, 2.1, 0.11)], 0.20, 0.11))

# small dark eyes along the limbs, several per limb, never paired into a face
import random; random.seed(7)
for pts in vent + dorsal:
    for i in range(1, len(pts)):
        p = pts[i-1].lerp(pts[i], 0.5)
        off = Vector((random.uniform(-.03,.03), random.uniform(-.03,.03), 0.0)); off.z = 0.85*(0.27 if pts in vent else 0.15)
        bpy.ops.mesh.primitive_uv_sphere_add(radius=0.035, location=p+off); bpy.context.object.data.materials.append(eye)

# the capsule: small dark sealed cylinder lying on the surface
bpy.ops.mesh.primitive_cylinder_add(radius=0.07, depth=0.24, location=(CX, CY, 0.07), rotation=(0, math.radians(90), 0))
bpy.context.object.data.materials.append(cap)

# the room: a plain windowless box, the floor the bare surface
bpy.ops.mesh.primitive_plane_add(size=14, location=(0, 0, 0)); bpy.context.object.data.materials.append(stone)
for loc, rot in (((0, 4, 3), (math.radians(90), 0, 0)), ((-4, 0, 3), (0, math.radians(90), 0))):
    bpy.ops.mesh.primitive_plane_add(size=14, location=loc, rotation=rot); bpy.context.object.data.materials.append(stone)

# soft even light: a big area light plus world fill
bpy.ops.object.light_add(type='AREA', location=(2.5, -3.5, 5)); L = bpy.context.object
L.data.energy = 550; L.data.size = 6; L.rotation_euler = (math.radians(40), 0, math.radians(30))
w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.6

# camera: a little above and to one side, 16:9
bpy.ops.object.camera_add(location=(5.6, -5.0, 3.6)); cam = bpy.context.object; scn.camera = cam
d = Vector((0.5, 0.0, 0.5)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cam.data.lens = 42

scn.render.engine = 'CYCLES'; scn.cycles.samples = 96; scn.cycles.use_denoising = True; scn.cycles.device = 'CPU'
scn.render.resolution_x, scn.render.resolution_y = 1600, 900
scn.render.filepath = out; scn.render.image_settings.file_format = 'PNG'
bpy.ops.render.render(write_still=True)
