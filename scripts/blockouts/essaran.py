"""Blender blockout of Essaran (Cerebraun), for images.md § 47, round 2.

LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
touched by CI. Needs Blender (5.2 used, 31 October 2026).

    blender -b -P scripts/blockouts/essaran.py -- <out.png>

Adapted from `vaurel-2.py`, keeping its body (a wide low disc, a hydrostat
with no joints, eyes set into the skin along the limbs) and its material
grain. What changes is § 47's round-2 frame. The room is a Cerebraun-made
office, not a teaching room: a low island of seamed composite standing free,
with floor all round it; floor and wall each carrying a smoother, darker band
low down where bodies pass; and the lower corner of a wide low dark opening
at the far side. The light is hard, low and from one side. The camera is a
little above the body's top, three-quarter on, with the flanks leaving the
frame. Round 1 (text-to-image) read as trunks over a headless torso, so the
three upper limbs leave from three different places (near flank, upper side
through a flared root, far flank) and none lies parallel to another.
"""
import bpy, math, sys, random
from mathutils import Vector

out = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)
scn = bpy.context.scene
random.seed(23)

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

skin, sb = mat('skin', (0.11, 0.075, 0.055), 0.9)      # deep muted umber-brown, matte (§ 47's tone)
grain(skin, sb, 140.0, 5.0, 0.25)                     # finer, weaker creases than Vaurel's: smooth along a limb
eye, _ = mat('eye', (0.02, 0.02, 0.02), 0.45)
stone, stb = mat('stone', (0.50, 0.51, 0.52), 0.95)  # cooler pale grey than Vaurel's room
grain(stone, stb, 60.0, 2.0, 0.08)
worn, wb = mat('worn', (0.40, 0.40, 0.41), 0.7)      # the band where bodies pass: smoother, a little darker
grain(worn, wb, 60.0, 2.0, 0.03)
comp, cb = mat('composite', (0.58, 0.57, 0.55), 0.8)
grain(comp, cb, 90.0, 4.0, 0.05)
slabm, _ = mat('slab', (0.09, 0.09, 0.10), 0.5)
dark, _ = mat('dark', (0.0, 0.0, 0.0), 1.0)

# --- body as one metaball (a hydrostat has no joints)
mb = bpy.data.metaballs.new('essaran'); mb.resolution = 0.035; mb.render_resolution = 0.016; mb.threshold = 0.6
body = bpy.data.objects.new('essaran', mb); scn.collection.objects.link(body); body.data.materials.append(skin)

def ball(p, r, squash=None):
    e = mb.elements.new(); e.co = Vector(p); e.radius = r
    if squash:
        e.type = 'ELLIPSOID'; e.size_x, e.size_y, e.size_z = squash
    return e

BODY_Z = 0.5
ball((0, 0, BODY_Z), 1.25, (1.6, 1.5, 0.28))        # much wider than tall: no chest, no hips
ball((0.1, -0.1, BODY_Z + 0.08), 0.75, (1.2, 1.1, 0.24))

def limb(points, r0, r1, step=0.075, wobble=0.03):
    """chain of balls along a polyline, girth tapering unevenly, blunt tip"""
    pts = [Vector(p) for p in points]
    total = sum((pts[i+1]-pts[i]).length for i in range(len(pts)-1)); d = 0.0
    ph = random.uniform(0, 6.28)
    for i in range(len(pts)-1):
        a, b = pts[i], pts[i+1]; seg = (b-a).length; n = max(1, int(seg/step))
        for k in range(n):
            t = k/n; s = (d + seg*t)/total
            p = a.lerp(b, t) + Vector((0, 0, wobble*math.sin(ph + s*9)))
            r = (r0 + (r1-r0)*s) * (1 + 0.06*math.sin(ph*2 + s*13))
            ball(p, r)
        d += seg
    ball(pts[-1], r1 * 1.02)
    return pts

# the lower tier: four short broad limbs on the floor, mostly below and out of the crop
vent = []
for ang, g in ((30, 1.0), (150, 0.94), (210, 1.05), (330, 0.97)):
    a = math.radians(ang); dx, dy = math.cos(a), math.sin(a)
    pts = [(0.45*dx, 0.45*dy, BODY_Z-0.15), (0.88*dx, 0.88*dy, 0.3), (1.1*dx, 1.1*dy, 0.11)]
    vent.append(limb(pts, 0.33*g, 0.27*g))

# the island: low, broad, bare, standing free with floor all round it
ISL_Z = 0.55
IX, IY = 2.3, -0.2
bpy.ops.mesh.primitive_cube_add(location=(IX, IY, ISL_Z/2))
s = bpy.context.object; s.scale = (0.75, 1.15, ISL_Z/2); s.data.materials.append(comp)
bv = s.modifiers.new('bevel', 'BEVEL'); bv.width = 0.05; bv.segments = 6
bpy.ops.object.transform_apply(scale=True)
# a seam across the island's top
bpy.ops.mesh.primitive_cube_add(location=(IX, IY, ISL_Z + 0.001)); sm = bpy.context.object
sm.scale = (0.74, 0.004, 0.002); sm.data.materials.append(dark)

# the slab: flat, sealed, dark, no screen
SX, SY, SZ = IX + 0.05, IY + 0.25, ISL_Z + 0.02
bpy.ops.mesh.primitive_cube_add(location=(SX, SY, SZ)); sl = bpy.context.object
sl.scale = (0.28, 0.2, 0.018); sl.data.materials.append(slabm)
bv = sl.modifiers.new('bevel', 'BEVEL'); bv.width = 0.012; bv.segments = 3

dorsal = []
# 1. near flank: out and round, wrapped once over the island's near edge
dorsal.append(limb([(0.6, -0.95, BODY_Z+0.05), (1.15, -1.45, 0.6), (1.75, -1.25, ISL_Z+0.15),
                    (1.8, -0.85, ISL_Z+0.08), (1.65, -0.7, ISL_Z-0.12)], 0.22, 0.12))
# 2. upper side near the island-ward rim, through a broad flared root: leaning
# low out over the slab, never upright from the centre (an upright root read as a neck)
ball((0.75, 0.15, BODY_Z + 0.12), 0.5, (0.7, 0.6, 0.38))
dorsal.append(limb([(0.75, 0.15, BODY_Z+0.05), (1.2, 0.3, 0.95), (1.75, 0.35, 1.0), (2.2, 0.2, SZ+0.3)], 0.25, 0.11))
# 3. far flank: curled back along the top, away from the island
dorsal.append(limb([(0.15, 0.95, BODY_Z+0.1), (0.5, 1.5, 0.7), (-0.2, 1.75, 0.85), (-0.75, 1.3, 0.75)], 0.19, 0.11))
# 4. down the far side, out of frame
dorsal.append(limb([(-0.6, -0.4, BODY_Z+0.2), (-1.15, -0.9, 0.35), (-1.45, -1.5, 0.13)], 0.18, 0.1))

# eyes set into the skin along the limbs, unevenly spaced, never paired
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
        nout = (side - ax*side.dot(ax)).normalized()
        hit, nrm, _, _ = tree.ray_cast(p + nout*0.6, -nout)
        if hit is None:
            continue
        bpy.ops.mesh.primitive_uv_sphere_add(radius=0.024, location=hit - nrm*0.012)
        bpy.context.object.data.materials.append(eye)

# the room: floor with a worn band, back wall with a low worn band, and the
# lower corner of a wide low dark opening at the frame's far side
bpy.ops.mesh.primitive_plane_add(size=18, location=(0, 0, 0)); bpy.context.object.data.materials.append(stone)
bpy.ops.mesh.primitive_plane_add(size=1, location=(1.2, 0.0, 0.002)); fb = bpy.context.object
fb.scale = (6.0, 3.2, 1); fb.data.materials.append(worn)          # where bodies pass
WALL_Y, H = 3.4, 5.0
def box(x0, x1, z0, z1, y0, y1, m):
    bpy.ops.mesh.primitive_cube_add(location=((x0+x1)/2, (y0+y1)/2, (z0+z1)/2))
    o = bpy.context.object; o.scale = ((x1-x0)/2, (y1-y0)/2, (z1-z0)/2); o.data.materials.append(m)
    return o
DOOR_X0, DOOR_H = 3.2, 1.6                                         # its top not much above the body's
box(-6, DOOR_X0, 0, H, WALL_Y, WALL_Y+0.3, stone)
box(DOOR_X0, 12, DOOR_H, H, WALL_Y, WALL_Y+0.3, stone)
box(-6, DOOR_X0, 0, 0.85, WALL_Y-0.01, WALL_Y, worn)               # the wall's low band, rubbed by limbs
box(DOOR_X0-0.2, 12, -0.01, DOOR_H+0.4, WALL_Y+0.31, WALL_Y+3.0, dark)   # the unlit space beyond
bpy.ops.mesh.primitive_cylinder_add(radius=0.25, depth=18, location=(0, WALL_Y, 0.0), rotation=(0, math.radians(90), 0))
bpy.context.object.data.materials.append(stone)

# hard light, low and from one side, at about the height of the body's top
bpy.ops.object.light_add(type='AREA', location=(1.0, -4.8, 1.3)); L = bpy.context.object
L.data.shape = 'RECTANGLE'; L.data.size = 0.3; L.data.size_y = 1.6; L.data.energy = 420
L.data.color = (1.0, 0.97, 0.92)
d = Vector((1.0, 0.0, 0.6)) - L.location; L.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.04

# camera: a little above the body's top, three-quarter on, flanks leaving the frame
bpy.ops.object.camera_add(location=(3.9, -3.3, 2.7)); cam = bpy.context.object; scn.camera = cam
d = Vector((0.9, -0.1, 0.45)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cam.data.lens = 32

scn.render.engine = 'CYCLES'; scn.cycles.samples = 128; scn.cycles.use_denoising = True; scn.cycles.device = 'CPU'
scn.render.resolution_x, scn.render.resolution_y = 1600, 900
scn.view_settings.look = 'AgX - Medium High Contrast'
scn.render.filepath = out; scn.render.image_settings.file_format = 'PNG'
bpy.ops.render.render(write_still=True)
