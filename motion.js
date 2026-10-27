const myColors = ["#F9C74F", "#F94144", "#577590", "#90BE6D", "#F3722C"];

const gridSize = 50;
let cols;
let rows;
let tileOrientations;
let tileColors;

function setup() {
  createCanvas(800, 800);
  cols = int(width / gridSize);
  rows = int(height / gridSize);
  tileOrientations = [];
  tileColors = [];

  for (let i = 0; i < cols; i++) {
    tileOrientations[i] = [];
    tileColors[i] = [];
    for (let j = 0; j < rows; j++) {
      tileOrientations[i][j] = random() < 0.5;
      tileColors[i][j] = random(myColors);
    }
  }
}

function draw() {
  background("#201E50");
  noStroke();
  const hovering = mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * gridSize + gridSize / 2;
      const y = j * gridSize + gridSize / 2;

      if (hovering) {
        const distance = dist(mouseX, mouseY, x, y);
        const distanceRatio = constrain(distance / 300, 0, 1);
        const easedDistance = distanceRatio * distanceRatio * (3 - 2 * distanceRatio);
        const changeChance = lerp(0.15, 0.001, easedDistance);
        if (random() < changeChance) {
          tileOrientations[i][j] = !tileOrientations[i][j];
        }

        const gradientPosition = (distance / dist(0, 0, width, height)) * (myColors.length - 1);
        const colorIndex = floor(gradientPosition);
        fill(lerpColor(
          color(myColors[colorIndex]),
          color(myColors[min(colorIndex + 1, myColors.length - 1)]),
          gradientPosition - colorIndex
        ));
      } else {
        fill(tileColors[i][j]);
      }

      if (tileOrientations[i][j]) {
        arc(x - gridSize / 2, y - gridSize / 2, gridSize, gridSize, 0, HALF_PI);
        arc(x + gridSize / 2, y + gridSize / 2, gridSize, gridSize, PI, PI + HALF_PI);
      } else {
        arc(x - gridSize / 2, y + gridSize / 2, gridSize, gridSize, -HALF_PI, 0);
        arc(x + gridSize / 2, y - gridSize / 2, gridSize, gridSize, HALF_PI, PI);
      }
    }
  }
}
