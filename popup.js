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