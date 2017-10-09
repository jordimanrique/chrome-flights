let storage = chrome.storage.local;

chrome.runtime.onMessage.addListener((message, sender, response) => {
    if (message.type === 'NEW_RESULTS') {
        populateTitles();
    }
});

setTimeout(populateTitles, 5000);


function populateTitles() {
    storage.get({'results': []}, function(items) {
        const data = items.results.data;

        if (data === undefined) {
            return;
        }

        console.log('titles');

        const combinations = data.combinations;

        let _combinations = ((combinations) => {
            return combinations.reduce((prev, combi) => {
                const identity = combi.identity;
                const type = combi.type === 'TRANSPORT' ? 'transports' : 'packages';
                prev[identity] = {
                    type: combi.type,
                    combinationId: identity
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
        })(combinations);

        $('div.info-track').each(function() {
            const id = $(this).attr('id');
            const data = _combinations[id];
            if (data) {
                const title = `[${data.type}] [${data.provider}] [${data.plating_carrier}] ${data.id} `;
                $(this).attr('title', title);
            }
        });

        $('article[data-combination-id]').each(function() {
            const combinationId = $(this).data('combination-id');
            const data = _combinations[combinationId];
            const title = `[${data.type}] CombinationId [${data.combinationId}]`;
            $(this).attr('title', title);

            let color = 'rgba(46, 188, 30, 0.4)';

            if (data.type === 'TRANSPORT' ) {
                color = 'rgba(100, 149, 237, 0.4)';
            }

            $(this).css('border-top', `10px solid ${color}`);
        });
    });
}