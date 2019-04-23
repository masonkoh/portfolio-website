function changeToLightmode() {
  var links = document.getElementsByTagName("a");
  document.body.style.backgroundColor = "white";
  for (var i = 0; i < links.length; i++) {
    if (links[i].href) {
      links[i].style.color = "black";
    }
  }
  document.getElementsByTagName("ul")[0].style.color = "black";
  document.getElementById("grid_main_content").style.color = "black";
}
function changeToDarkMode() {
  var links = document.getElementsByTagName("a");

  document.body.style.backgroundColor = "#3A3C3E";

  for (var i = 0; i < links.length; i++) {
    links[i].style.color = "#DCDCDC";
  }
  document.getElementsByTagName("ul")[0].style.color = "#DCDCDC";
  document.getElementById("grid_main_content").style.color = "#DCDCDC";
}

// var as = document.getElementsByTagName("a");
// for (var i = 0; i < as.length; i++) {
//   as[i].style.color = "white";
// }
// document.getElementsByTagName("ol")[0].style.color = "white";
