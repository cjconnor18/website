document.getElementById("myHead").innerHTML =
	"<h1>23Connor</h1>";
document.getElementById("myNav").innerHTML =
  "<ul>"
    + "<li class='dateNav'><span id='dateNavMonth'></span> <span id='dateNavDay'></span> <span id='dateNavYear'></span></li>"
    + "<li><a href='index.html'>Home</a></li>"
    + "<li><a onclick='eventsFunction()' id='eventsButton' class='eventsButton' href='#'>Events</a>"
      + "<ul id='eventsDropMenu' class='eventsDropMenu'>"
        + "<li><a href='pages/passwordgrad.html'>Graduation</a></li>"
        + "<li><a href='pages/passwordrev.html'>Reveal</a></li>"
        + "<!--<li><a href='pages/another.html'>Another</a></li>-->"
      + "</ul>"
    + "</li>"
    + "<li><a href='about.html'>About</a></li>"
    + "<li class='contact'><a href='contact'>Contact</a></li>"
  + "</ul>";
document.getElementById("myFooter").innerHTML =
	"<p id='copyright'>Copyright &copy; " + new Date().getFullYear() + " You. All"
	+ " rights reserved.</p>"
	+ "<p id='credits'>Layout by You</p>"
	+ "<p id='contact'><a href='mailto:you@you.com'>Contact Us</a> / "
	+ "<a href='mailto:you@you.com'>Report a problem.</a></p>";
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
