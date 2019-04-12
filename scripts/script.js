/*Functions for navigation bar menus*/
var x = document.getElementById("eventsDropMenu");
function eventsFunction(){
  if(x.style.display === "block"){
    x.style.display = "none";
  }else{
     x.style.display = "block";
  }
};
window.onclick = function(event) {
  if(!event.target.matches("#eventsButton") && !event.target.matches("#eventsDropMenu")){
    var dropdowns = document.getElementById("eventsDropMenu");

    if (dropdowns.style.display === "block") {
        dropdowns.style.display = "none";
    }
  }
};
/*Date Formulas*/
var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("dateNavMonth").innerHTML = months[date.getMonth()];
document.getElementById("dateNavDay").innerHTML = date.getDate();
document.getElementById("dateNavYear").innerHTML = date.getFullYear();
document.getElementById("dateYear").innerHTML = date.getFullYear();
