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
