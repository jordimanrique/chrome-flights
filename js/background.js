// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.type == 'ACTIVE_PLUGIN') {
//         alert(JSON.stringify(sender));
//         chrome.pageAction.show(sender.tab.id);
//     }
// });


chrome.runtime.onInstalled.addListener(function() {
    // Replace all rules ...
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        // With a new rule ...
        chrome.declarativeContent.onPageChanged.addRules([
            {
                // That fires when a page's URL contains a 'g' ...
                conditions: [
                    new chrome.declarativeContent.PageStateMatcher({
                        pageUrl: { urlContains: '/vuelos/resultados_ajax' },
                    })
                ],
                // And shows the extension's page action.
                actions: [ new chrome.declarativeContent.ShowPageAction() ]
            }
        ]);
    });
});