chrome.runtime.onMessage.addListener((message, sender, response) => {
	console.log(message);

	if (message.type === 'NEW_RESULTS') {
		let searchRequest = message.payload.data.search_request;
		$('section#subheader').append(`<section><div>${searchRequest.identity}</div></section>`);
	}
});