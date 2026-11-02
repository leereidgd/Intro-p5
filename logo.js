const myColors = ("#D99AC3", "#202126", "#D3D936", "#F2D0A7", "#F2622E")

let circleNumSlider
let circleGapSlider
let circles1ColorPicker
let backgroundColorPicker
let lines1NumSlider
let lines1LenSlider
let lines1DistSlider
let lines1SpinSlider
let showLines1Checkbox
let lines1StrokeWeightSlider
let lines1RotateSlider
let spiderBodySlider
let spiderRadialLineLengthSlider
let spiderRotationSlider
let spiderEyeCountSlider
let spiderMotifCountSlider
let spiderMotifs = []
const spiderBodyColor = '#D99Ac3'

function setup() {
  const layout = createDiv().class('layout')
  const canvasPanel = createDiv().class('canvas-panel').parent(layout)
  createCanvas(400, 400).parent(canvasPanel)
  noFill()
  strokeWeight(10)
  const spiderControls = createDiv().class('controls settings-column').parent(layout)
  createElement('h2', 'Spider & Bugs').parent(spiderControls)
  spiderBodySlider = createLabeledSlider(spiderControls, 'Spider body slider', 40, 150, 40, 'spider-body')
  spiderRadialLineLengthSlider = createLabeledSlider(spiderControls, 'Leg length', 0, 150, 40, 'spider-radial-line-length')
  spiderRotationSlider = createLabeledSlider(spiderControls, 'Spider rotation', -180, 180, 0, 'spider-rotation')
  spiderEyeCountSlider = createLabeledSlider(spiderControls, 'Spider eye count', 2, 4, 2, 'spider-eye-count')
  spiderMotifCountSlider = createLabeledSlider(spiderControls, 'Bug amount', 0, 12, 3, 'spider-motif-count')
  spiderMotifCountSlider.elt.addEventListener('input', regenerateSpiderMotifs)
  createButton('Bug placement').parent(spiderControls).mousePressed(regenerateSpiderMotifs)
  regenerateSpiderMotifs()
  const designControls = createDiv().class('controls settings-column').parent(layout)
  createElement('h2', 'Spider Web').parent(designControls)
  circleNumSlider = createLabeledSlider(designControls, 'Number of hexagons', 1, 15, 5, 'circle-num')
  circleGapSlider = createLabeledSlider(designControls, 'Hexagon spacing', 20, 100, 68, 'circle-gap')
  lines1NumSlider = createLabeledSlider(designControls, 'Number of lines', 1, 10, 6, 'lines-num')
  lines1LenSlider = createLabeledSlider(designControls, 'Line length', 50, 200, 189, 'lines-length')
  lines1DistSlider = createLabeledSlider(designControls, 'Line distance', 0, 150, 125, 'lines-distance')
  lines1SpinSlider = createLabeledSlider(designControls, 'Line spin', -180, 180, 1, 'lines-spin')
  lines1RotateSlider = createLabeledSlider(designControls, 'Line rotation', 0, 360, 0, 'lines-rotation')
  lines1StrokeWeightSlider = createLabeledSlider(designControls, 'Line width', 1, 20, 4, 'lines-width')
  circles1ColorPicker = createLabeledColorPicker(designControls, 'Hexagon color', '#F2D0A7', 'hexagon-color')
  backgroundColorPicker = createLabeledColorPicker(designControls, 'Background color', '#202126', 'background-color')
  showLines1Checkbox = createCheckbox('show', true).parent(designControls)
}

function createLabeledSlider(parent, labelText, min, max, initialValue, id) {
  const control = createDiv().class('control').parent(parent)
  const label = createElement('label', labelText)
  label.attribute('for', id)
  label.parent(control)
  const value = createElement('output', String(initialValue))
  value.attribute('for', id)
  value.parent(control)
  const slider = createSlider(min, max, initialValue).id(id).parent(control)
  slider.input(() => value.html(String(slider.value())))
  return slider
}

function createLabeledColorPicker(parent, labelText, initialValue, id) {
  const control = createDiv().class('control').parent(parent)
  const label = createElement('label', labelText)
  label.attribute('for', id)
  label.parent(control)
  return createColorPicker(initialValue).id(id).parent(control)
}

function draw() {
  background(backgroundColorPicker.value());
  translate (width/2, height/2);
  if (showLines1Checkbox.checked()){
    push()
    drawCircles()
    drawLines1()
    pop()
  }
  push()
  rotate(radians(spiderRotationSlider.value()))
  drawSpiderRadialLines()
  noStroke()
  fill(spiderBodyColor)
  const bodySize = spiderBodySlider.value()
  circle(0, 0, bodySize)
  const eyePositions = spiderEyeCountSlider.value() === 2
    ? [[-0.21, -0.16, 1], [0.21, -0.16, 1]]
    : spiderEyeCountSlider.value() === 3
      ? [[-0.21, -0.16, 1], [0.21, -0.16, 1], [0, 0.15, 0.75]]
      : [[-0.21, -0.16, 1], [0.21, -0.16, 1], [-0.17, 0.15, 0.75], [0.17, 0.15, 0.75]]
  const topShift = ((bodySize - 40) / (150 - 40)) * 0.12
  for (const [x, y, sizeScale] of eyePositions) {
    const eyeX = x * bodySize
    const eyeY = (y - topShift) * bodySize
    const eyeSize = bodySize * 0.38 * sizeScale
    const pupilSize = eyeSize * 0.72
    fill('#F2D0A7')
    circle(eyeX, eyeY, eyeSize)
    fill('#202126')
    circle(eyeX, eyeY, pupilSize)
  }
  pop()
  drawSpiderMotifs()
}

function regenerateSpiderMotifs() {
  const count = spiderMotifCountSlider.value()
  spiderMotifs = []
  for (let i = 0; i < count; i++) {
    spiderMotifs.push({
      x: random(-width / 2 + 25, width / 2 - 25),
      y: random(-height / 2 + 25, height / 2 - 25),
      rotation: random(TWO_PI)
    })
  }
}

function drawSpiderMotifs() {
  push()
  for (const motif of spiderMotifs) {
    push()
    translate(motif.x, motif.y)
    rotate(motif.rotation)
    noStroke()
    fill('#D3D936')
    ellipse(0, 0, 20, 12)
    stroke('#D3D936')
    strokeWeight(2)
    for (const side of [-1, 1]) {
      for (const x of [-5, 0, 5]) {
        const startY = side * 5
        const endY = side * 10
        line(x, startY, x, endY)
      }
    }
    pop()
  }
  pop()
}

function drawSpiderRadialLines() {
  const bodyRadius = spiderBodySlider.value() / 2
  const lineLength = spiderRadialLineLengthSlider.value()
  const attachOffsets = [-0.75, -0.25, 0.25, 0.75]
  const kneeOffsets = [-0.55, -0.2, 0.2, 0.55]
  const endOffsets = [-0.9, -0.3, 0.3, 0.9]

  push()
  stroke(spiderBodyColor)
  strokeWeight(lines1StrokeWeightSlider.value())
  strokeCap(ROUND)
  for (const side of [-1, 1]) {
    for (let i = 0; i < attachOffsets.length; i++) {
      const startX = side * bodyRadius * 0.75
      const startY = attachOffsets[i] * bodyRadius
      const kneeX = side * (bodyRadius + lineLength * 0.45)
      const kneeY = startY + kneeOffsets[i] * lineLength
      const endX = side * (bodyRadius + lineLength)
      const endY = startY + endOffsets[i] * lineLength
      line(startX, startY, kneeX, kneeY)
      line(kneeX, kneeY, endX, endY)
    }
  }
  pop()
}

function drawLines1() {
  let num = lines1NumSlider.value()
  let len = lines1LenSlider.value()
  strokeWeight(lines1StrokeWeightSlider.value())
  rotate(radians(lines1RotateSlider.value()))
  for (let i = 0; i < num; i++) {
    push ()
    stroke('#F2D0A7')
    
    rotate(i/num * TWO_PI)
    translate (lines1DistSlider.value(), 0)
    rotate(radians(lines1SpinSlider.value()))
    line (-len/2, 0, len/2, 0)
    pop()
  }
}

function drawHexagon(x, y, radius) {
  beginShape()
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i - HALF_PI
    let px = x + cos(angle) * radius
    let py = y + sin(angle) * radius
    vertex(px, py)
  }
  endShape(CLOSE)
}

function drawCircles () {
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value()
  stroke(circles1ColorPicker.value())
  strokeWeight(lines1StrokeWeightSlider.value())
  for (let i = 0; i < num; i++) {
    push ()
    drawHexagon(0, 0, ((i + 1) * gap) / 2)
    pop ()
  }
}