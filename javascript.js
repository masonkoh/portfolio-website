function toggleMode() {
  var toggleValue = document.getElementById("modeToggleButton").value;
  if (toggleValue === "Dark Mode") {
    changeToDarkMode();
    document.getElementById("modeToggleButton").value = "Light Mode";
  } else if (toggleValue === "Light Mode") {
    changeToLightMode();
    document.getElementById("modeToggleButton").value = "Dark Mode";
  }
}

function changeToLightMode() {
  var aList = document.getElementsByTagName("a");
  var i = 0;
  while (i < aList.length) {
    aList[i].style.color = "black";
    i++;
  }
  document.body.style.backgroundColor = "white";
  document.getElementsByTagName("ul")[0].style.color = "black";
  document.getElementById("grid_main_content").style.color = "black";
}

function changeToDarkMode() {
  var aList = document.getElementsByTagName("a");
  var i = 0;
  while (i < aList.length) {
    aList[i].style.color = "#DCDCDC";
    i++;
  }

  document.body.style.backgroundColor = "#3A3C3E";
  document.getElementsByTagName("ul")[0].style.color = "#DCDCDC";
  document.getElementById("grid_main_content").style.color = "#DCDCDC";
}
