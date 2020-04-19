var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

var bingoBallsPossible = [];
var bingoBallsCalled = [];
var allBalls = [];

var button = {
  width : canvas.width / 2,
  height : canvas.height / 5,
  x : 0,
  y : (canvas.height * 6)/ 2,
  fontSize : 0,
  defineVariables : function() {
    this.x = canvas.width/2 - this.width/2;
    this.fontSize = this.height * 3 / 5;
  },
  drawButton : function(){
    ctx.fillStyle = "#F4F4F6";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = "#1C47AA";
    ctx.textAlign = "center";
    ctx.font = this.fontSize + "px Arial";
    ctx.fillText("Draw Ball", this.x + this.width/2, this.y + this.height*5/7);
  }
}

class BingoBall {
  constructor(ballNumber) {
    this.ballNumber = ballNumber;
    this.display = false;
  }
  ballCalled(){
    this.display = true;
  }
}


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if(canvas.width > 500) {
      canvas.width = 500;
    }
    if(canvas.height > 600) {
      canvas.height = 600;
    }
}

function createBingoBalls () {
  var ball = "";
  for(let i = 1; i < 76; i++) {
    if(i < 16) {
      ball = new BingoBall("B" + i);
    } else if (i < 31) {
      ball = new BingoBall("I" + i);
    } else if (i < 46) {
      ball = new BingoBall("N" + i);
    } else if (i < 61) {
      ball = new BingoBall("G" + i);
    } else {
      ball = new BingoBall("O" + i);
    }
    bingoBallsPossible.push(ball);
    allBalls.push(ball);
  }
}

function drawBall() {
  index = Math.floor(Math.random() * bingoBallsPossible.length);
  ball = bingoBallsPossible[index];
  
  for(let k = 0; k < allBalls.length; k++) {
    if(allBalls[k].ballNumber == ball.ballNumber) {
      allBalls[k].ballCalled();
    }
  }
  clear();
  button.drawButton();
  x = canvas.width/3;
  y = canvas.height/3;
  font = canvas.width / 5;
  ctx.fillStyle = "#ffff11";
  ctx.font = font + "px Arial";
  ctx.fillText(ball.ballNumber, x, y);
  
  bingoBallsCalled.push(ball);
  bingoBallsPossible.splice(index, 1);
  displayAllBalls();
}

function displayAllBalls () {
  for(let k = 0; k < allBalls.length; k++) {
    var font = canvas.width/35;
    var column = font * 1.7;
    var row = font * 2.2;
    if(allBalls[k].display){
      ctx.fillStyle = "#FCFCFC"
    } else {
      ctx.fillStyle = "#555"
    }
    if(k < 15){
      x = canvas.width - row * 5;
      y = (k+1) * column;
    } else if (k < 30) {
      x = canvas.width - row * 4
      y = (k + 1 - 15) * column;
    } else if (k < 45) {
      x = canvas.width - row * 3;
      y = (k-30 + 1) * column;
    } else if (k < 60) {
      x = canvas.width - row * 2;
      y = (k-45 + 1) * column;
    } else if (k < 75) {
      x = canvas.width - row * 1;
      y = (k-60 + 1) * column;
    }
    
    ctx.font = font + "px Arial";
    ctx.fillText(allBalls[k].ballNumber, x,y);
  }
}

function clear() {
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

function game() {
  clear();
  resizeCanvas();    /// call the first time page is loaded
  
  createBingoBalls();
  displayAllBalls();
  button.defineVariables();
  button.drawButton();
  
  window.addEventListener("click", function(e) {
    const pos = {
      x : e.clientX,
      y : e.clientY
    }
    if(pos.x > button.x && 
      pos.x < button.x + button.width &&
      pos.y > button.y && 
      pos.y < button.y + button.height){
      drawBall();
    }
  })  
}
game();
