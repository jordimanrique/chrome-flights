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


// import DataTransformer from './DataTransformer';

var URL_RULE_PATH = '/vuelos/resultados_ajax';
// const URL_API_COMBINATIONS = '*://*/apitransport/combinations';
//
// let storage = chrome.storage.local;

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

// chrome.webRequest.onBeforeRequest.addListener(
//   (details) => {
//     if (details.type === "xmlhttprequest") {
//       let formData = details.requestBody.formData;
//       let url = details.url + '?_ce=true';
//
//       if (formData) {
//         fetch(url, {
//           method: details.method,
//           body: generateFormData(formData),
//         }).then((response) => {
//           return response.json();
//         }).then((data) => {
//           data = (new DataTransformer()).transform(data);
//           storage.set({'results': data}, function () {
//             sendMessage({type: 'NEW_RESULTS'});
//           });
//         });
//       }
//     }
//   },
//   {
//     urls: [URL_API_COMBINATIONS],
//     types: ["xmlhttprequest"]
//   },
//   ["requestBody"]
// );

chrome.commands.onCommand.addListener(function (command) {
  sendMessage({
    type: 'COMMAND',
    payload: command
  });
});

// function generateFormData(data) {
//   let formData = new FormData();
//
//   Object.keys(data).forEach((key) => {
//     formData.append(key, data[key][0]);
//   });
//
//   return formData;
// }

function sendMessage(message) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var lastTabId = tabs[0].id;
    if (lastTabId) {
      chrome.tabs.sendMessage(lastTabId, message);
    }
  });
}

/***/ })
/******/ ]);