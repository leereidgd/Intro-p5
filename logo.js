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

function setup() {
  createCanvas(400, 400);
  noFill()
  strokeWeight(10)
  circleNumSlider = createSlider(1, 15)
  circleGapSlider = createSlider (20, 100)
  circles1ColorPicker = createColorPicker('#F64740');
  backgroundColorPicker = createColorPicker('#477998');
  lines1NumSlider = createSlider(1, 10)
  lines1LenSlider = createSlider(50, 200)
  lines1DistSlider = createSlider(0, 150)
  lines1SpinSlider = createSlider(-180, 180)
  showLines1Checkbox = createCheckbox('show', true);
}

function draw() {
  background(backgroundColorPicker.value());
  translate (width/2, height/2);
  drawCircles()
  if (showLines1Checkbox.checked()){
    drawLines1()
  }
}

function drawLines1() {
  let num = lines1NumSlider.value()
  let len = lines1LenSlider.value()
  for (let i = 0; i < num; i++) {
    push ()
    stroke('#C4D6B0')
    
    rotate(i/num * TWO_PI)
    translate (lines1DistSlider.value(), 0)
    rotate(radians(lines1SpinSlider.value()))
    line (-len/2, 0, len/2, 0)
    pop()
  }
}

function drawCircles () {
  let num = circleNumSlider.value()
  let gap = circleGapSlider.value()
  stroke(circles1ColorPicker.value())
  for (let i = 0; i < num; i++) {
    push ()
    circle(0, 0, (i+1) * gap)
    pop ()
  }
}