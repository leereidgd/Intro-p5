let songs = [];
let songsError = "";

const genreColors = {
  emo: "#6A6B1E1",
  shoegaze: "#B4869F",
  punk: "#985F6F",
  pop: "#A6A57A",
};

async function setup() {
  createCanvas(1000, 500).parent("canvas-container");

  try {
    const response = await fetch("songs.json");
    if (!response.ok) {
      throw new Error(`Could not load songs.json: ${response.status}`);
    }

    const data = await response.json();
    if (
      !Array.isArray(data) ||
      data.some((song) =>
        !["Song", "Artist", "Genre", "Language"].every(
          (field) => typeof song[field] === "string",
        ),
      )
    ) {
      throw new Error("songs.json must contain song, artist, genre, and language values.");
    }

    songs = data;
  } catch (error) {
    console.error(error);
    songsError = "Could not load songs.json.";
  }
}

function draw() {
  background("#DCD6F7");

  if (songsError) {
    return;
  }

  if (songs.length === 0) {
    return;
  }

  drawKey();
  drawSongList();

  const circleSize = 96;

  songs.forEach((song, index) => {
    const x = (width / (songs.length + 1)) * (index + 1);
    const y = height / 2;
    const genre = song.Genre.toLowerCase();
    const color = genreColors[genre] || "#869D96";

    if (genre === "punk") {
      noStroke();
      fill(color);
      quad(
        x,
        y - circleSize / 2,
        x + circleSize / 2,
        y,
        x,
        y + circleSize / 2,
        x - circleSize / 2,
        y,
      );
    } else if (genre === "pop") {
      noFill();
      stroke(color);
      strokeWeight(10);
      circle(x, y, circleSize);
    } else {
      noStroke();
      if (genre === "shoegaze") {
        fill(color);
        rectMode(CENTER);
        square(x, y, circleSize);
      } else {
        fill("#242F40");
        for (let petal = 0; petal < 6; petal++) {
          const angle = (TWO_PI * petal) / 6;
          circle(
            x + cos(angle) * (circleSize * 0.25),
            y + sin(angle) * (circleSize * 0.25),
            40,
          );
        }
        fill("#DCD6F7");
        circle(x, y, 0);
      }
    }

    if (song.Language.toLowerCase() === "english") {
      noStroke();
      fill("#4E4C67");
      circle(x, y, 20);
    } else if (song.Language.toLowerCase() === "spanish") {
      noStroke();
      fill("#4E4C67");
      rectMode(CENTER);
      square(x, y, 20);
    }

    fill("#242F40");
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(16);
    text(index + 1, x, y + circleSize * 0.75);
  });
}

function drawSongList() {
  const columnWidth = width / (songs.length + 1) - 30;

  push();
  noStroke();
  fill("#242F40");
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(13);
  text("Songs", 20, 12);

  textStyle(NORMAL);
  textSize(10);
  songs.forEach((song, index) => {
    const x = (width / (songs.length + 1)) * (index + 1) + 75;
    text(
      `${index + 1}. ${song.Song} — ${song.Artist}`,
      x - columnWidth / 2,
      42,
      columnWidth,
      64,
    );
  });
  pop();
}

function drawKey() {
  const y = height - 24;
  const genres = [
    { label: "Emo", x: 82, type: "flower", color: "#242F40" },
    { label: "Shoegaze", x: 190, type: "square", color: "#B4869F" },
    { label: "Punk", x: 330, type: "diamond", color: "#985F6F" },
    { label: "Pop", x: 430, type: "outline", color: "#A6A57A" },
  ];

  push();
  noStroke();
  fill("#242F40");
  textAlign(LEFT, CENTER);
  textSize(14);
  textStyle(BOLD);
  text("Key", 20, y);
  textStyle(NORMAL);
  textSize(12);

  genres.forEach(({ label, x, type, color }) => {
    text(label, x + 14, y);
    push();
    if (type === "flower") {
      noStroke();
      fill(color);
      for (let petal = 0; petal < 6; petal++) {
        const angle = (TWO_PI * petal) / 6;
        circle(x + cos(angle) * 4, y + sin(angle) * 4, 8);
      }
    } else if (type === "square") {
      noStroke();
      fill(color);
      rectMode(CENTER);
      square(x, y, 12);
    } else if (type === "diamond") {
      noStroke();
      fill(color);
      quad(x, y - 7, x + 7, y, x, y + 7, x - 7, y);
    } else {
      noFill();
      stroke(color);
      strokeWeight(2);
      circle(x, y, 14);
    }
    pop();
  });

  textStyle(BOLD);
  text("Language", 535, y);
  textStyle(NORMAL);
  push();
  noStroke();
  fill("#4E4C67");
  circle(620, y, 10);
  fill("#242F40");
  text("English", 630, y);
  fill("#4E4C67");
  rectMode(CENTER);
  square(710, y, 10);
  fill("#242F40");
  text("Spanish", 720, y);
  pop();
  pop();
}
