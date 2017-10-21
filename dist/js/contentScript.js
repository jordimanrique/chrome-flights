/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DataTransformer = __webpack_require__(3);

var _DataTransformer2 = _interopRequireDefault(_DataTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSPORT_TYPE = 'TRANSPORT';
var storage = chrome.storage.local;

function getAndShowResults(callback) {
  storage.get('results', function (items) {
    var flightResults = items.results && items.results.flightResults;
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
    var combinationId = $(this).data('combination-id');
    var data = flightResults[combinationId];

    if (data) {
      var title = '[' + data.type + '] [CombinationId:<span class="chrome-flights-copy">' + combinationId + '</span>]';
      $(this).addClass('chrome-flights__' + data.type);
      $(this).prepend('<div class="chrome-flights__box hidden" style="background:' + getColor(data.type) + ';padding:4px 12px;">\n                    ' + title + '\n                </div>');

      //Set info in Transports
      $(this).find('div.info-track').each(function () {
        var id = $(this).attr('id');
        var transportData = flightResults[combinationId][id];
        if (transportData) {
          var _title = '[' + transportData.provider + '] [' + transportData.plating_carrier + '] <span class="chrome-flights-copy">' + transportData.id + '</span>';

          $(this).before('<div style="position:relative;">\n                        <div class="chrome-flights__box hidden"\n                             data-combination-id = "' + combinationId + '"\n                             data-id = "' + transportData.id + '"\n                             style="position:absolute; top:0; right:0; left:0; z-index:1;background:' + getColor(transportData.type) + ';padding:2px 12px;font-size:10px;">\n                            ' + _title + ' <a href="#" class="chrome-flights__box-priceline" style="float:right;">[Price Lines]</a>\n                        </div>\n                    </div>');

          $(this).parent().find('.chrome-flights__box-priceline').click(function (e) {
            e.preventDefault();
            showPriceLinesInfo($(this).parent().data('combination-id'), $(this).parent().data('id'));
          });
        }
      });

      $('.chrome-flights-copy').on('dblclick', function () {
        copyToClipboard($(this));
      }).css('color', 'cornflowerblue').css('cursor', 'pointer');
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
  storage.get('results', function (items) {
    var flightResults = items.results && items.results.flightResults;
    var data = flightResults[combinationId][transportId];
    var priceLines = data.price_lines;

    var headers = '<tr style="padding:3px; font-weight: bold;">\n                              <td style="padding: 2px 5px;">Type</td>\n                              <td style="padding: 2px 5px;">Price</td>\n                              <td style="padding: 2px 5px;">Quantity</td>\n                              <td style="padding: 2px 5px;">Payment Method</td>\n                          </tr>';
    var rows = '';

    Object.keys(priceLines).forEach(function (type) {
      var lines = priceLines[type];

      rows += lines.reduce(function (prev, priceLine) {
        priceLine = priceLine.split('|');

        return prev + '\n                    <tr>\n                        <td style="padding: 2px 5px;">' + type + '</td>\n                        <td style="padding: 2px 5px; white-space: nowrap;">' + priceLine[0] + '</td>\n                        <td style="padding: 2px 5px;">' + priceLine[1] + '</td>\n                        <td style="padding: 2px 5px;">' + priceLine[2] + '</td>\n                    </tr>\n           ';
      }, '');
    });

    var info = '<table>' + headers + rows + '</table>';

    $.colorbox({ title: "Price Lines " + transportId, html: info });
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

  $('header#header').append('<div id="chrome-flights-menu" class="hidden" style="position:fixed; top: 5px; left: 50%; transform: translateX(-50%); z-index:100">\n      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo" id="chrome-flights-menu-info">Info</button>\n      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo" id="chrome-flights-menu-packages">Packages</button>\n      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo" id="chrome-flights-menu-transports">Transports</button>\n      <button style="height:25px; line-height: 0; margin:0" class="button-atrapalo button-atrapalo--white-bg" id="chrome-flights-menu-all">All</button>\n  </div>');

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

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  var text = $(element).text();
  $temp.val(text).select();
  document.execCommand("copy");
  $temp.remove();

  chrome.runtime.sendMessage({ type: 'COPY', payload: text });
}

chrome.runtime.onMessage.addListener(function (message) {
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

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/ajaxListener.js');
s.onload = function () {
  this.remove();
};

(document.head || document.documentElement).appendChild(s);

document.addEventListener('NEW_RESULTS', function (event) {
  var data = event.detail;
  data = new _DataTransformer2.default().transform(data);

  storage.set({ 'results': data }, function () {
    initMenu();
    toggleInfo();
  });
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TRANSPORT_TYPE = 'TRANSPORT';

var DataTransformer = function () {
  function DataTransformer() {
    _classCallCheck(this, DataTransformer);
  }

  _createClass(DataTransformer, [{
    key: 'transform',
    value: function transform(data) {
      var flightResults = function (combinations) {
        return combinations.reduce(function (prev, combination) {
          var identity = combination.identity;
          var type = combination.type === TRANSPORT_TYPE ? 'transports' : 'packages';
          prev[identity] = {
            type: combination.type
          };

          if (type === 'packages') {
            combination[type].forEach(function (_package) {
              var transports = _package.transports;
              Object.keys(transports).forEach(function (key) {
                transports[key].forEach(function (transport) {
                  prev[identity][transport.id] = {
                    provider: transport.provider,
                    id: transport.id,
                    package_identity: _package.identity,
                    type: combination.type,
                    plating_carrier: transport.plating_carrier,
                    price_lines: transformPriceLines(_package.price_lines)
                  };
                });
              });
            });

            return prev;
          }

          Object.keys(combination[type]).forEach(function (key) {
            combination[type][key].forEach(function (transport) {
              prev[identity][transport.id] = {
                provider: transport.provider,
                id: transport.id,
                type: combination.type,
                plating_carrier: transport.plating_carrier,
                price_lines: transformPriceLines(transport.price_lines)
              };
            });
          });

          return prev;
        }, {});
      }(data.data.combinations);

      return _extends({}, data, { flightResults: flightResults });
    }
  }]);

  return DataTransformer;
}();

function reduceToUniquePriceLines(priceLines) {
  var uniqueLines = [];
  var tempLines = {};

  priceLines.forEach(function (priceLine) {
    var key = '' + priceLine.price.amount + priceLine.price.currency + priceLine.type + (priceLine.payment_method ? priceLine.payment_method : '');

    if (tempLines[key]) {
      tempLines[key] = _extends({}, priceLine, { quantity: tempLines[key].quantity += priceLine.quantity });
    } else {
      tempLines[key] = _extends({}, priceLine);
    }
  });

  Object.keys(tempLines).forEach(function (key) {
    uniqueLines.push(tempLines[key]);
  });

  return uniqueLines;
}

function transformPriceLines(priceLines) {
  var lines = {};

  reduceToUniquePriceLines(priceLines).forEach(function (line) {
    if (!lines[line.type]) {
      lines[line.type] = [];
    }

    lines[line.type].push(line.price.amount + ' ' + line.price.currency + '|' + line.quantity + '|' + (line.payment_method ? line.payment_method : ''));
  });

  return lines;
}

exports.default = DataTransformer;

/***/ })
/******/ ]);