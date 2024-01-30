/* eslint-disable import/extensions */
import Brick from './Brick.js';
import Ball from './Ball.js';
import Paddle from './Paddle.js';
import Background from './Background.js';
import Score from './Score.js';
import Lives from './Lives.js';

// variables ----------------------------------------------------
// canvas
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const background = new Background(
  canvas,
  '#222222',
  '#222222',
  '#222222'
);

// ball
const ballX = canvas.width / 2;
const ballY = canvas.height - 30;
const ball = new Ball(ballX, ballY);

// game message
const gameMessage = document.getElementById('gameMessage');
gameMessage.style.color = '#CCCCCC';

// paddle
const paddleX = (canvas.width - 75) / 2;
const paddleY = canvas.height - 10;
const paddle = new Paddle(paddleX, paddleY);
let rightPressed = false;
let leftPressed = false;

// bricks
const brickRowCount = 5;
const brickColumnCount = 4;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;
const bricks = [];
for (let c = 0; c < brickColumnCount; c += 1) {
  bricks[c] = [];
  for (let r = 0; r < brickRowCount; r += 1) {
    bricks[c][r] = new Brick(0, 0);
  }
}

// score, lives & playing
const score = new Score();
const lives = new Lives();
let isPlaying = true;

// functions ----------------------------------------------------
function keyDownHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = true;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.key === 'Right' || e.key === 'ArrowRight') {
    rightPressed = false;
  } else if (e.key === 'Left' || e.key === 'ArrowLeft') {
    leftPressed = false;
  }
}

function mouseMoveHandler(e) {
  const relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddle.x = relativeX - paddle.width / 2;
  }
}

function collisionDetection() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const brick = bricks[c][r];
      if (brick.status === 1) {
        if (
          ball.x > brick.x &&
          ball.x < brick.x + brick.width &&
          ball.y > brick.y &&
          ball.y < brick.y + brick.height
        ) {
          ball.dy = -ball.dy;
          brick.status = 0;
          score.value += 1;
          if (score.value === brickRowCount * brickColumnCount) {
            gameMessage.innerHTML =
              'You Win! CONGRATULATIONS! Playing again in 5 seconds...';
            gameMessage.style.display = 'block';
            isPlaying = false;
            // Set a 5-second timer
            setTimeout(() => {
              document.location.reload();
            }, 5000);
          }
        }
      }
    }
  }
}

function drawBricks() {
  for (let c = 0; c < brickColumnCount; c += 1) {
    for (let r = 0; r < brickRowCount; r += 1) {
      const brick = bricks[c][r];
      if (brick.status === 1) {
        const brickX =
          r * (brick.width + brickPadding) + brickOffsetLeft;
        const brickY =
          c * (brick.height + brickPadding) + brickOffsetTop;
        brick.x = brickX;
        brick.y = brickY;
        let color;
        switch (c % 4) {
          case 0:
            color = '#5FA052'; // green
            break;
          case 1:
            color = '#A3A43F'; // yellow
            break;
          case 2:
            color = '#BC7143'; // orange
            break;
          case 3:
            color = '#BB504B'; // red
            break;
          default:
            color = '#4146C2'; // backup blue
            break;
        }
        brick.color = color;
        brick.render(ctx);
      }
    }
  }
}

function draw() {
  if (!isPlaying) {
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.render(ctx);
  drawBricks();

  ball.render(ctx);
  paddle.render(ctx);
  score.render(ctx);
  lives.render(ctx);
  collisionDetection();

  if (
    ball.x + ball.dx > canvas.width - ball.radius ||
    ball.x + ball.dx < ball.radius
  ) {
    ball.dx = -ball.dx;
  }
  if (ball.y + ball.dy < ball.radius) {
    ball.dy = -ball.dy;
  } else if (ball.y + ball.dy > canvas.height - ball.radius) {
    if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
      ball.dy = -ball.dy;
    } else {
      lives.value -= 1;
      if (lives.value === 0) {
        gameMessage.innerHTML =
          'You Lose! Playing again in 5 seconds...';
        gameMessage.style.display = 'block';
        isPlaying = false;
        // Set a 5-second timer
        setTimeout(() => {
          document.location.reload();
        }, 5000);
      } else {
        ball.x = canvas.width / 2;
        ball.y = canvas.height - 30;
        ball.dx = 3;
        ball.dy = -3;
        paddle.x = (canvas.width - paddle.width) / 2;
      }
    }
  }

  if (rightPressed && paddle.x < canvas.width - paddle.width) {
    paddle.x += 7;
  } else if (leftPressed && paddle.x > 0) {
    paddle.x -= 7;
  }

  ball.x += ball.dx;
  ball.y += ball.dy;
  requestAnimationFrame(draw);
}

// add event listeners
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);
document.addEventListener('mousemove', mouseMoveHandler, false);

// play game
draw();
