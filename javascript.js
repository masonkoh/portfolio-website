function changeToLightmode() {
  document.body.style.backgroundColor = "white";
}
function changeToDarkMode() {
  var links = document.getElementsByTagName("a");

  document.body.style.backgroundColor = "black";

  for (var i = 0; i < links.length; i++) {
    if (links[i].href) {
      links[i].style.color = "#DCDCDC";
    }
  }
}
