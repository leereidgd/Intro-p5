// let noiseMap = [];
// let cols;
// let rows;
// let size = 50;
// let inc = 0.1;

// function setup() {
//     createCanvas(400, 400);
//     cols = width / size;
//     rows = height / size;
//     for (let i = 0; i < cols; i++) {
//         noiseMap[i] = [];
//         yoff = yoff+inc;
//         for (let j = 0; j < rows; j++) {
//             noiseMap[i][j] = noise(xoff, yoff);
//             yoff += inc;

//         }
//     }
// }

// function draw() {
//     background(220);
//     textAlign(CENTER, CENTER);
//     for (let i = 0; i < cols; i++) {
//         for (let j = 0; j < rows; j++) {
//             rect(i * size, j * size, size, size);
//             text(noiseMap[i][j].toFixed(3), i * size + size / 2, j * size + size / 2);
//         }
//     }
// }

const myColors = ["#F9C74F", "#F94144", "#577590", "#90BE6D", "#F3722C"];


let offset = 0;
function setup() {
    createCanvas(800, 800);
}

function draw() {
    // background(220);
    strokeWeight(random(0.25, 2));
    stroke(random(myColors));
    fill(255);
    const x1 = noise(offset + 5) * width;
    const y1 = noise(offset + 300) * height;
    const x2 = noise(offset + 1) * width;
    const y2 = noise(offset + 60) * height;
    const x3 = noise(offset + 25) * width;
    const y3 = noise(offset + 2) * height;
    const x4 = noise(offset + 1000) * width;
    const y4 = noise(offset + 40) * height;

    beginShape();
    for (let t = 0; t <= 1; t += 0.01) {
        const wiggleX = (noise(t * 12 + offset, 20) - 0.5) * 40;
        const wiggleY = (noise(t * 12 + offset, 40) - 0.5) * 40;
        vertex(
            bezierPoint(x1, x2, x3, x4, t) + wiggleX,
            bezierPoint(y1, y2, y3, y4, t) + wiggleY
        );
    }
    endShape(CLOSE);
    offset += 0.01;

   // I followed Patt Vira's tutorial on bézier curves and changed aspects of the code
}
