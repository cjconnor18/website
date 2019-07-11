var scoreTeam1=0;
var scoreTeam2=0;
var id;
var x;

function scoreChange(id,x){
  if(id==score1){
    scoreTeam1=scoreTeam1+x;
    id.innerHTML=scoreTeam1;
    }else if(id==score2){
    scoreTeam2=scoreTeam2+x;
    id.innerHTML=scoreTeam2;
  }
}
