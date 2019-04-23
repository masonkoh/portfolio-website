// under construction...
function toggleMode(modeValue) {
  if (modeValue === "Night Mode") {
    changeToDarkMode();
  } else {
    changeToLightmode();
  }
}

function changeToDayMode() {
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
function changeToNightMode() {
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
