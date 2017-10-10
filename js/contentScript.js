let storage = chrome.storage.local;

chrome.runtime.onMessage.addListener((message, sender, response) => {
    switch(message.type) {
        case 'NEW_RESULTS':
            // alert('process new results');
            processResultsBoxes();
            break;
        case 'COMMAND':
            switch(message.payload) {
                case 'toggle-info':
                    $('div.chrome-flights__box').toggleClass('hidden');
                    break;

                case 'toggle-packages':
                    $('.chrome-flights__PACKAGE').toggleClass('hidden');
                    break;

                case 'toggle-transports':
                    $('.chrome-flights__TRANSPORT').toggleClass('hidden');
                    break;
            }
            break;
    }
});

// alert('contentScript');

function processResultsBoxes() {
    storage.get({'results': []}, function(items) {
        const data = items.results.data;

        if (data === undefined) {
            alert('Atrapalo Flights: No Results');
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

        //Prevent unique boxes info.
        $('.chrome-flights__box').remove();

        //Transports and Packages Boxes
        $('div.info-track').each(function() {
            const id = $(this).attr('id');
            const data = _combinations[id];
            if (data) {
                const title = `[${data.provider}] [${data.plating_carrier}] ${data.id} `;
                $(this).attr('title', title);

                $(this).before(
                `<div style="position:relative;">
                    <div class="chrome-flights__box hidden" 
                         style="position:absolute; top:0; right:0; left:0; z-index:100;background:${getColor(data.type)};padding:2px 12px;font-size:10px;">
                        ${title}
                    </div>
                </div>`);
            }
        });

        //Combinations Boxes
        $('article[data-combination-id]').each(function() {
            const combinationId = $(this).data('combination-id');
            const data = _combinations[combinationId];

            if (data) {
                const title = `[${data.type}] [CombinationId] ${combinationId}`;
                $(this).attr('title', title);
                $(this).addClass(`chrome-flights__${data.type}`);
                $(this).prepend(
                    `<div class="chrome-flights__box hidden" style="background:${getColor(data.type)};padding:4px 12px;">
                    ${title}
                </div>`);
            }
        });
    });
}

function getColor(transportType) {
    if (transportType === 'TRANSPORT' ) {
        return 'rgba(100, 149, 237, 0.2)';
    }

    return 'rgba(46, 188, 30, 0.2)';
}

setTimeout(processResultsBoxes, 7000);