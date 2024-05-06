let ballImages = [];
let goalImages= [];
let ballIndex = 0;
let ballImage;
let balls = [];
let goalImage;

function preload() {
  ballImages.push(loadImage('ball1.png'));
  ballImages.push(loadImage('ball2.png'));
  ballImages.push(loadImage('ball3.png'));
  goalImage = loadImage('goal.png');
}

function setup() {
  let cnv = createCanvas(600, 400);
  cnv.parent("canvasContainer")
  frameRate(60);
  createBalls(1);
}

function draw() {
  background(220);
  drawGrassField();
  lineTheField();
  drawBalls();
  push();
  scale(0.5)
  image(goalImage, 100, 100)
  pop();
}



function createBalls(numBalls) {
  let Ball = {
    x: random(40, 300),
    y: random(40, 300),
    xspeed: random(1.5, 1.75),
    yspeed: random(1.5, 1.75),
    r: 25,
    image: ballImages[ballIndex],
  };
  balls.push(Ball);
}

function mouseClicked() {
  ballIndex = (ballIndex + 1) % ballImages.length; // Cycle through the available images
  balls[0].image = ballImages[ballIndex];
}

function drawBalls() {
  for (let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    image(ball.image, ball.x - ball.r, ball.y - ball.r, ball.r * 2, ball.r * 2);

    // Check if the ball hits the goals
    if (
      (ball.x < 20 + ball.r && ball.y > height / 2 - 21 && ball.y < height / 2 + 21) ||
      (ball.x > width - 20 - ball.r && ball.y > height / 2 - 21 && ball.y < height / 2 + 21)
    ) {
      // Show "goal!!!" text
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text("goal!!!", width / 2, height / 2);
    }

    if (dist(mouseX, mouseY, ball.x, ball.y) < ball.r) {
      if (mouseX < ball.x) {
        ball.xspeed = abs(ball.xspeed); // Move to the right
      } else {
        ball.xspeed = -abs(ball.xspeed); // Move to the left
      }
      if (mouseY < ball.y) {
        ball.yspeed = abs(ball.yspeed); // Move downwards
      } else {
        ball.yspeed = -abs(ball.yspeed); // Move upwards
      }
    }

    ball.x += ball.xspeed;
    ball.y += ball.yspeed;

    if (ball.x > width - ball.r || ball.x < ball.r) {
      ball.xspeed = -ball.xspeed;
    }
    if (ball.y > height - ball.r || ball.y < ball.r) {
      ball.yspeed = -ball.yspeed;
    }
    if (ball.x > 20 + 560 - ball.r || ball.x < 20 + ball.r) {
      ball.xspeed = -ball.xspeed;
    }
    if (ball.y > height - 20 - 360 + ball.r || ball.y < 20 + ball.r) {
      ball.yspeed = -ball.yspeed;
    }
  }
}
function drawGrassField() {
  fill(0, 220, 0);
  noStroke();
  rect(0, 0, 600, 400);
}

function lineTheField() {
  stroke(255, 255, 255); // white
  noFill();

  rect(20, 20, 560, 360);

  line(300, 20, 300, 380);

  ellipse(300, 200, 100, 100);

  fill(255, 255, 255);
  ellipse(300, 200, 3, 3);
  noFill();

  rect(20, height / 2 - 220 / 2, 94, 220);
  rect(width - 20 - 94, height / 2 - 220 / 2, 94, 220);

  rect(20, height / 2 - 105 / 2, 32, 105);
  rect(width - 20 - 32, height / 2 - 105 / 2, 32, 105);

  line(20 + 62, 198, 20 + 62, 202);
  line(width - 20 - 62, 198, width - 20 - 62, 202);

  arc(20 + 62, 200, 100, 100, -0.88, 0.88);
  arc(width - 20 - 62, 200, 100, 100, PI - 0.88, PI + 0.88);

  arc(20, 20, 15, 15, 0, PI / 2);
  arc(20, height - 20, 15, 15, 1.5 * PI, 0);
  arc(width - 20, 20, 15, 15, PI / 2, PI);
  arc(width - 20, height - 20, 15, 15, PI, 1.5 * PI);

  let tenYards = 57;

  line(20 + tenYards, 15, 20 + tenYards, 20);
  line(width - 20 - tenYards, 15, width - 20 - tenYards, 20);
  line(20 + tenYards, height - 20, 20 + tenYards, height - 20 + 5);
  line(
    width - 20 - tenYards,
    height - 20,
    width - 20 - tenYards,
    height - 20 + 5
  );

  line(15, 20 + tenYards, 20, 20 + tenYards);
  line(width - 20, 20 + tenYards, width - 20 + 5, 20 + tenYards);

  line(15, height - 20 - tenYards, 20, height - 20 - tenYards);
  line(
    width - 20,
    height - 20 - tenYards,
    width - 20 + 5,
    height - 20 - tenYards
  );
}

function drawGoals() {
  stroke(255, 255, 255);
  noFill();

  rect(5, height / 2 - 21, 15, 42);
  rect(width - 20, height / 2 - 21, 15, 42);

}
