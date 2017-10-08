console.log('content-script');

chrome.runtime.onMessage.addListener((message, sender, response) => {
	console.log('contentScript', message);
});