const TRANSPORT_TYPE = 'TRANSPORT';

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

            // storage.set({'results': {}});

            if (formData) {
                fetch(url, {
                    method : details.method,
                    body: generateFormData(formData),
                }).then((response) => {
                    return response.json(); 
                }).then((data) => {
                    data = processResultsData(data);
                    storage.set({'results': data}, function() {
                        sendMessage({type:'NEW_RESULTS'});
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


function processResultsData(data) {
    let fligthResults = ((combinations) => {
        return combinations.reduce((prev, combi) => {
            const identity = combi.identity;
            const type = combi.type === TRANSPORT_TYPE ? 'transports' : 'packages';
            prev[identity] = {
                type: combi.type
            };

            if (type === 'packages') {
                combi[type].forEach((package) => {
                    let transports = package.transports;
                    Object.keys(transports).forEach((key) => {
                        transports[key].forEach((transport) => {
                            prev[transport.id] = {
                                provider: transport.provider,
                                id: transport.id,
                                type: combi.type,
                                plating_carrier: transport.plating_carrier
                            };
                        });
                    });
                });

                return prev;
            }

            Object.keys(combi[type]).forEach((key) => {
                combi[type][key].forEach((transport) => {
                    prev[transport.id] = {
                        provider: transport.provider,
                        id: transport.id,
                        type: combi.type,
                        plating_carrier: transport.plating_carrier
                    };
                });
            });

            return prev;
        }, {});
    })(data.data.combinations);

    return {...data, fligthResults};
}

function generateFormData(data) {
    let formData = new FormData();
    let keys = Object.keys(data);

    for (let i = 0; i < keys.length; i++) {
        formData.append(keys[i], data[keys[i]][0]);
    }

    return formData;
}

function sendMessage(message) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, message);
  });
}