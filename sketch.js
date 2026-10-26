const myColors = ["#c4f1be", "#A2C3A4", "#869D96", "#525B76", "#201E50" ];

// function setup() {
  // createCanvas(800, 800);
  // background("#201E50");
  // cols = int(width/100);

  // let cols
  // let rows
  // let gridSize = 40
  // let gridSize = 50
  // let cols, rows
  let gridSize = 100
  let cols, rows
  function setup() {
    createCanvas(400,400);
    cols = int(width/gridSize);
    rows = int(height/gridSize);
    background("#201E50")
    // noLoop()
  }

  function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function draw() {
  // fill("#c4f1be");
  // ellipse(width/2, height/2, 300);
  // let eyeSize = map(mouseX, 0, width, 10, 50);
  // fill(0)
  // ellipse(width/2 - 50, height/2 - 50, eyeSize);
  // ellipse(width/2 + 50, height/2 - 50, eyeSize);

  // fill("#c4f1be");
  // noStroke();
  // rect(350,500, 100, 200);
 
  // fill("#c4f1be");
  // noStroke();
  // rect(250,600, 300, 200, 50, 50, 0, 0);

  //   fill("#869D96");
  // ellipse(100, 200, 50, 50);

  // fill("#525B76");
  // ellipse(100, 200, 80, 10);

  //  fill("#525B76");
  // ellipse(100, 200, 80, 10);

  // background (220);
  // background("#201E50");
  // for (let i = 0; i < cols; i++) {
  //   for(let j = 0; j < rows; j++) {
  //   let x = i * gridSize + gridSize/2;
  //   let y = j * gridSize + gridSize/2;
    
    // rect(x,y, gridSize*0.8, gridSize*0.8);
    // rectMode(CENTER);

    //     if (i % 2 === 0) {
    //   nostroke()
    //   fill("blue")
    // } else {
    //   noFill()
    //   strokeWeight(2)
    //   stroke("red")
    // }
    // rect(x,y, gridSize*0.8, gridSize*0.8);

    // triangle(x, y - gridSize*0.4, x - gridSize*0.7, y + gridSize*0.4, x + gridSize*0.8, y + gridSize*0.8);

    // let d = dist(x,y, mouseX, mouseY);
    // let triangeSize = map(d, 0, width, gridSize*1.5, gridSize*0.5);
    // let r = map(d, 0, width, 0, 255);
    // let b = map(d, 0, width, 255, 0);
    // let myColor = color(r, 0, b);
    // fill(myColor);
    // triangle(x, y - triangeSize*0.4, x - triangeSize*0.7, y + triangeSize*0.4, x + triangeSize*0.8, y + triangeSize*0.8);

    // circle(x,y, gridSize*0.8);
    // circle(i * 100 + 50, height/2, 80);

  // for (let i = 0; i < cols; i++) {
  //   for (let j = 0; j < rows; j++) {
  //     const x = i * gridSize + gridSize / 2;
  //     const y = j * gridSize + gridSize / 2;

  //     if (random() > 0.5) {
  //     line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2);
  //     } else {
  //     line(x+gridSize/2, y-gridSize/2, x-gridSize/2, y+gridSize/2);
  //     }

  // Truchet tiles
  // background("#201E50");
  // for (let i = 0; i < cols; i++) {
  //   for (let j = 0; j < rows; j++) {
  //     const x = i * gridSize + gridSize / 2;
  //     const y = j * gridSize + gridSize / 2;
  //    fill(random(myColors));
  //     if (random() < 0.5) {
  //       arc(x-gridSize/2, y-gridSize/2, gridSize,gridSize, 0, HALF_PI) // top-left
  //       arc(x+gridSize/2, y+gridSize/2, gridSize,gridSize, PI, PI + HALF_PI) // right-bottom
  //     } else {
  //       arc(x-gridSize/2, y+gridSize/2, gridSize,gridSize, -HALF_PI, 0) // bottom-left
  //       arc(x+gridSize/2, y-gridSize/2, gridSize,gridSize, HALF_PI, PI) // top-right
  //     }
  //     }
  //   }

//   background(102);
//   background("#201E50");

//   push();
//   translate(width * 0.2, height * 0.5);
//   rotate(frameCount / 200.0);
//   star(0, 0, 5, 70, 3);
//   pop();
  

//   push();
//   translate(width * 0.5, height * 0.5);
//   rotate(frameCount / 80.0);
//   star(0, 0, 80, 100, 40);
//   pop();

//   push();
//   translate(width * 0.8, height * 0.5);
//   rotate(frameCount / 90.0);
//   star(0, 0, 30, 70, 5);
//   pop();
// }

// function star(x, y, radius1, radius2, npoints) {
//   let angle = TWO_PI / npoints;
//   let halfAngle = angle / 2.0;
//   beginShape();
//   for (let a = 0; a < TWO_PI; a += angle) {
//     let sx = x + cos(a) * radius2;
//     let sy = y + sin(a) * radius2;
//     vertex(sx, sy);
//     sx = x + cos(a + halfAngle) * radius1;
//     sy = y + sin(a + halfAngle) * radius1;
//     vertex(sx, sy);
//   }
//   endShape(CLOSE);
// }
  
// for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x = i * gridSize + gridSize/2
//       let y = j * gridSize + gridSize/2
//       // star(x, y, gridSize*0.3, gridSize*0.5, 5) // don't do this, use push(), pop(), and translate()
//       noStroke()
//       push()
//       translate(x, y) // (0,0) is now this cell's new center
//       // star face
//       fill("#F3DFA2")
//       push()
//       rotate(frameCount / 30.0)
//       star(0,0,gridSize*0.25, gridSize*0.4, 5) 
//       // mouth
//       fill("#BB4430")
//       ellipse(0,0+gridSize*0.1, gridSize*0.1, gridSize*0.1)
//       // eyes
//       fill("#7EBDC2")
//       rectMode(CENTER)
//       rect(0-gridSize*0.1,0-gridSize*0.1, gridSize*0.05, gridSize*0.2) // leftE
//       rect(0+gridSize*0.1,0-gridSize*0.1, gridSize*0.05, gridSize*0.2) // rightE
//       pop()

      
      
}
