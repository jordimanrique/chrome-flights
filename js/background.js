chrome.runtime.onInstalled.addListener(() =>  {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([
            { 
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: '/vuelos/resultados_ajax' },
                    })
                ],
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});

function processFormData(formData) {
    var data = new FormData();

    var keys = Object.keys(formData);
    for (var i = 0; i < keys.length; i++) {
        data.append(keys[i], formData[keys[i]][0]);
    }

    return data;
}

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        if (details.type === "xmlhttprequest") {
            var formData = details.requestBody.formData;
            var url = details.url + '?_ce=true';

            if (formData) {
                fetch(url, {
                    method : details.method,
                    body: processFormData(formData),
                }).then((response) => {
                    return response.json(); 
                }).then((data) => {
                    sendMessage({
                        type:'NEW_RESULTS',
                        payload: data
                    });
                });
            }
        }
    },
    {
        urls: ["*://*.atrapalo.com/apitransport/combinations"], 
        types:["xmlhttprequest"]
    },
    ["requestBody"]
);


function sendMessage(message) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, message);
  });
}