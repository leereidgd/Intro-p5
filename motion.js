function setup() {
  createCanvas(300, 300);
  background("#201E50");
  cols = int(width/100);
  rows = int(height/100);
  gridSize = 100;
}

function draw() {
// Truchet tiles
  background("#201E50");
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      const x = i * gridSize + gridSize / 2;
      const y = j * gridSize + gridSize / 2;
     fill(random(myColors));
      if (random() < 0.5) {
        arc(x-gridSize/2, y-gridSize/2, gridSize,gridSize, 0, HALF_PI) // top-left
        arc(x+gridSize/2, y+gridSize/2, gridSize,gridSize, PI, PI + HALF_PI) // right-bottom
      } else {
        arc(x-gridSize/2, y+gridSize/2, gridSize,gridSize, -HALF_PI, 0) // bottom-left
        arc(x+gridSize/2, y-gridSize/2, gridSize,gridSize, HALF_PI, PI) // top-right
      }
        }
    }
}
