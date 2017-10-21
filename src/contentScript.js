import DataTransformer from './DataTransformer';

const TRANSPORT_TYPE = 'TRANSPORT';
const storage = chrome.storage.local;

function getAndShowResults(callback) {
  storage.get('results', (items) => {
    const flightResults = items.results && items.results.flightResults;
    addInfoToResultsBoxes(flightResults);

    if (callback) {
      callback();
    }
  });
}

function addInfoToResultsBoxes(flightResults) {
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

          $(this).parent().find('.chrome-flights__box').click(function () {
            showPriceLinesInfo($(this).data('combination-id'), $(this).data('id'));
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

function showPriceLinesInfo(combinationId, transportId) {
  storage.get('results', (items) => {
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

    $.colorbox({title: "Price Lines " + transportId, html: info});
  });
}

function toggleInfo() {
  var boxes = $('div.chrome-flights__box');

  if (boxes.length === 0) {
    getAndShowResults(function () {
      $('div.chrome-flights__box').removeClass('hidden');
    });
  } else {
    boxes.toggleClass('hidden');
  }
  $('#chrome-flights-menu-info').toggleClass('button-atrapalo--white-bg');
}

function showBoxesByType(type) {
  switch (type) {
    case 'packages':
      $('.chrome-flights__PACKAGE').removeClass('hidden');
      $('.chrome-flights__TRANSPORT').addClass('hidden');

      $('#chrome-flights-menu-packages').addClass('button-atrapalo--white-bg');
      $('#chrome-flights-menu-transports, #chrome-flights-menu-all').removeClass('button-atrapalo--white-bg');
      break;
    case 'transports':
      $('.chrome-flights__TRANSPORT').removeClass('hidden');
      $('.chrome-flights__PACKAGE').addClass('hidden');

      $('#chrome-flights-menu-transports').addClass('button-atrapalo--white-bg');
      $('#chrome-flights-menu-packages, #chrome-flights-menu-all').removeClass('button-atrapalo--white-bg');
      break;
    case 'all':
      $('.chrome-flights__TRANSPORT').removeClass('hidden');
      $('.chrome-flights__PACKAGE').removeClass('hidden');

      $('#chrome-flights-menu-all').addClass('button-atrapalo--white-bg');
      $('#chrome-flights-menu-packages, #chrome-flights-menu-transports').removeClass('button-atrapalo--white-bg');
      break;
  }
}

function initMenu() {
  //Reset menu
  $('#chrome-flights-menu').remove();

  $('header#header').append(
    `<div id="chrome-flights-menu" class="hidden" style="position:fixed; top: 5px; left: 50%; transform: translateX(-50%); z-index:100">
      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo" id="chrome-flights-menu-info">Info</button>
      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo" id="chrome-flights-menu-packages">Packages</button>
      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo" id="chrome-flights-menu-transports">Transports</button>
      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo button-atrapalo--white-bg" id="chrome-flights-menu-all">All</button>
  </div>`
  );

  //Events
  $('header#header').off('dblclick').dblclick(function () {
    $('#chrome-flights-menu').toggleClass('hidden');
  });

  $('#chrome-flights-menu-info').click(function () {
    toggleInfo();
  });

  $('#chrome-flights-menu-packages').click(function () {
    showBoxesByType('packages');
  });

  $('#chrome-flights-menu-transports').click(function () {
    showBoxesByType('transports');
  });

  $('#chrome-flights-menu-all').click(function () {
    showBoxesByType('all');
  });
}

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case 'COMMAND':
      switch (message.payload) {
        case 'toggle-info':
          toggleInfo();
          break;
        case 'only-packages':
          showBoxesByType('packages');
          break;
        case 'only-transports':
          showBoxesByType('transports');
          break;
        case 'show-all':
          showBoxesByType('all');
          break;
      }
  }
});

let s = document.createElement('script');
s.src = chrome.extension.getURL('js/ajaxListener.js');
s.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);

document.addEventListener('NEW_RESULTS', (event) => {
  let data = event.detail;
  data = (new DataTransformer()).transform(data);

  storage.set({'results': data}, () => {
    initMenu();
  });
});