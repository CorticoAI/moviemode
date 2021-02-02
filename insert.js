svg_url = chrome.extension.getURL("logo.svg");

var div = document.createElement("div"); 
document.body.appendChild(div); 
div.id = "logo";
document.getElementById("logo").innerHTML = "<img src='" + svg_url + "'>"

window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

document.body.onkeyup = function(e){
    if(e.keyCode == 32){
    	document.querySelector('[class^="PlayPauseButton_button"]').click()
    }
}

document.body.classList.toggle("movie");
