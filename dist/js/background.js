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


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var TRANSPORT_TYPE = 'TRANSPORT';
var URL_RULE_PATH = '/vuelos/resultados_ajax';

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
        data = processResultsData(data);
        storage.set({ 'results': data }, function () {
          sendMessage({ type: 'NEW_RESULTS' });
        });
      });
    }
  }
}, {
  urls: ["*://*/apitransport/combinations"],
  types: ["xmlhttprequest"]
}, ["requestBody"]);

chrome.commands.onCommand.addListener(function (command) {
  sendMessage({
    type: 'COMMAND',
    payload: command
  });
});

function processResultsData(data) {
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
              prev[transport.id] = {
                provider: transport.provider,
                id: transport.id,
                type: combination.type,
                plating_carrier: transport.plating_carrier
              };
            });
          });
        });

        return prev;
      }

      Object.keys(combination[type]).forEach(function (key) {
        combination[type][key].forEach(function (transport) {
          prev[transport.id] = {
            provider: transport.provider,
            id: transport.id,
            type: combination.type,
            plating_carrier: transport.plating_carrier
          };
        });
      });

      return prev;
    }, {});
  }(data.data.combinations);

  return _extends({}, data, { flightResults: flightResults });
}

function generateFormData(data) {
  var formData = new FormData();
  var keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    formData.append(keys[i], data[keys[i]][0]);
  }

  return formData;
}

function sendMessage(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var lastTabId = tabs[0].id;
    chrome.tabs.sendMessage(lastTabId, message);
  });
}

/***/ })
/******/ ]);