var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();    /// call the first time page is loaded

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


var textFill = "#ffffff";
var boxFill = "#0000ff";

var widthOfBox = (90/500) * canvas.width;
var lengthOfBox = (90/600) * canvas.height;
var startingX = (5/500) * canvas.width;
var startingY = (105/600) * canvas.height;

var b = 1;
var i = 1;
var n = 1;
var g = 1;
var o = 1;

var boxes = [];
var bNumbers = [];
var iNumbers = [];
var nNumbers = [];
var gNumbers = [];
var oNumbers = [];


class Block {
  constructor(x, y, letter, idType) {
    this.x = x;
    this.y = y;
    this.letter = letter;
    this.idType = idType;
    this.boxNumber = 0;
    this.boxNumberAssigned = false;
    this.dab = false;
  }
  makeRect () {
    ctx.fillStyle = boxFill;
    ctx.fillRect(this.x, this.y, widthOfBox, lengthOfBox);
    var max = 15;
    var min = 1;
    if(!this.boxNumberAssigned) {
      if(this.letter == "B") {
        do {
          this.boxNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        } while(bNumbers.includes(this.boxNumber));
        bNumbers.push(this.boxNumber);
        this.boxNumberAssigned = true;
      } else if (this.letter == "I"){
        max = 30;
        min = 16;
        do {
          this.boxNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        } while(iNumbers.includes(this.boxNumber));
        iNumbers.push(this.boxNumber);
        this.boxNumberAssigned = true;
      } else if (this.letter == "N") {
        max = 45;
        min = 31;
        do {
          this.boxNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        } while(nNumbers.includes(this.boxNumber));
        nNumbers.push(this.boxNumber);
        if(this.idType == 3) {
          createCircle (this.x, this.y);
        }
        this.boxNumberAssigned = true;
      } else if (this.letter == "G") {
        max = 60;
        min = 46;
        do {
          this.boxNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        } while(gNumbers.includes(this.boxNumber));
        gNumbers.push(this.boxNumber);
        this.boxNumberAssigned = true;
      } else if (this.letter == "O") {
        max = 75;
        min = 61;
        do {
          this.boxNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
        } while(oNumbers.includes(this.boxNumber));
        oNumbers.push(this.boxNumber);
        this.boxNumberAssigned = true;
      }
    }
    ctx.fillStyle = (textFill);
    ctx.fillText(this.boxNumber, this.x + widthOfBox/2, this.y + (lengthOfBox+((30/600) * canvas.height))/2);
  }
}


ctx.fillStyle = boxFill;
ctx.fillRect(startingX, (5/600) * canvas.height, (490/500) * canvas.width, (90/600) * canvas.height);

ctx.font = "50px Arial";
ctx.fillStyle = (textFill);
ctx.textAlign = "center";
ctx.fillText("B", ((5/500) * canvas.width) + widthOfBox/2, ((5/600) * canvas.height) + (widthOfBox+30)/2);
ctx.fillText("I", ((105/500) * canvas.width) + widthOfBox/2, ((5/600) * canvas.height) + (widthOfBox+30)/2);
ctx.fillText("N", ((205/500) * canvas.width) + widthOfBox/2, ((5/600) * canvas.height) + (widthOfBox+30)/2);
ctx.fillText("G", ((305/500) * canvas.width) + widthOfBox/2, ((5/600) * canvas.height) + (widthOfBox+30)/2);
ctx.fillText("O", ((405/500) * canvas.width) + widthOfBox/2, ((5/600) * canvas.height) + (widthOfBox+30)/2);

while(b < 6) {
  var newBlock = new Block(startingX, startingY +((b - 1) * ((100/600) * canvas.height)), "B", b);
  newBlock.makeRect();
  boxes.push(newBlock);
  
  b++;
}
while(i < 6) {
  var newBlock = new Block(startingX + ((100/500) * canvas.width), startingY +((i - 1) * ((100/600) * canvas.height)), "I", i);
  newBlock.makeRect();
  boxes.push(newBlock);
  
  i++;
}
while(n < 6) {
  var newBlock = new Block(startingX + ((200/500) * canvas.width), startingY +((n - 1) * ((100/600) * canvas.height)), "N", n);
  newBlock.makeRect();
  boxes.push(newBlock);

  n++;
}
while(g < 6) {
  var newBlock = new Block(startingX + ((300/500) * canvas.width), startingY +((g - 1) * ((100/600) * canvas.height)), "G", g);
  newBlock.makeRect();
  boxes.push(newBlock);
  
  g++;
}
while(o < 6) {
  var newBlock = new Block(startingX + ((400/500) * canvas.width), startingY +((o - 1) * ((100/600) * canvas.height)), "O", o);
  newBlock.makeRect();
  boxes.push(newBlock);
  
  o++;
}

function isIntersect(point, box) {
  if(point.x > box.x && point.x < box.x + ((90/500) * canvas.width)) {
    if(point.y > box.y && point.y < box.y + ((90/600) * canvas.height)){
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function createCircle(x, y) {
  ctx.beginPath();
        ctx.arc(x + (widthOfBox)/2, y + (lengthOfBox)/2, (lengthOfBox-((10/500) * canvas.height))/2, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();
}


canvas.addEventListener("click", function(e){
  const pos = {
    x: e.clientX,
    y: e.clientY
  }; 
  boxes.forEach(box => {
    if (isIntersect(pos, box)) {
      if(box.letter== "N"  && box.idType == 3) {
        createCircle(box.x, box.y);
      } else {  
        if(box.dab == false) {
          createCircle(box.x, box.y);
          box.dab = true;
        } else {
          box.dab = false;
          box.makeRect();
        }
      }   
    }
  });
})
