var x;
var team1Total=0;
var team2Total=0;

document.getElementById('team1Up').onclick=scoreUp(team1)
document.getElementById('team1Down').onclick=scoreDown(team1);
document.getElementById('team2Up').onclick=scoreUp(team2);
document.getElementById('team2Down').onclick=scoreDown(team2);


function scoreUp(x){
  if(x==team1){
    team1Total++;
    document.getElementById('score1').innerHTML=team1Total;
  } else if (x==team2) {
    team2Total++;
    document.getElementById('score2').innerHTML=team2Total;
  }
}
function scoreDown(x){
  if(x==team1){
    team1Total--;
    document.getElementById('score1').innerHTML=team1Total;
  } else if(x==team2){
    team2Total--;
    document.getElementById('score2').innerHTML=team2Total;
  }
}
