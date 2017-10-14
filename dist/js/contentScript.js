const TRANSPORT_TYPE = 'TRANSPORT';

let storage = chrome.storage.local;

function getAndShowResults(callback) {
    storage.get({'results': []}, (items) => {
        const flightResults = items.results && items.results.flightResults;
        processResultsBoxes(flightResults);
        callback();
    });
}

function showTransportInfo(combinationId, transportId) {
    storage.get({'results': []}, (items) => {
        const flightResults = items.results && items.results.flightResults;
        const data = flightResults[combinationId][transportId];
        const priceLines = data.price_lines;

        const headers = `<tr style="padding:3px; font-weight: bold;">
                              <td style="padding: 2px 5px;">Type</td>
                              <td style="padding: 2px 5px;">Price</td>
                              <td style="padding: 2px 5px;">Quantity</td>
                              <td style="padding: 2px 5px;">Payment Method</td>
                          </tr>`;
        let rows = '';

        Object.keys(priceLines).forEach((type) => {
          let lines = priceLines[type];

          rows += lines.reduce((prev, priceLine) => {

            priceLine = priceLine.split('|');

            return `${prev}
                    <tr>
                        <td style="padding: 2px 5px;">${type}</td>
                        <td style="padding: 2px 5px; white-space: nowrap;">${priceLine[0]}</td>
                        <td style="padding: 2px 5px;">${priceLine[1]}</td>
                        <td style="padding: 2px 5px;">${priceLine[2]}</td>
                    </tr>
           `;
          }, '');
        });

        let info = `<table>${headers}${rows}</table>`;

        $.colorbox({title: "Price Lines " + transportId,  html: info, height:'90%'});
    });

}

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case 'COMMAND':
      switch (message.payload) {
        case 'toggle-info':
          var boxes = $('div.chrome-flights__box');

          if (boxes.length === 0) {
            getAndShowResults(function (){
                $('div.chrome-flights__box').removeClass('hidden');
            });
          }
          boxes.toggleClass('hidden');
          break;
        case 'only-packages':
          $('.chrome-flights__PACKAGE').removeClass('hidden');
          $('.chrome-flights__TRANSPORT').addClass('hidden');
          break;
        case 'only-transports':
          $('.chrome-flights__TRANSPORT').removeClass('hidden');
          $('.chrome-flights__PACKAGE').addClass('hidden');
          break;
        case 'show-all':
          $('.chrome-flights__TRANSPORT').removeClass('hidden');
          $('.chrome-flights__PACKAGE').removeClass('hidden');
          break;
      }
  }
});

function processResultsBoxes(flightResults) {
    if (!flightResults) {
      alert('Atrapalo Flights: No Results found');
      return;
    }

    //Prevent unique boxes info.
    $('.chrome-flights__box').remove();

    //Set info in Combinations Boxes
    $('article[data-combination-id]').each(function () {
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

        //Set info in Transports
        $(this).find('div.info-track').each(function () {
          const id = $(this).attr('id');
          const transportData = flightResults[combinationId][id];
          if (transportData) {
            const title = `[${transportData.provider}] [${transportData.plating_carrier}] ${transportData.id} `;
            $(this).attr('title', title);

            $(this).before(
              `<div style="position:relative;">
                        <div class="chrome-flights__box hidden"
                             data-combination-id = "${combinationId}"
                             data-id = "${transportData.id}"
                             style="position:absolute; top:0; right:0; left:0; z-index:1;background:${getColor(transportData.type)};padding:2px 12px;font-size:10px;cursor:pointer;">
                            ${title}
                        </div>
                    </div>`);

            $('.chrome-flights__box').click(function() {
               showTransportInfo($(this).data('combination-id'), $(this).data('id'));
            });
          }
        });
      }
    });
}

function getColor(transportType) {
  if (transportType === TRANSPORT_TYPE) {
    return 'rgba(100, 149, 237, 0.2)';
  }

  return 'rgba(46, 188, 30, 0.2)';
}