let storage = chrome.storage.local;

chrome.runtime.onMessage.addListener((message, sender, response) => {
    switch(message.type) {
        case 'NEW_RESULTS':
            // alert('process new results');
            processResultsBoxes();
            break;
        case 'COMMAND':
            if (message.payload === 'toggle-transports') {
                $('div.chrome-flights__box').toggleClass('hidden');
            }
            break;
    }
});

// alert('contentScript');

function processResultsBoxes() {
    storage.get({'results': []}, function(items) {
        const data = items.results.data;

        if (data === undefined) {
            return;
        }

        const combinations = data.combinations;

        let _combinations = ((combinations) => {
            return combinations.reduce((prev, combi) => {
                const identity = combi.identity;
                const type = combi.type === 'TRANSPORT' ? 'transports' : 'packages';
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
        })(combinations);

        //Transports and Packages Boxes
        $('div.info-track').each(function() {
            const id = $(this).attr('id');
            const data = _combinations[id];
            if (data) {
                const title = `[${data.provider}] [${data.plating_carrier}] ${data.id} `;
                $(this).attr('title', title);

                $(this).before(
                `<div class="chrome-flights__box hidden" style="background:${getColor(data.type)};padding:2px 12px;font-size:10px;">
                    ${title}
                </div>`);
            }
        });

        //Combinations Boxes
        $('article[data-combination-id]').each(function() {
            const combinationId = $(this).data('combination-id');
            const data = _combinations[combinationId];
            const title = `[${data.type}] [CombinationId] ${combinationId}`;
            $(this).attr('title', title);
            $(this).before(
                `<div class="chrome-flights__box hidden" style="background:${getColor(data.type)};padding:4px 12px;">
                    ${title}
                </div>`);
        });
    });
}

function getColor(transportType) {
    if (transportType === 'TRANSPORT' ) {
        return 'rgba(100, 149, 237, 0.2)';
    }

    return 'rgba(46, 188, 30, 0.2)';
}