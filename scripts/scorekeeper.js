var score1=document.getElementsByClassName('score1');
var score2=document.getElementsByClassName('score2');
var x;

var score1x=0;
var score2x=0;

function scoreUp(x){
  if(x===team1){
    score1x++;
    score1.innerHTML=score1x;
  }
}
