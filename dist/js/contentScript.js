const TRANSPORT_TYPE = 'TRANSPORT';

let storage = chrome.storage.local;

function getAndShowResults(callback) {
    storage.get({'results': []}, (items) => {
        const flightResults = items.results && items.results.flightResults;
        processResultsBoxes(flightResults);
        callback();
    });
}

function showTransportInfo(transportId) {
    $.colorbox({html:"<h1>" + transportId + "</h1>"});
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

    //Set info in Transports
    $('div.info-track').each(function () {
      const id = $(this).attr('id');
      const data = flightResults[id];
      if (data) {
        const title = `[${data.provider}] [${data.plating_carrier}] ${data.id} `;
        $(this).attr('title', title);

        $(this).before(
          `<div style="position:relative;">
                    <div class="chrome-flights__box hidden"
                         data-id = "${data.id}"
                         style="position:absolute; top:0; right:0; left:0; z-index:1;background:${getColor(data.type)};padding:2px 12px;font-size:10px;cursor:pointer;">
                        ${title}
                    </div>
                </div>`);

        $('.chrome-flights__box').click(function() {
           showTransportInfo($(this).data('id'));
        });
      }
    });

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
      }
    });
}

function getColor(transportType) {
  if (transportType === TRANSPORT_TYPE) {
    return 'rgba(100, 149, 237, 0.2)';
  }

  return 'rgba(46, 188, 30, 0.2)';
}