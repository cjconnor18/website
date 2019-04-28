document.getElementById("myHead").innerHTML =
	"<h1>23Connor</h1>";
  /*Date Formulas*/
var date = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];




document.getElementById("myNav").innerHTML =
  "<ul>"
    + "<li class='dateNav'>" + months[date.getMonth()] +" "+ date.getDate() +", "+ date.getFullYear() +"<span id='dateNavMonth'></span> <span id='dateNavDay'></span> <span id='dateNavYear'></span></li>"
    + "<li><a href='index.html'>Home</a></li>"
    + "<li><a onclick=eventsFunction() id='eventsButton' class='eventsButton' href='#'>Events</a>"
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
