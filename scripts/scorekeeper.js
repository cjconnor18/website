var scoreTeam1=0;
var scoreTeam2=0;
var id;
var x;

var team1Name=document.getElementById("nameTeam1");
var team2Name=document.getElementById("nameTeam2");
var teamChange=document.getElementById("changeTeamNames");

function start(){
  score1.innerHTML=scoreTeam1;
  score2.innerHTML=scoreTeam2;
  name1.innerHTML=team1Name.value;
  name2.innerHTML=team2Name.value;
}

function resetScores(){
  scoreTeam1=0;
  scoreTeam2=0;
  score1.innerHTML=scoreTeam1;
  score2.innerHTML=scoreTeam2;
}
function scoreChange(id,x){
  if(id==score1){
    scoreTeam1=scoreTeam1+x;
    id.innerHTML=scoreTeam1;
  }else if(id==score2){
    scoreTeam2=scoreTeam2+x;
    id.innerHTML=scoreTeam2;
  }
}
function nameChangeDrop(){
  if(teamChange.style.display=="none"){
    teamChange.style.display="block";
  } else{
    teamChange.style.display="none";
  }
}
function nameChange(){
  name1.innerHTML=team1Name.value;
  name2.innerHTML=team2Name.value;
  nameChangeDrop();
}
