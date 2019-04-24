function toggleMode() {
  var toggleValue = document.getElementsByClassName("modeToggleButton")[0]
    .value;
  // using array[0] because CLASS is not unique unlike ID. but in this website, we have only 1 class called 'modeToggleButton' tho.
  var modeToggleButtonClassName = document.getElementsByClassName(
    "modeToggleButton"
  )[0];
  modeToggleButtonClassName.classList.toggle("active");

  if (toggleValue === "Dark") {
    changeToDarkMode();
    document.getElementsByClassName("modeToggleButton")[0].value = "Light";
  } else if (toggleValue === "Light") {
    changeToLightMode();
    document.getElementsByClassName("modeToggleButton")[0].value = "Dark";
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
