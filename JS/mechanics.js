// JavaScript Document

window.onload = getTheDivHeight;
	
	function getTheDivHeight() {
	var divheight = document.getElementById("mainContent_Right").offsetHeight;
	document.getElementById("mainContent_Left").style.height = divheight-40+"px";
		}
