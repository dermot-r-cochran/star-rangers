"""Blender blockout of the Chthonari body, plan A (the sole), for
species-design.md (Vessik and the Chthonari) and images.md, the crew entries.

LOCAL AUTHORING TOOL - not part of the build, not run by `npm test`, not
touched by CI. Needs Blender (5.2 used, 17 November 2026).

    blender -b -P scripts/blockouts/chthonari-a.py -- <out.png> [pose]

pose: `study` (default: one being at a slab, three-quarter from mid height,
the round-2 study), `listen` (all six limbs down, no slab), `run` (mid-stride
along a member) or `address` (the working pair raised clear of the deck).

THE BODY (Dermot, 17 November 2026, "A: the sole"): one flat disc with no
head, no sections and no seam, lying on its lower carapace, which is how it
hears; six limbs leave the rim like spokes and lie low along the structure,
gripping; the pair nearest the work lifts to strike or write.

WHAT ROUND 1 TAUGHT (the options studies of the same day), and the change:

- pointed tips came from the limb segments being stretched spheres, which
  taper to a point. Here each segment is a capsule (a cylinder with round
  ends) and every limb ends in a round flattened pad: blunt, no claw.
- a seam round the rim like a lid came from the disc being two stacked
  spheres. Here it is one flattened sphere, slightly oval, sunk a little
  into the deck so no gap shows beneath it.
- the crab and the turtle came partly from six equal limbs at even angles.
  Here the reaches differ a little and the working pair is lifted, so the
  spokes are not a pattern.
- the figurine finish came from an even grey material. Here the hide is
  mottled slate to warm bronze, with a fine irregular grain and duller worn
  patches, and one hard light from the left.

RESULT (17 November 2026, images.md, Chthonari body A, applied): the outline
held in every photographic take, with no crab, turtle or seam; the finish
did not. Even round limbs (round 2) came back a leather toy, thick-rooted
limbs (round 3) fingers, and these hard tapered ten-faced segments (round 4)
a cast-metal robot. Nothing was filed. The grey render of this file as it
stands is story-bible/reference-art/chthonari-body-2026-11-17.jpg.
"""
import bpy, math, sys
from mathutils import Vector

argv = sys.argv[sys.argv.index('--') + 1:]
out = argv[0]
pose = argv[1] if len(argv) > 1 else 'study'
bpy.ops.wm.read_factory_settings(use_empty=True)
scn = bpy.context.scene


def mat(name, rgb, rgb2, rough, fine, coarse, strength):
    m = bpy.data.materials.new(name); m.use_nodes = True
    nt = m.node_tree; n = nt.nodes; l = nt.links
    b = n['Principled BSDF']
    b.inputs['Roughness'].default_value = rough
    tc = n.new('ShaderNodeTexCoord')
    mott = n.new('ShaderNodeTexNoise'); mott.inputs['Scale'].default_value = coarse; mott.inputs['Detail'].default_value = 4
    ramp = n.new('ShaderNodeMixRGB'); ramp.inputs['Color1'].default_value = (*rgb, 1); ramp.inputs['Color2'].default_value = (*rgb2, 1)
    l.new(tc.outputs['Object'], mott.inputs['Vector']); l.new(mott.outputs['Fac'], ramp.inputs['Fac'])
    l.new(ramp.outputs['Color'], b.inputs['Base Color'])
    nz = n.new('ShaderNodeTexNoise'); nz.inputs['Scale'].default_value = fine; nz.inputs['Detail'].default_value = 12
    l.new(tc.outputs['Object'], nz.inputs['Vector'])
    bump = n.new('ShaderNodeBump'); bump.inputs['Strength'].default_value = strength; bump.inputs['Distance'].default_value = 0.01
    l.new(nz.outputs['Fac'], bump.inputs['Height']); l.new(bump.outputs['Normal'], b.inputs['Normal'])
    return m


hide = mat('hide', (0.07, 0.075, 0.08), (0.13, 0.10, 0.07), 0.72, 320, 9, 0.45)
limb = mat('limb', (0.065, 0.07, 0.075), (0.12, 0.095, 0.065), 0.7, 900, 14, 0.12)
plate = mat('plate', (0.10, 0.13, 0.19), (0.12, 0.15, 0.21), 0.6, 40, 2.5, 0.15)
stone = mat('stone', (0.16, 0.17, 0.19), (0.18, 0.18, 0.19), 0.85, 90, 6, 0.3)


def sm(o, m):
    o.data.materials.append(m)
    for p in o.data.polygons:
        p.use_smooth = True
    return o


def ball(c, s, m):
    bpy.ops.mesh.primitive_uv_sphere_add(segments=48, ring_count=24, location=c)
    o = bpy.context.object; o.scale = s; return sm(o, m)


def capsule(a, b, r, m):
    """One hard limb segment: a slightly flattened, slightly tapered tube of
    ten faces, ending at a narrower joint. Round 2's even 32-face tubes with
    joints as wide as the segments read as a stuffed or rubber toy."""
    a, b = Vector(a), Vector(b); d = b - a
    bpy.ops.mesh.primitive_cone_add(vertices=10, radius1=r, radius2=r * 0.8, depth=d.length * 0.92, location=(a + b) / 2)
    o = bpy.context.object; o.scale = (1.0, 0.8, 1.0)
    o.rotation_euler = d.to_track_quat('Z', 'Y').to_euler(); sm(o, m)
    ball(b, (r * 0.72, r * 0.72, r * 0.72), m)


def limb_chain(pts, r):
    ball(pts[0], (r * 1.25, r * 1.25, r * 1.1), limb)    # the root, half inside the rim
    for i in range(len(pts) - 1):   # near-even girth: a thick root made fingers (round 3)
        capsule(pts[i], pts[i + 1], r * (1.0 - 0.12 * i), limb)
    t = Vector(pts[-1])
    ball(t, (r * 1.15, r * 1.15, r * 0.7), limb)          # a blunt pad, flattened


# room: floor, back wall, two plain columns, the slab
bpy.ops.mesh.primitive_plane_add(size=40); bpy.context.object.data.materials.append(plate)
bpy.ops.mesh.primitive_plane_add(size=40, location=(0, 4.0, 0), rotation=(math.radians(90), 0, 0)); bpy.context.object.data.materials.append(plate)
for x, y in ((1.3, 2.2), (-1.6, 3.0)):
    bpy.ops.mesh.primitive_cube_add(location=(x, y, 1.5)); c = bpy.context.object; c.scale = (0.14, 0.14, 1.5); c.data.materials.append(plate)

ST = 0.0
if pose == 'study':
    SL = Vector((0.20, -0.52, 0.012))
    bpy.ops.mesh.primitive_cube_add(location=SL); s = bpy.context.object; s.scale = (0.26, 0.17, 0.012); s.rotation_euler = (0, 0, 0.12); s.data.materials.append(stone)
    ST = 0.024
if pose == 'run':
    bpy.ops.mesh.primitive_cube_add(location=(0, 0, -0.04)); s = bpy.context.object; s.scale = (2.0, 0.30, 0.04); s.data.materials.append(plate)

# the disc: one flattened sphere, slightly oval, sunk a little into the deck
R = 0.25
ball((0, 0, 0.038), (R, R * 0.93, 0.058), hide)

# six limbs from the rim like spokes, reaches a little unequal; index 0 and 5
# face the work (towards -Y, the slab)
reach = [1.00, 0.92, 1.06, 0.97, 1.04, 0.95]
for i in range(6):
    t = math.radians(-90 + 30 + 60 * i); u = Vector((math.cos(t), math.sin(t), 0))
    k = reach[i]
    root = u * (R * 0.86) + Vector((0, 0, 0.035))
    j1 = u * (R + 0.07 * k) + Vector((0, 0, 0.072))
    j2 = u * (R + 0.15 * k) + Vector((0, 0, 0.050))
    tip = u * (R + 0.22 * k) + Vector((0, 0, 0.020))
    if pose == 'study' and i == 0:     # writing: the pad set down on the slab
        j1 = u * (R + 0.06) + Vector((0, 0, 0.09))
        j2 = u * (R + 0.13) + Vector((0, 0, 0.08))
        tip = u * (R + 0.19) + Vector((0, 0, ST + 0.018))
    if pose in ('study', 'address') and i == 5:   # striking: lifted clear
        j1 = u * (R + 0.05) + Vector((0, 0, 0.11))
        j2 = u * (R + 0.11) + Vector((0, 0, 0.16))
        tip = u * (R + 0.17) + Vector((0, 0, 0.12 if pose == 'study' else 0.17))
    if pose == 'address' and i == 0:
        j1 = u * (R + 0.05) + Vector((0, 0, 0.11))
        j2 = u * (R + 0.11) + Vector((0, 0, 0.17))
        tip = u * (R + 0.17) + Vector((0, 0, 0.19))
    if pose == 'run' and i in (1, 3):
        j2 = j2 + Vector((0, 0, 0.05)); tip = tip + Vector((0, 0, 0.07))
    limb_chain([root, j1, j2, tip], 0.029)

aim = Vector((0.02, -0.12, 0.05))
bpy.ops.object.light_add(type='AREA', location=(-2.2, -1.2, 2.2)); L = bpy.context.object
L.data.size = 0.5; L.data.energy = 260; L.data.color = (1.0, 0.97, 0.93)
L.rotation_euler = (aim - L.location).to_track_quat('-Z', 'Y').to_euler()
w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
w.node_tree.nodes['Background'].inputs['Strength'].default_value = 0.22
w.node_tree.nodes['Background'].inputs['Color'].default_value = (0.6, 0.7, 0.9, 1)
bpy.ops.object.camera_add(location=(0.80, -1.30, 0.62)); cam = bpy.context.object; scn.camera = cam
cam.rotation_euler = (aim - cam.location).to_track_quat('-Z', 'Y').to_euler(); cam.data.lens = 40
scn.render.engine = 'CYCLES'; scn.cycles.samples = 48; scn.cycles.use_denoising = True; scn.cycles.device = 'CPU'
scn.render.resolution_x, scn.render.resolution_y = 1600, 900
scn.render.filepath = out; scn.render.image_settings.file_format = 'PNG'
bpy.ops.render.render(write_still=True)
