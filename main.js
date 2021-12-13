function include() {
  var o, i, elmnt, file, xhttp;
  o = document.getElementsByTagName("*");
  for (i = 0; i < o.length; i++) {
    elmnt = o[i];
    file = elmnt.getAttribute("include");
    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Error 404: Page not found. (include-html)";}
          elmnt.removeAttribute("include");
          includeHTML();
        }
      }
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
}
