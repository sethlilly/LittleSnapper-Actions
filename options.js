var defaultFirstButton = "open";

function loadOptions() {
	var currentFirstButton = localStorage["firstButton"];

	// Valid options are open and snap.
	if (currentFirstButton == undefined || (currentFirstButton != "open" && currentFirstButton != "snap")) {
		currentFirstButton = defaultFirstButton;
	}

	var select = document.getElementById("firstButton");
	for (var i = 0; i < select.children.length; i++) {
		var child = select.children[i];
			if (child.value == currentFirstButton) {
			child.selected = "true";
			break;
		}
	}
}

function saveOptions() {
	var select = document.getElementById("firstButton");
	var firstButton = select.children[select.selectedIndex].value;
	localStorage.setItem("firstButton", firstButton);
	location.href = chrome.extension.getURL("popup.html");
}

function eraseOptions() {
	localStorage.removeItem("firstButton");
	location.reload();
	location.href = chrome.extension.getURL("popup.html");
}