/*
LittleSnapper Actions v 0.1.1
Copyright (c) 2011 Seth Lilly. All rights reserved.
*/

function openClick() {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.update(tab.id,{url: 'littlesnapper://navigate/'+tab.url});
	});
}

function snapClick() {
	chrome.tabs.getSelected(null, function(tab) {
		chrome.tabs.update(tab.id,{url: 'littlesnapper://snap/'+tab.url});
	});
}

function placeButtons() {
	document.getElementById("buttons").innerHTML = "";
	var currentFirstButton = localStorage["firstButton"];
	var openButton = "<a class='button' onclick='openClick()'>Open Page in LittleSnapper</a>";
	var snapButton = "<a class='button' onclick='snapClick()'>Snap Page to LittleSnapper</a>";
	if (currentFirstButton == null || currentFirstButton == "open") {
		document.getElementById("buttons").innerHTML = openButton+snapButton;
	} else {
		document.getElementById("buttons").innerHTML = snapButton+openButton;
	}
}

