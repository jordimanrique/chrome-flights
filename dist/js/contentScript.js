const TRANSPORT_TYPE = 'TRANSPORT';

let storage = chrome.storage.local;

chrome.runtime.onMessage.addListener((message) => {
    switch(message.type) {
        case 'NEW_RESULTS':
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

function processResultsBoxes() {
    storage.get({'results': []}, function(items) {
        const flightResults = items.results && items.results.flightResults;

        if (!flightResults) {
            alert('Atrapalo Flights: No Results found');
            return;
        }

        //Prevent unique boxes info.
        $('.chrome-flights__box').remove();

        //Set info in Transports
        $('div.info-track').each(function() {
            const id = $(this).attr('id');
            const data = flightResults[id];
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

        //Set info in Combinations Boxes
        $('article[data-combination-id]').each(function() {
            const combinationId = $(this).data('combination-id');
            const data = flightResults[combinationId];

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
    if (transportType === TRANSPORT_TYPE ) {
        return 'rgba(100, 149, 237, 0.2)';
    }

    return 'rgba(46, 188, 30, 0.2)';
}

setTimeout(processResultsBoxes, 7000);