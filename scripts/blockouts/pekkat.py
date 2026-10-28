"""Blender blockout of Pekkat (Chthonari), for images.md § 33.

LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
touched by CI. Needs Blender (5.2 used, 28 October 2026).

    blender -b -P scripts/blockouts/pekkat.py -- <out.png> [camera]

camera: `rear` (default, three-quarter from behind and above the rib, the
dome turned away up the rib) or `side`.

WHY A BLOCKOUT: two text rounds (24 October) and an edit from the filed
`tikket.jpg` (26 October) all drew an Earth beetle, and the edit gave its head
a face. Text alone lets the generator pick the silhouette, the camera and the
head, and it picks the beetle it knows, seen from the front. Here the geometry
is fixed before the photograph step, the Vaurel route (`vaurel-2.py`):

- the body is the record's (species page, images.md § 33): low, segmented
  carapace close to the surface, six stout jointed legs of equal kind, the head
  a smooth featureless dome. The dome is low and broad and runs on from the
  first segment with only a seam, so no neck or separate head stands out to be
  given a face; and the camera is behind it, so the dome is seen from the back.
- the legs are short, thick and three-jointed, each segment a long ellipsoid
  that narrows into its joint, every tip a blunt tapered end,
  and five of them clasp the two edges of a narrow rib, a body built for
  gripping tunnel members in negligible gravity rather than walking a floor.
  The near foreleg is raised, its tip just clear of the metal: the strike.
- the rib is a member of native nickel-iron left standing when the hall was
  cut, inclined, running up out of frame, of a plainly different section from
  the ribs behind it; walls and ribs carry broad shallow cutting marks.
- light: one warm amber source, unseen, above and to one side, hard enough to
  throw a shadow; little fill. Camera at a person's eye height, deep focus,
  so the hall reads full size and not as a diorama.
"""
import bpy, math, sys, random
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:]
out = argv[0]
view = argv[1] if len(argv) > 1 else 'rear'
bpy.ops.wm.read_factory_settings(use_empty=True)
scn = bpy.context.scene
random.seed(33)

def mat(name, rgb, rough=0.85):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    return m, b

def grain(m, bsdf, fine, coarse, strength, stretch=(1.0, 1.0, 3.0)):
    """bump from a fine noise (grain) and a coarse stretched voronoi (marks)"""
    nt = m.node_tree; n = nt.nodes; l = nt.links
    tc = n.new('ShaderNodeTexCoord')
    nz = n.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = fine; nz.inputs['Detail'].default_value = 8
    vo = n.new('ShaderNodeTexVoronoi'); vo.feature = 'DISTANCE_TO_EDGE'; vo.inputs['Scale'].default_value = coarse
    mp = n.new('ShaderNodeMapping'); mp.inputs['Scale'].default_value = stretch
    l.new(tc.outputs['Object'], nz.inputs['Vector']); l.new(tc.outputs['Object'], mp.inputs['Vector'])
    l.new(mp.outputs['Vector'], vo.inputs['Vector'])
    mx = n.new('ShaderNodeMath'); mx.operation = 'MULTIPLY_ADD'
    l.new(vo.outputs['Distance'], mx.inputs[0]); mx.inputs[1].default_value = 0.6
    l.new(nz.outputs['Fac'], mx.inputs[2])
    bump = n.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = strength; bump.inputs['Distance'].default_value = 0.02
    l.new(mx.outputs['Value'], bump.inputs['Height']); l.new(bump.outputs['Normal'], bsdf.inputs['Normal'])

chitin, cb = mat('chitin', (0.20, 0.23, 0.27), 0.6)     # cool mid-slate, a little blue, matte
grain(chitin, cb, 220.0, 14.0, 0.25)
legm, lb = mat('leg', (0.19, 0.21, 0.24), 0.55)
grain(legm, lb, 260.0, 20.0, 0.2)
iron, ib = mat('iron', (0.13, 0.12, 0.115), 0.55)      # dark native nickel-iron, cut
grain(iron, ib, 40.0, 2.5, 0.3, (1.0, 1.0, 1.0))
ironfar, _ = mat('ironfar', (0.11, 0.10, 0.10), 0.6)
grain(ironfar, _, 30.0, 2.0, 0.3, (1.0, 1.0, 1.0))

root = bpy.data.objects.new('rig', None); scn.collection.objects.link(root)

def own(o, m):
    o.data.materials.append(m); o.parent = root
    for p in o.data.polygons: p.use_smooth = True
    return o

def ellipsoid(c, s, m, rot=(0, 0, 0)):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48, ring_count=24, location=c, rotation=rot)
    o = bpy.context.object; o.scale = s
    return own(o, m)

def segment(a, b, r, m, flat=0.8):
    """one leg segment as a long ellipsoid from a to b: it narrows into each
    joint by itself, so the leg reads as jointed chitin and never as a tube
    with a ball at the knee (round 1 and 2 of 28 October came back as a toy
    on exactly that geometry)"""
    a, b = Vector(a), Vector(b); d = b - a
    bpy.ops.mesh.primitive_uv_sphere_add(segments=32, ring_count=16, location=(a + b) / 2)
    o = bpy.context.object; o.scale = (r, r * flat, d.length / 2 * 1.12)
    o.rotation_euler = d.to_track_quat('Z', 'Y').to_euler()
    own(o, m)

# --- local frame: the rib runs along +x, its upper face at z = 0, 0.30 wide
RIB_W, RIB_D = 0.38, 0.42
bpy.ops.mesh.primitive_cube_add(location=(0.5, 0, -RIB_D / 2))
rib = bpy.context.object; rib.scale = (7.0, RIB_W / 2, RIB_D / 2)
bpy.ops.object.transform_apply(scale=True)   # so the cutting marks are not stretched along the rib
own(rib, iron)
bv = rib.modifiers.new('bevel', 'BEVEL'); bv.width = 0.012; bv.segments = 3

# --- the body: three carapace segments and the dome, low on the rib's face
BZ = 0.105
# flattened overlapping plates, each riding a little over the one behind it
ellipsoid((-0.18, 0, BZ - 0.005), (0.13, 0.215, 0.062), chitin)
ellipsoid((-0.08, 0, BZ + 0.004), (0.13, 0.225, 0.068), chitin)
ellipsoid((0.02, 0, BZ + 0.008), (0.12, 0.22, 0.066), chitin)
ellipsoid((0.0, 0, BZ - 0.03), (0.30, 0.21, 0.055), chitin)     # the lower rim, close to the metal
# the dome: low, broad, running on from the first segment, no neck, nothing on it
ellipsoid((0.15, 0, BZ - 0.014), (0.09, 0.16, 0.054), chitin)

# --- six legs of equal kind: stout, three-jointed, blunt pads
R = 0.026
def leg(x, side, lifted=False):
    y = side * 0.18
    a = (x, y, BZ - 0.01)
    if lifted:   # the near foreleg, raised, tip just clear of the metal ahead
        k1 = (x + 0.06, side * 0.31, BZ + 0.11)
        k2 = (x + 0.20, side * 0.26, BZ + 0.08)
        tip = (x + 0.29, side * 0.13, 0.035)
    else:        # out, over the knee, and down to clasp the rib's edge
        k1 = (x + 0.02, side * 0.32, BZ + 0.03)
        k2 = (x + 0.035, side * 0.26, -0.05)
        tip = (x + 0.03, side * (RIB_W / 2 + R * 0.6), -0.13)
    segment(a, k1, R * 0.95, legm); segment(k1, k2, R * 0.85, legm); segment(k2, tip, R * 0.62, legm)

for x in (0.10, -0.05, -0.19):
    leg(x, +1)
    leg(x, -1, lifted=(x == 0.10))

# --- place the rib in the hall: inclined, rising up out of frame
PITCH = math.radians(-32)                # positive x climbs
root.rotation_euler = (0, PITCH, 0)
root.location = (0, 0, 1.15)
bpy.context.view_layer.update()
body_world = root.matrix_world @ Vector((0.0, 0, BZ))

# --- the other ribs, each a plainly different section and slope, falling back into the dark
def far_rib(x, y, w, d, pitch, yaw):
    bpy.ops.mesh.primitive_cube_add(location=(x, y, 0))
    o = bpy.context.object; o.scale = (6.5, w / 2, d / 2)
    bpy.ops.object.transform_apply(scale=True)
    o.rotation_euler = (0, math.radians(pitch), math.radians(yaw))
    o.data.materials.append(ironfar)
    b = o.modifiers.new('bevel', 'BEVEL'); b.width = 0.015; b.segments = 3
for args in ((0.6, 1.5, 0.55, 0.35, -48, 8), (-0.4, 2.7, 0.22, 0.5, -60, -6),
             (1.1, 4.1, 0.75, 0.45, -40, 14), (-0.8, 5.6, 0.35, 0.3, -70, 0),
             (0.3, -1.6, 0.45, 0.6, -55, -10)):
    far_rib(*args)

# --- the hall: floor and walls of cut nickel-iron with broad cutting marks
bpy.ops.mesh.primitive_plane_add(size=30, location=(0, 0, 0)); bpy.context.object.data.materials.append(iron)
bpy.ops.mesh.primitive_plane_add(size=30, location=(0, 8.0, 0), rotation=(math.radians(90), 0, 0)); bpy.context.object.data.materials.append(ironfar)
bpy.ops.mesh.primitive_plane_add(size=30, location=(-5.0, 0, 0), rotation=(0, math.radians(90), 0)); bpy.context.object.data.materials.append(ironfar)

# --- light: one warm amber source, unseen, above and to one side; little fill
bpy.ops.object.light_add(type='AREA', location=(1.6, -2.2, 3.6)); L = bpy.context.object
L.data.size = 0.6; L.data.energy = 320; L.data.color = (1.0, 0.82, 0.6)
L.rotation_euler = (Vector(body_world) - L.location).to_track_quat('-Z', 'Y').to_euler()
w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.02
w.node_tree.nodes['Background'].inputs['Color'].default_value = (1.0, 0.75, 0.5, 1)

# --- camera at a person's eye height, behind and to the near side of the body
if view == 'side':
    camloc = body_world + Vector((-0.25, -1.55, 0.45))
else:
    camloc = body_world + Vector((-1.0, -1.55, 0.5))
bpy.ops.object.camera_add(location=camloc); cam = bpy.context.object; scn.camera = cam
aim = body_world + Vector((0.12, 0.25, -0.05))
cam.rotation_euler = (aim - cam.location).to_track_quat('-Z', 'Y').to_euler()
cam.data.lens = 35

scn.render.engine = 'CYCLES'; scn.cycles.samples = 64; scn.cycles.use_denoising = True; scn.cycles.device = 'CPU'
scn.render.resolution_x, scn.render.resolution_y = 1600, 900
scn.view_settings.look = 'AgX - Medium High Contrast'
scn.render.filepath = out; scn.render.image_settings.file_format = 'PNG'
bpy.ops.render.render(write_still=True)
