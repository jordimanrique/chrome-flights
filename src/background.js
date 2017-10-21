const URL_RULE_PATH = '/vuelos/resultados_ajax';

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

chrome.commands.onCommand.addListener((command) => {
  sendMessage({
    type: 'COMMAND',
    payload: command
  })
});

function sendMessage(message) {
  chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
    let lastTabId = tabs[0].id;
    if (lastTabId) {
      chrome.tabs.sendMessage(lastTabId, message);
    }
  });
}