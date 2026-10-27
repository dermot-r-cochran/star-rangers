"""Blender blockout of Idrun Hesk (Ilveth) along a sealed stone bank, for images.md § 31.

LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
touched by CI. Needs Blender (5.2 used, 27 October 2026).

    blender -b -P scripts/blockouts/idrun-hesk.py -- <out.png>

WHY THIS EXISTS: the thermal frame filed on 24 October showed one smooth,
limbless pale mass with a curling hood, and Dermot read it as a slug (27
October). The record's body is not that: `src/lore/ilveth.md` makes an Ilveth
long and low, with several paired limbs under a segmented body, a hooded
sensory crown rising from the forward third, and broad vanes along the flank.
A text prompt asked for "no limbs in view" and got a slug. This blockout fixes
the segments and the limbs in the geometry, so the thermal edit has only to
re-light it; the route Vaurel's portrait took (`vaurel.py`).
"""
import bpy, math, sys
from mathutils import Vector

out = sys.argv[sys.argv.index('--') + 1]
bpy.ops.wm.read_factory_settings(use_empty=True)
scn = bpy.context.scene

def mat(name, rgb, rough=0.9):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    return m

hide = mat('hide', (0.5, 0.5, 0.52))
vane = mat('vane', (0.62, 0.62, 0.64))
ice = mat('ice', (0.35, 0.36, 0.38), 0.6)
stone = mat('stone', (0.18, 0.18, 0.19))

# --- the segmented body: one ellipsoid metaball per segment, pinched between,
# low to the ground, running away from the camera's left toward the right edge
mb = bpy.data.metaballs.new('hesk'); mb.resolution = 0.05; mb.render_resolution = 0.025; mb.threshold = 0.6
body = bpy.data.objects.new('hesk', mb); scn.collection.objects.link(body); body.data.materials.append(hide)

def ball(p, r, squash):
    e = mb.elements.new(); e.co = Vector(p); e.radius = r
    e.type = 'ELLIPSOID'; e.size_x, e.size_y, e.size_z = squash

SEG = 0.95                       # segment pitch along x
N = 7
for i in range(N):
    x = i * SEG
    ball((x, 0.12 * math.sin(i * 0.9), 0.7 - 0.03 * i), 1.5, (0.66, 0.85, 0.5))           # each segment its own swell; the pinch between is the seam

# the forward third rises into a hooded crown, its hood overhanging the front
ball((-0.7, 0, 0.95), 1.4, (0.7, 0.8, 0.55))
ball((-1.2, 0, 1.35), 1.3, (0.62, 0.74, 0.55))
ball((-1.6, 0, 1.7), 1.2, (0.55, 0.75, 0.36))              # the hood's lip, flat and broad, no face under it

# several paired limbs: short, sturdy, one pair per body segment, every foot on the ice
def limb(a, b, r):
    a, b = Vector(a), Vector(b); n = 8
    for k in range(n + 1):
        e = mb.elements.new(); e.co = a.lerp(b, k / n); e.radius = r * (1 - 0.2 * k / n)
for i in range(N):
    x = i * SEG
    for side in (-1, 1):
        limb((x, side * 0.7, 0.3), (x + 0.1, side * 0.95, 0.06), 0.28)

# broad thin vanes along the near flank, furled like sails and overlapping like
# shingles from the crown back. They are what no Earth crawler has, so they
# carry the silhouette: they cover the line of segments, and their lower edges
# hang as a skirt over the tops of the limbs, so only the feet show.
def sail(x0, length, zc, height, yflank, lean, rib_phase):
    """an organic vane: a fan-ribbed membrane, deep at its root, tapering to a
    rounded trailing point, its free edge scalloped between the ribs"""
    bpy.ops.mesh.primitive_grid_add(x_subdivisions=40, y_subdivisions=16, size=1)
    g = bpy.context.object
    for vtx in g.data.vertices:
        u, v = vtx.co.x + 0.5, vtx.co.y + 0.5          # u along the vane 0..1, v root (0) to free edge (1)
        depth = height * math.sin(math.pi * min(1.0, 0.15 + u)) ** 0.7 * (1 - 0.55 * u)   # deep at the root, tapering
        scallop = 0.06 * height * abs(math.sin(u * 9 * math.pi)) * v
        vtx.co.x = x0 + u * length + 0.12 * v * length * (u - 0.3)                         # ribs fan back toward the tail
        vtx.co.z = zc - 0.25 * height + v * depth - scallop
        vtx.co.y = yflank - lean * v ** 2 + 0.03 * math.sin(u * 9 * math.pi * 2 + rib_phase) * v
    g.data.materials.append(vane)
    sd = g.modifiers.new('sd', 'SOLIDIFY'); sd.thickness = 0.015
    sb = g.modifiers.new('sub', 'SUBSURF'); sb.levels = 1
for k, (x0, zc, h, yf) in enumerate(((0.35, 1.05, 0.85, -1.15), (1.7, 1.0, 0.8, -1.24), (3.05, 0.97, 0.75, -1.28), (4.4, 0.95, 0.7, -1.28))):
    sail(x0, 1.9, zc, h, yf, 0.3, k * 1.7)

# the ground: flat ice; the low bank of fitted stone along the far side and round to the left
bpy.ops.mesh.primitive_plane_add(size=40, location=(2, 0, 0)); bpy.context.object.data.materials.append(ice)
for j in range(9):
    for row in range(2):
        bpy.ops.mesh.primitive_cube_add(location=(-4.2 + j * 1.05 + (0.5 if row else 0), 1.35, 0.22 + row * 0.42))
        s = bpy.context.object; s.scale = (0.5, 0.35, 0.2); s.data.materials.append(stone)
        bv = s.modifiers.new('b', 'BEVEL'); bv.width = 0.05; bv.segments = 3

# light: dim even fill, nothing dramatic; the thermal edit relights it
w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.9
bpy.ops.object.light_add(type='SUN', location=(0, -5, 8)); bpy.context.object.data.energy = 2.5
bpy.context.object.rotation_euler = (math.radians(35), 0, math.radians(-20))

# camera: low, at the crown's height, a couple of metres off, side-on, so the
# limbs on the ice show under the body and the body runs out of the right edge
bpy.ops.object.camera_add(location=(-0.6, -4.6, 0.85)); cam = bpy.context.object; scn.camera = cam
d = Vector((0.4, 0.4, 0.8)) - cam.location; cam.rotation_euler = d.to_track_quat('-Z', 'Y').to_euler()
cam.data.lens = 28

scn.render.engine = 'CYCLES'; scn.cycles.samples = 64; scn.cycles.use_denoising = True; scn.cycles.device = 'CPU'
scn.render.resolution_x, scn.render.resolution_y = 1600, 900
scn.render.filepath = out; scn.render.image_settings.file_format = 'PNG'
bpy.ops.render.render(write_still=True)
