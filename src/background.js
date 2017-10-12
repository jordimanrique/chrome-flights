const TRANSPORT_TYPE = 'TRANSPORT';
const URL_RULE_PATH = '/vuelos/resultados_ajax';

let storage = chrome.storage.local;

chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlContains: URL_RULE_PATH},
          })
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()]
      }
    ]);
  });
});

chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    if (details.type === "xmlhttprequest") {
      let formData = details.requestBody.formData;
      let url = details.url + '?_ce=true';

      // storage.set({'results': {}});

      if (formData) {
        fetch(url, {
          method: details.method,
          body: generateFormData(formData),
        }).then((response) => {
          return response.json();
        }).then((data) => {
          data = processResultsData(data);
          storage.set({'results': data}, function () {
            sendMessage({type: 'NEW_RESULTS'});
          });
        });
      }
    }
  },
  {
    urls: ["*://*/apitransport/combinations"],
    types: ["xmlhttprequest"]
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
  let flightResults = ((combinations) => {
    return combinations.reduce((prev, combination) => {
      const identity = combination.identity;
      const type = combination.type === TRANSPORT_TYPE ? 'transports' : 'packages';
      prev[identity] = {
        type: combination.type
      };

      if (type === 'packages') {
        combination[type].forEach((_package) => {
          let transports = _package.transports;
          Object.keys(transports).forEach((key) => {
            transports[key].forEach((transport) => {
              prev[transport.id] = {
                provider: transport.provider,
                id: transport.id,
                type: combination.type,
                plating_carrier: transport.plating_carrier,
                price_lines: _package.price_lines
              };
            });
          });
        });

        return prev;
      }

      Object.keys(combination[type]).forEach((key) => {
        combination[type][key].forEach((transport) => {
          prev[transport.id] = {
            provider: transport.provider,
            id: transport.id,
            type: combination.type,
            plating_carrier: transport.plating_carrier,
            price_lines: transport.price_lines
          };
        });
      });

      return prev;
    }, {});
  })(data.data.combinations);

  return {...data, flightResults};
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
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    let lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, message);
  });
}