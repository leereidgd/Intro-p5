const myColors = ["#c4f1be", "#A2C3A4", "#869D96", "#525B76", "#201E50" ];
const dots = [];

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background("#201E50");
  noStroke();
  fill(255);
  for (const dot of dots) {
    ellipse(dot.x, dot.y, dot.size);
  }

  const shipX = width / 2 + sin(frameCount * 0.005) * (width / 2 - 50);
  const shipY = height / 2 + cos(frameCount * 0.007) * (height / 2 - 50);
  push();
  translate(shipX, shipY);
  fill("#869D96");
  ellipse(0, 0, 50, 50);

  fill("#525B76");
  ellipse(0, 0, 80, 10);

  fill("#525B76");
  ellipse(0, 0, 80, 10);
  pop();

  fill("#c4f1be");
  ellipse(width/2, height/2, 300, 350);
  let eyeSize = map(mouseX, 0, width, 10, 70);
  fill(0);
  push();
  translate(width/2 - 50, height/2 - 50);
  rotate(-PI / 10);
  ellipse(0, 0, eyeSize * 0.7, eyeSize);
  pop();

  push();
  translate(width/2 + 50, height/2 - 50);
  rotate(PI / 10);
  ellipse(0, 0, eyeSize * 0.7, eyeSize);
  pop();

  fill("#c4f1be");
  noStroke();
  rect(350,500, 100, 200);

    noFill();
  stroke("pink");
  strokeWeight(3);
  arc(width / 2, height / 2 + 100, 36, 20, 0, PI);
 
    fill("#c4f1be");
  noStroke();
  rect(700,700, 50, 400);

   fill("#c4f1be");
  ellipse(725, 670, 100, 100);

     fill("#c4f1be");
  noStroke();
  rect(680,550, 20, 100, 50, 50, 0, 0);


       fill("#c4f1be");
  noStroke();
  rect(710,550, 20, 100, 50, 50, 0, 0);


       fill("#c4f1be");
  noStroke();
  rect(740, 610, 20, 50, 50, 50, 0, 0);


         fill("#c4f1be");
  noStroke();
  rect(760, 610, 20, 50, 50, 50, 50, 0);


  fill("#c4f1be");
  noStroke();
  rect(250,600, 300, 200, 50, 50, 0, 0);

}

function mouseMoved() {
  const lastDot = dots[dots.length - 1];
  if (!lastDot || dist(mouseX, mouseY, lastDot.x, lastDot.y) >= 24) {
    dots.push({ x: mouseX, y: mouseY, size: random(2, 6) });
  }
}