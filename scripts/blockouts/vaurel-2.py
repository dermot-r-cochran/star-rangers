"""Second-pass Blender blockout of Vaurel (Cerebraun), for images.md § 33.

LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
touched by CI. Needs Blender (5.2 used, 27 October 2026).

    blender -b -P scripts/blockouts/vaurel-2.py -- <out.png>

WHY A SECOND PASS: the frame filed from `vaurel.py` kept the body but read as a
plasticine model (Dermot, 26 October: "a bit like a plasticine model"; 27
October: "a child's model"). Three causes, each fixed here rather than left to
the image edit: nothing in frame gave the scale, so the body could be any size
(now a low teaching surface the laid limbs rest on, and a wide low dark doorway
behind); soft light from everywhere cast no shadow (now one narrow hard slot
overhead and to one side, little fill); and every limb was the same even tube
with bead eyes (now limbs of unequal girth that wander slightly, skin with a
grain and creases in the material, and eyes set into the skin). `vaurel.py`
stays as the record of the first filed frame.
"""
import bpy, math, sys, random
from mathutils import Vector

out = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)
scn = bpy.context.scene
random.seed(11)

def mat(name, rgb, rough=0.85):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    return m, b

def grain(m, bsdf, fine, coarse, strength):
    """bump from a fine noise (grain) and a coarse stretched voronoi (creases)"""
    nt = m.node_tree; n = nt.nodes; l = nt.links
    tc = n.new('ShaderNodeTexCoord')
    nz = n.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = fine; nz.inputs['Detail'].default_value = 8
    vo = n.new('ShaderNodeTexVoronoi'); vo.feature = 'DISTANCE_TO_EDGE'; vo.inputs['Scale'].default_value = coarse
    mp = n.new('ShaderNodeMapping'); mp.inputs['Scale'].default_value = (1.0, 1.0, 3.0)
    l.new(tc.outputs['Object'], nz.inputs['Vector']); l.new(tc.outputs['Object'], mp.inputs['Vector'])
    l.new(mp.outputs['Vector'], vo.inputs['Vector'])
    mx = n.new('ShaderNodeMath'); mx.operation = 'MULTIPLY_ADD'
    l.new(vo.outputs['Distance'], mx.inputs[0]); mx.inputs[1].default_value = 0.6
    l.new(nz.outputs['Fac'], mx.inputs[2])
    bump = n.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = strength; bump.inputs['Distance'].default_value = 0.02
    l.new(mx.outputs['Value'], bump.inputs['Height']); l.new(bump.outputs['Normal'], bsdf.inputs['Normal'])

skin, sb = mat('skin', (0.52, 0.47, 0.41), 0.9)      # dull warm sand-grey, matte
grain(skin, sb, 140.0, 9.0, 0.45)
eye, _ = mat('eye', (0.02, 0.02, 0.02), 0.45)
stone, stb = mat('stone', (0.42, 0.41, 0.39), 0.95)
grain(stone, stb, 60.0, 2.0, 0.08)
slabm, slb = mat('composite', (0.46, 0.45, 0.43), 0.8)
grain(slabm, slb, 90.0, 4.0, 0.05)
cap, _ = mat('capsule', (0.05, 0.05, 0.055), 0.45)
dark, _ = mat('dark', (0.0, 0.0, 0.0), 1.0)

# --- body as one metaball (a hydrostat has no joints)
mb = bpy.data.metaballs.new('vaurel'); mb.resolution = 0.035; mb.render_resolution = 0.016; mb.threshold = 0.6
body = bpy.data.objects.new('vaurel', mb); scn.collection.objects.link(body); body.data.materials.append(skin)

def ball(p, r, squash=None):
    e = mb.elements.new(); e.co = Vector(p); e.radius = r
    if squash:
        e.type = 'ELLIPSOID'; e.size_x, e.size_y, e.size_z = squash
    return e

BODY_Z = 0.5
ball((0, 0, BODY_Z), 1.25, (1.3, 1.2, 0.34))         # a wide low disc, clearly wider than tall: no chest, no hips
ball((0.25, -0.2, BODY_Z + 0.1), 0.75, (0.95, 0.85, 0.3))

def limb(points, r0, r1, step=0.075, wobble=0.035):
    """chain of balls along a polyline, girth tapering unevenly, blunt tip"""
    pts = [Vector(p) for p in points]
    total = sum((pts[i+1]-pts[i]).length for i in range(len(pts)-1)); d = 0.0
    ph = random.uniform(0, 6.28)
    for i in range(len(pts)-1):
        a, b = pts[i], pts[i+1]; seg = (b-a).length; n = max(1, int(seg/step))
        for k in range(n):
            t = k/n; s = (d + seg*t)/total
            p = a.lerp(b, t) + Vector((0, 0, wobble*math.sin(ph + s*9)))
            r = (r0 + (r1-r0)*s) * (1 + 0.08*math.sin(ph*2 + s*13))
            ball(p, r)
        d += seg
    ball(pts[-1], r1 * 1.02)
    return pts

# four ventral limbs, short and broad, splayed, pads on the floor; unequal
vent = []
for ang, g in ((35, 1.0), (145, 0.92), (215, 1.06), (325, 0.96)):
    a = math.radians(ang); dx, dy = math.cos(a), math.sin(a)
    pts = [(0.45*dx, 0.45*dy, BODY_Z-0.15), (0.88*dx, 0.88*dy, 0.3), (1.1*dx, 1.1*dy, 0.11)]
    vent.append(limb(pts, 0.33*g, 0.27*g))

# the teaching surface: low, broad, bare, rounded edges, in front of the body
SLAB_Z = 0.32
bpy.ops.mesh.primitive_cube_add(location=(2.35, -0.1, SLAB_Z/2))
s = bpy.context.object; s.scale = (0.85, 1.3, SLAB_Z/2); s.data.materials.append(slabm)
bv = s.modifiers.new('bevel', 'BEVEL'); bv.width = 0.06; bv.segments = 6
bpy.ops.object.transform_apply(scale=True)

CX, CY, CZ = 2.25, -0.1, SLAB_Z + 0.075
dorsal = []
# two working limbs laid along the surface either side of the capsule
dorsal.append(limb([(0.15, 0.75, BODY_Z+0.1), (0.7, 1.45, 0.62), (1.55, 1.25, SLAB_Z+0.14), (2.15, 0.5, SLAB_Z+0.1)], 0.21, 0.115))   # out from the flank and round, never parallel
dorsal.append(limb([(0.15, -0.8, BODY_Z+0.1), (0.75, -1.55, 0.6), (1.6, -1.35, SLAB_Z+0.14), (2.2, -0.75, SLAB_Z+0.1)], 0.18, 0.1))
# third raised and bent, its tip a hand's breadth over the capsule
ball((0.3, -0.4, BODY_Z + 0.15), 0.6, (0.6, 0.6, 0.5))   # the raised limb grows out of the body: a broad flared root, not a tube laid on top
dorsal.append(limb([(0.3, -0.4, BODY_Z), (0.55, -0.7, 0.95), (0.8, -0.85, 1.45), (1.6, -0.55, 1.5), (2.2, -0.15, CZ+0.35)], 0.3, 0.11))
# fourth along the body
dorsal.append(limb([(-0.5, 0.5, BODY_Z+0.25), (-1.0, 1.0, 0.3), (-1.35, 1.55, 0.13), (-1.5, 2.0, 0.12)], 0.18, 0.1))

# eyes set into the skin along the limbs: a few per limb, unevenly spaced, never
# paired. Placed by casting onto the finished body, so none floats off the skin.
from mathutils.bvhtree import BVHTree
dg = bpy.context.evaluated_depsgraph_get()
bm_mesh = body.evaluated_get(dg).to_mesh()
tree = BVHTree.FromPolygons([v.co.copy() for v in bm_mesh.vertices], [tuple(f.vertices) for f in bm_mesh.polygons])

def point_on(pts, t):
    total = sum((pts[i+1]-pts[i]).length for i in range(len(pts)-1)); want = t*total; d = 0
    for i in range(len(pts)-1):
        seg = (pts[i+1]-pts[i]).length
        if d + seg >= want:
            return pts[i].lerp(pts[i+1], (want-d)/seg), (pts[i+1]-pts[i]).normalized()
        d += seg
    return pts[-1], (pts[-1]-pts[-2]).normalized()

for pts, isv in [(p, True) for p in vent] + [(p, False) for p in dorsal]:
    n = random.choice((2, 3)) if isv else random.choice((3, 4))
    for _ in range(n):
        p, ax = point_on(pts, random.uniform(0.3, 0.88))
        side = Vector((random.uniform(-.5, .5), random.uniform(-.5, .5), 1.0))
        nout = (side - ax*side.dot(ax)).normalized()          # perpendicular to the limb
        hit, nrm, _, _ = tree.ray_cast(p + nout*0.6, -nout)
        if hit is None:
            continue
        bpy.ops.mesh.primitive_uv_sphere_add(radius=0.024, location=hit - nrm*0.012)
        bpy.context.object.data.materials.append(eye)

# the capsule, lying on the surface between the two laid limbs
bpy.ops.mesh.primitive_cylinder_add(radius=0.07, depth=0.22, location=(CX, CY, CZ), rotation=(0, math.radians(90), math.radians(15)))
c = bpy.context.object; c.data.materials.append(cap)
bv = c.modifiers.new('bevel', 'BEVEL'); bv.width = 0.015; bv.segments = 4

# the room: floor, side wall, and a back wall with a wide low dark doorway
bpy.ops.mesh.primitive_plane_add(size=16, location=(0, 0, 0)); bpy.context.object.data.materials.append(stone)
bpy.ops.mesh.primitive_plane_add(size=16, location=(-4.5, 0, 4), rotation=(0, math.radians(90), 0)); bpy.context.object.data.materials.append(stone)
WALL_Y, H = 3.6, 5.0
DOOR_X0, DOOR_X1, DOOR_H = -1.9, 1.1, 2.0
def box(x0, x1, z0, z1, y0, y1, m):
    bpy.ops.mesh.primitive_cube_add(location=((x0+x1)/2, (y0+y1)/2, (z0+z1)/2))
    o = bpy.context.object; o.scale = ((x1-x0)/2, (y1-y0)/2, (z1-z0)/2); o.data.materials.append(m)
    return o
box(-4.5, DOOR_X0, 0, H, WALL_Y, WALL_Y+0.3, stone)
box(DOOR_X1, 8, 0, H, WALL_Y, WALL_Y+0.3, stone)
box(DOOR_X0, DOOR_X1, DOOR_H, H, WALL_Y, WALL_Y+0.3, stone)
box(DOOR_X0-0.5, DOOR_X1+0.5, -0.01, DOOR_H+0.5, WALL_Y+0.31, WALL_Y+3.0, dark)   # the unlit space beyond
# rounded coving where wall meets floor
bpy.ops.mesh.primitive_cylinder_add(radius=0.25, depth=12.5, location=(3.3, WALL_Y-0.0, 0.0), rotation=(0, math.radians(90), 0))
bpy.context.object.data.materials.append(stone)

# hard light: one narrow slot overhead and to one side, little fill
bpy.ops.object.light_add(type='AREA', location=(2.2, -1.6, 4.6)); L = bpy.context.object
L.data.shape = 'RECTANGLE'; L.data.size = 0.25; L.data.size_y = 2.4; L.data.energy = 260
L.data.color = (1.0, 0.95, 0.88)
L.rotation_euler = (math.radians(18), math.radians(-12), math.radians(20))
w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.05

# camera: a little above and to one side, framed to keep the doorway and the surface
bpy.ops.object.camera_add(location=(5.9, -4.6, 2.55)); cam = bpy.context.object; scn.camera = cam
d = Vector((0.8, 0.3, 0.55)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cam.data.lens = 30

scn.render.engine = 'CYCLES'; scn.cycles.samples = 128; scn.cycles.use_denoising = True; scn.cycles.device = 'CPU'
scn.render.resolution_x, scn.render.resolution_y = 1600, 900
scn.view_settings.look = 'AgX - Medium High Contrast'
scn.render.filepath = out; scn.render.image_settings.file_format = 'PNG'
bpy.ops.render.render(write_still=True)
