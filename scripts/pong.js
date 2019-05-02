var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2; //starting ball location horizontal
var y = canvas.height-30;//starting ball location vertical
//ball variables
var dx = 2;//change in x of movement of ball
var dy = -2;//change in y of movement of ball
var ballRadius = 10;//ball radius
var ballColor = "#00f";
//paddle variables
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth)/2;
var paddleDx = 7;
var paddleColor = "#ff4";
//paddle Controls
var rightPressed;
var leftPressed;

function keyDownHandler(event){
  if(event.keyCode == 39){
    rightPressed = true;
  } else if(event.keyCode == 37){
    leftPressed = true;
  }
}
function keyUpHandler(event){
  if(event.keyCode == 39){
    rightPressed = false;
  } else if(event.keyCode == 37){
    leftPressed = false;
  }
}



document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function drawBall(){
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = ballColor;
  ctx.fill();
  ctx.closePath();
}

function drawPaddle(){
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = paddleColor;
  ctx.fill();
  ctx.closePath();
}


//Game loop below
function draw(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  drawPaddle();
  //collision dectection with top, left, and right walls
  if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
    dx = -dx;
  }
  if(y + dy < ballRadius || (
      y + dy > canvas.height - paddleHeight - ballRadius &&
      x + dx > paddleX &&
      x + dx < paddleX + paddleWidth
  )){
    dy = -dy;
  } else if(y + dy > canvas.height){
    location.reload();//if ball goes beyond bottom wall
  }
  //end collision detection for walls
  //paddle movement
  if(rightPressed && (paddleX + paddleWidth) < canvas.width){
    paddleX += paddleDx;
  } else if(leftPressed && paddleX > 0){
    paddleX -= paddleDx;
  }
  
  //end paddle movement
  x += dx;//makes ball go horizontal
  y += dy;//makes ball go vertical
  
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
