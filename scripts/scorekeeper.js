var team;
var team1Total=0;
var team2Total=0;

function scoreUp(team){
  if(team==score1){
    team1Total++;
    document.getElementById('score1').innerHTML=team1Total;
  } else if (team==score2) {
    team2Total++;
    team.innerHTML=team2Total;
  }
}

function scoreDown(team){
  if(team==score1){
    team1Total--;
    document.getElementById('score1').innerHTML=team1Total;
  } else if(team==score2){
    team2Total--;
    document.getElementById('score2').innerHTML=team2Total;
  }
}
