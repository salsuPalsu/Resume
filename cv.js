function init(){

  var wrapper;

  wrapper = document.getElementById("cvWrapper");
  wrapper.style.display = "none";

}

function clickedResume() {
  document.getElementById("clickMe").style.display = "none";
  document.getElementById("backgroundScreen").style.filter = "blur(2vh)";
  openTab(onclick, 'hBase');
}

function openTab(evt, pageName) {
    var i, tabsinfo, tabButton, tabs, wrapper;
    
    tabs = document.getElementsByClassName("tabs");

    if (pageName == "yBase" || pageName == "wBase") {
      
      tabs[0].style.gridColumn = "5";
    } 
    if (pageName == "hBase") {
      tabs[0].style.gridColumn = "4";
    }

    tabsinfo = document.getElementsByClassName("tabsinfo");
    for (i = 0; i < tabsinfo.length; i++) {
      tabsinfo[i].style.display = "none";
    }
  
    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
      tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
  
    wrapper = document.getElementById("cvWrapper");
    wrapper.style.display = "grid";

    document.getElementById(pageName).style.display = "grid";
    evt.currentTarget.className += " active";
    

  }