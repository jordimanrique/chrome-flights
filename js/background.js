let storage = chrome.storage.local;

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

chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
        if (details.type === "xmlhttprequest") {
            var formData = details.requestBody.formData;
            var url = details.url + '?_ce=true';

            storage.set({'results': {}});

            if (formData) {
                fetch(url, {
                    method : details.method,
                    body: processFormData(formData),
                }).then((response) => {
                    return response.json(); 
                }).then((data) => {
                    storage.set({'results': data}, function() {
                        sendMessage({type:'NEW_RESULTS'});
                        // alert('new results');
                    });
                });
            }
        }
    },
    {
        urls: ["*://*/apitransport/combinations"], 
        types:["xmlhttprequest"]
    },
    ["requestBody"]
);

chrome.commands.onCommand.addListener((command) => {
    sendMessage({
        type: 'COMMAND',
        payload: command
    })
});

function processFormData(formData) {
    var data = new FormData();

    var keys = Object.keys(formData);
    for (var i = 0; i < keys.length; i++) {
        data.append(keys[i], formData[keys[i]][0]);
    }

    return data;
}

function sendMessage(message) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    console.log(tabs);
    lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, message);
  });
}