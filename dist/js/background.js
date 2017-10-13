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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _DataTransformer = __webpack_require__(1);

var _DataTransformer2 = _interopRequireDefault(_DataTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL_RULE_PATH = '/vuelos/resultados_ajax';
var URL_API_COMBINATIONS = '*://*/apitransport/combinations';

var storage = chrome.storage.local;

chrome.runtime.onInstalled.addListener(function () {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: { urlContains: URL_RULE_PATH }
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
  if (details.type === "xmlhttprequest") {
    var formData = details.requestBody.formData;
    var url = details.url + '?_ce=true';

    // storage.set({'results': {}});

    if (formData) {
      fetch(url, {
        method: details.method,
        body: generateFormData(formData)
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        data = new _DataTransformer2.default().transform(data);
        storage.set({ 'results': data }, function () {
          sendMessage({ type: 'NEW_RESULTS' });
        });
      });
    }
  }
}, {
  urls: [URL_API_COMBINATIONS],
  types: ["xmlhttprequest"]
}, ["requestBody"]);

chrome.commands.onCommand.addListener(function (command) {
  sendMessage({
    type: 'COMMAND',
    payload: command
  });
});

function generateFormData(data) {
  var formData = new FormData();

  Object.keys(data).forEach(function (key) {
    formData.append(key, data[key][0]);
  });

  return formData;
}

function sendMessage(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var lastTabId = tabs[0].id;
    if (lastTabId) {
      chrome.tabs.sendMessage(lastTabId, message);
    }
  });
}

/***/ }),
/* 1 */
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
                    type: combination.type,
                    plating_carrier: transport.plating_carrier,
                    price_lines: _package.price_lines
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
                price_lines: transport.price_lines
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

exports.default = DataTransformer;

/***/ })
/******/ ]);