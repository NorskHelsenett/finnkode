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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/master.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/master.js":
/*!**************************!*\
  !*** ./src/js/master.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./master/debounce */ \"./src/js/master/debounce.js\");\r\n__webpack_require__(/*! ./master/layoutQ */ \"./src/js/master/layoutQ.js\");\r\n__webpack_require__(/*! ./master/plugins */ \"./src/js/master/plugins.js\");\r\n\r\n//require('./master/unhideMenu');\r\n__webpack_require__(/*! ./master/expandableBlocks */ \"./src/js/master/expandableBlocks.js\");\r\n__webpack_require__(/*! ./master/responsiveExpandableBlocks */ \"./src/js/master/responsiveExpandableBlocks.js\");\r\n__webpack_require__(/*! ./master/textSizeExpander */ \"./src/js/master/textSizeExpander.js\");\r\n__webpack_require__(/*! ./master/main */ \"./src/js/master/main.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hc3Rlci5qcz8xM2YyIl0sInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJy4vbWFzdGVyL2RlYm91bmNlJyk7XHJcbnJlcXVpcmUoJy4vbWFzdGVyL2xheW91dFEnKTtcclxucmVxdWlyZSgnLi9tYXN0ZXIvcGx1Z2lucycpO1xyXG5cclxuLy9yZXF1aXJlKCcuL21hc3Rlci91bmhpZGVNZW51Jyk7XHJcbnJlcXVpcmUoJy4vbWFzdGVyL2V4cGFuZGFibGVCbG9ja3MnKTtcclxucmVxdWlyZSgnLi9tYXN0ZXIvcmVzcG9uc2l2ZUV4cGFuZGFibGVCbG9ja3MnKTtcclxucmVxdWlyZSgnLi9tYXN0ZXIvdGV4dFNpemVFeHBhbmRlcicpO1xyXG5yZXF1aXJlKCcuL21hc3Rlci9tYWluJyk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/master.js\n");

/***/ }),

/***/ "./src/js/master/debounce.js":
/*!***********************************!*\
  !*** ./src/js/master/debounce.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Handles variation in browser resize behavior\r\n\r\nfunction debounce(fn, interval) {\r\n    var timeout = null;\r\n    return function () {\r\n        var args = arguments,\r\n            context = this;\r\n        clearTimeout(timeout);\r\n        timeout = setTimeout(function () {\r\n            fn.apply(context, args);\r\n        }, interval);\r\n    };\r\n}\r\n\r\nwindow.debounce = debounce;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyL2RlYm91bmNlLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hc3Rlci9kZWJvdW5jZS5qcz9kYjQ5Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhhbmRsZXMgdmFyaWF0aW9uIGluIGJyb3dzZXIgcmVzaXplIGJlaGF2aW9yXHJcblxyXG5mdW5jdGlvbiBkZWJvdW5jZShmbiwgaW50ZXJ2YWwpIHtcclxuICAgIHZhciB0aW1lb3V0ID0gbnVsbDtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMsXHJcbiAgICAgICAgICAgIGNvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZuLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIH0sIGludGVydmFsKTtcclxuICAgIH07XHJcbn1cclxuXHJcbndpbmRvdy5kZWJvdW5jZSA9IGRlYm91bmNlOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/master/debounce.js\n");

/***/ }),

/***/ "./src/js/master/expandableBlocks.js":
/*!*******************************************!*\
  !*** ./src/js/master/expandableBlocks.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Adds collapsing/expanding functionality to non-responsive expandable blocks.\r\n\r\nfunction expandableBlocks() {\r\n    var expandableBlocks = $('.js-expand').getExpandableBlocks();\r\n    expandableBlocks.addExpandability();\r\n}\r\n\r\nwindow.expandableBlocks = expandableBlocks;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyL2V4cGFuZGFibGVCbG9ja3MuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFzdGVyL2V4cGFuZGFibGVCbG9ja3MuanM/YmM5OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBZGRzIGNvbGxhcHNpbmcvZXhwYW5kaW5nIGZ1bmN0aW9uYWxpdHkgdG8gbm9uLXJlc3BvbnNpdmUgZXhwYW5kYWJsZSBibG9ja3MuXHJcblxyXG5mdW5jdGlvbiBleHBhbmRhYmxlQmxvY2tzKCkge1xyXG4gICAgdmFyIGV4cGFuZGFibGVCbG9ja3MgPSAkKCcuanMtZXhwYW5kJykuZ2V0RXhwYW5kYWJsZUJsb2NrcygpO1xyXG4gICAgZXhwYW5kYWJsZUJsb2Nrcy5hZGRFeHBhbmRhYmlsaXR5KCk7XHJcbn1cclxuXHJcbndpbmRvdy5leHBhbmRhYmxlQmxvY2tzID0gZXhwYW5kYWJsZUJsb2NrczsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/master/expandableBlocks.js\n");

/***/ }),

/***/ "./src/js/master/layoutQ.js":
/*!**********************************!*\
  !*** ./src/js/master/layoutQ.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Creates a queue to give info about whether the layout has changed\r\n// and which layout we're in.\r\n\r\nvar layoutQ = makeLayoutQ();\r\n\r\nfunction makeLayoutQ() {\r\n    // Initializing the queue (on page load). The value 0\r\n    // indicates first page load.\r\n    // \"true\" is just a default value.\r\n    var Q = { number: [0, 0], changed: true };\r\n\r\n    return function() {\r\n        Q.changed = false;\r\n\r\n        try {\r\n            // Get the layout (the title z-index set in a\r\n            // CSS media query.) To check the layout, call the function you get by calling makeLayout\r\n            var layout = parseInt($('title').css('z-index'));\r\n        } catch (e) {\r\n            console.log(e);\r\n        }\r\n\r\n        // If the previous layout is not equal to the new layout,\r\n        // the layout has changed.  Add the new layout to the queue.\r\n        if (Q.number[0] !== layout) {\r\n            Q.number.unshift(layout);\r\n        }\r\n\r\n        // If the layout queue is longer than two, that means\r\n        // another layout has been added to the queue, therefore\r\n        // the layout has changed. We hack off the oldest layout\r\n        // in the queue, since we only want to know the previous and\r\n        // the current layout.\r\n        if (Q.number.length > 2) {\r\n            Q.changed = true;\r\n            Q.number.pop();\r\n        }\r\n\r\n        if (Q.changed) {\r\n            $(document).trigger('layoutchange');\r\n        }\r\n\r\n        if (Q.number[0] === 1) {\r\n            $(document).trigger('conditionalresize');\r\n        }\r\n\r\n        return Q;\r\n    };\r\n}\r\n\r\nwindow.layoutQ = layoutQ;\r\nwindow.makeLayoutQ = makeLayoutQ;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyL2xheW91dFEuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFzdGVyL2xheW91dFEuanM/MDg1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDcmVhdGVzIGEgcXVldWUgdG8gZ2l2ZSBpbmZvIGFib3V0IHdoZXRoZXIgdGhlIGxheW91dCBoYXMgY2hhbmdlZFxyXG4vLyBhbmQgd2hpY2ggbGF5b3V0IHdlJ3JlIGluLlxyXG5cclxudmFyIGxheW91dFEgPSBtYWtlTGF5b3V0USgpO1xyXG5cclxuZnVuY3Rpb24gbWFrZUxheW91dFEoKSB7XHJcbiAgICAvLyBJbml0aWFsaXppbmcgdGhlIHF1ZXVlIChvbiBwYWdlIGxvYWQpLiBUaGUgdmFsdWUgMFxyXG4gICAgLy8gaW5kaWNhdGVzIGZpcnN0IHBhZ2UgbG9hZC5cclxuICAgIC8vIFwidHJ1ZVwiIGlzIGp1c3QgYSBkZWZhdWx0IHZhbHVlLlxyXG4gICAgdmFyIFEgPSB7IG51bWJlcjogWzAsIDBdLCBjaGFuZ2VkOiB0cnVlIH07XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFEuY2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIGxheW91dCAodGhlIHRpdGxlIHotaW5kZXggc2V0IGluIGFcclxuICAgICAgICAgICAgLy8gQ1NTIG1lZGlhIHF1ZXJ5LikgVG8gY2hlY2sgdGhlIGxheW91dCwgY2FsbCB0aGUgZnVuY3Rpb24geW91IGdldCBieSBjYWxsaW5nIG1ha2VMYXlvdXRcclxuICAgICAgICAgICAgdmFyIGxheW91dCA9IHBhcnNlSW50KCQoJ3RpdGxlJykuY3NzKCd6LWluZGV4JykpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgcHJldmlvdXMgbGF5b3V0IGlzIG5vdCBlcXVhbCB0byB0aGUgbmV3IGxheW91dCxcclxuICAgICAgICAvLyB0aGUgbGF5b3V0IGhhcyBjaGFuZ2VkLiAgQWRkIHRoZSBuZXcgbGF5b3V0IHRvIHRoZSBxdWV1ZS5cclxuICAgICAgICBpZiAoUS5udW1iZXJbMF0gIT09IGxheW91dCkge1xyXG4gICAgICAgICAgICBRLm51bWJlci51bnNoaWZ0KGxheW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiB0aGUgbGF5b3V0IHF1ZXVlIGlzIGxvbmdlciB0aGFuIHR3bywgdGhhdCBtZWFuc1xyXG4gICAgICAgIC8vIGFub3RoZXIgbGF5b3V0IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBxdWV1ZSwgdGhlcmVmb3JlXHJcbiAgICAgICAgLy8gdGhlIGxheW91dCBoYXMgY2hhbmdlZC4gV2UgaGFjayBvZmYgdGhlIG9sZGVzdCBsYXlvdXRcclxuICAgICAgICAvLyBpbiB0aGUgcXVldWUsIHNpbmNlIHdlIG9ubHkgd2FudCB0byBrbm93IHRoZSBwcmV2aW91cyBhbmRcclxuICAgICAgICAvLyB0aGUgY3VycmVudCBsYXlvdXQuXHJcbiAgICAgICAgaWYgKFEubnVtYmVyLmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgUS5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgUS5udW1iZXIucG9wKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoUS5jaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2xheW91dGNoYW5nZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKFEubnVtYmVyWzBdID09PSAxKSB7XHJcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2NvbmRpdGlvbmFscmVzaXplJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gUTtcclxuICAgIH07XHJcbn1cclxuXHJcbndpbmRvdy5sYXlvdXRRID0gbGF5b3V0UTtcclxud2luZG93Lm1ha2VMYXlvdXRRID0gbWFrZUxheW91dFE7XHJcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/master/layoutQ.js\n");

/***/ }),

/***/ "./src/js/master/main.js":
/*!*******************************!*\
  !*** ./src/js/master/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("﻿//console.log(\"start - main.js\");\r\n\r\n// \"ready\" triggers as soon as the dom is in place.  Use this for things\r\n// that are not affected by a change in layout or window size.\r\n$(window).on(\"ready\", function () {\r\n    //console.log('ready - main.js');\r\n    layoutQ();\r\n});\r\n\r\n\r\n// \"load\" triggers when all the content on the page has finished loading.\r\n// Use this for things that need to have their content fully loaded in\r\n// order to work correctly, e.g. stuff affected by height.\r\n$(window).on(\"load\", function () {\r\n    //console.log('load - master/master.js');\r\n    //unhideMenu();\r\n    responsiveExpandableBlocks();\r\n    expandableBlocks();\r\n    textSizeExpander();\r\n});\r\n\r\n\r\n// \"layoutchange\" triggers only when the layout changes, as opposed to\r\n// triggering on every resize.  Since the layout also changes on document\r\n// ready--we're going from no layout to one layout--you don't have to call\r\n// the function on document ready when you call it here.\r\n$(window).on(\"layoutchange\", function () {\r\n    //console.log(\"layoutchange - master/master.js\");\r\n    responsiveExpandableBlocks();\r\n});\r\n\r\n// \"conditionalresize\" does stuff does stuff on debounced resize when the layout is 1-col.\r\n$(window).on(\r\n    'conditionalresize',\r\n    debounce(function () {\r\n        //console.log(\"conditionalresize - master/master.js\");\r\n    }, 25)\r\n);\r\n\r\n// \"resize orientationchange\" triggers every time the browser window resizes\r\n// or the device's orientation changes. You almost certainly want to put your\r\n// function call in \"layoutchange\" or \"conditionalresize\" and not here.\r\n$(window).on(\r\n    \"resize orientationchange\",\r\n    debounce(function () {\r\n        //console.log(\"resize orientationchange - master/master.js\");\r\n        layoutQ();\r\n    }, 25)\r\n);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyL21haW4uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFzdGVyL21haW4uanM/NTNiOCJdLCJzb3VyY2VzQ29udGVudCI6WyLvu78vL2NvbnNvbGUubG9nKFwic3RhcnQgLSBtYWluLmpzXCIpO1xyXG5cclxuLy8gXCJyZWFkeVwiIHRyaWdnZXJzIGFzIHNvb24gYXMgdGhlIGRvbSBpcyBpbiBwbGFjZS4gIFVzZSB0aGlzIGZvciB0aGluZ3NcclxuLy8gdGhhdCBhcmUgbm90IGFmZmVjdGVkIGJ5IGEgY2hhbmdlIGluIGxheW91dCBvciB3aW5kb3cgc2l6ZS5cclxuJCh3aW5kb3cpLm9uKFwicmVhZHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZygncmVhZHkgLSBtYWluLmpzJyk7XHJcbiAgICBsYXlvdXRRKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIFwibG9hZFwiIHRyaWdnZXJzIHdoZW4gYWxsIHRoZSBjb250ZW50IG9uIHRoZSBwYWdlIGhhcyBmaW5pc2hlZCBsb2FkaW5nLlxyXG4vLyBVc2UgdGhpcyBmb3IgdGhpbmdzIHRoYXQgbmVlZCB0byBoYXZlIHRoZWlyIGNvbnRlbnQgZnVsbHkgbG9hZGVkIGluXHJcbi8vIG9yZGVyIHRvIHdvcmsgY29ycmVjdGx5LCBlLmcuIHN0dWZmIGFmZmVjdGVkIGJ5IGhlaWdodC5cclxuJCh3aW5kb3cpLm9uKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdsb2FkIC0gbWFzdGVyL21hc3Rlci5qcycpO1xyXG4gICAgLy91bmhpZGVNZW51KCk7XHJcbiAgICByZXNwb25zaXZlRXhwYW5kYWJsZUJsb2NrcygpO1xyXG4gICAgZXhwYW5kYWJsZUJsb2NrcygpO1xyXG4gICAgdGV4dFNpemVFeHBhbmRlcigpO1xyXG59KTtcclxuXHJcblxyXG4vLyBcImxheW91dGNoYW5nZVwiIHRyaWdnZXJzIG9ubHkgd2hlbiB0aGUgbGF5b3V0IGNoYW5nZXMsIGFzIG9wcG9zZWQgdG9cclxuLy8gdHJpZ2dlcmluZyBvbiBldmVyeSByZXNpemUuICBTaW5jZSB0aGUgbGF5b3V0IGFsc28gY2hhbmdlcyBvbiBkb2N1bWVudFxyXG4vLyByZWFkeS0td2UncmUgZ29pbmcgZnJvbSBubyBsYXlvdXQgdG8gb25lIGxheW91dC0teW91IGRvbid0IGhhdmUgdG8gY2FsbFxyXG4vLyB0aGUgZnVuY3Rpb24gb24gZG9jdW1lbnQgcmVhZHkgd2hlbiB5b3UgY2FsbCBpdCBoZXJlLlxyXG4kKHdpbmRvdykub24oXCJsYXlvdXRjaGFuZ2VcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhcImxheW91dGNoYW5nZSAtIG1hc3Rlci9tYXN0ZXIuanNcIik7XHJcbiAgICByZXNwb25zaXZlRXhwYW5kYWJsZUJsb2NrcygpO1xyXG59KTtcclxuXHJcbi8vIFwiY29uZGl0aW9uYWxyZXNpemVcIiBkb2VzIHN0dWZmIGRvZXMgc3R1ZmYgb24gZGVib3VuY2VkIHJlc2l6ZSB3aGVuIHRoZSBsYXlvdXQgaXMgMS1jb2wuXHJcbiQod2luZG93KS5vbihcclxuICAgICdjb25kaXRpb25hbHJlc2l6ZScsXHJcbiAgICBkZWJvdW5jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImNvbmRpdGlvbmFscmVzaXplIC0gbWFzdGVyL21hc3Rlci5qc1wiKTtcclxuICAgIH0sIDI1KVxyXG4pO1xyXG5cclxuLy8gXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2VcIiB0cmlnZ2VycyBldmVyeSB0aW1lIHRoZSBicm93c2VyIHdpbmRvdyByZXNpemVzXHJcbi8vIG9yIHRoZSBkZXZpY2UncyBvcmllbnRhdGlvbiBjaGFuZ2VzLiBZb3UgYWxtb3N0IGNlcnRhaW5seSB3YW50IHRvIHB1dCB5b3VyXHJcbi8vIGZ1bmN0aW9uIGNhbGwgaW4gXCJsYXlvdXRjaGFuZ2VcIiBvciBcImNvbmRpdGlvbmFscmVzaXplXCIgYW5kIG5vdCBoZXJlLlxyXG4kKHdpbmRvdykub24oXHJcbiAgICBcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZVwiLFxyXG4gICAgZGVib3VuY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgLSBtYXN0ZXIvbWFzdGVyLmpzXCIpO1xyXG4gICAgICAgIGxheW91dFEoKTtcclxuICAgIH0sIDI1KVxyXG4pOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/master/main.js\n");

/***/ }),

/***/ "./src/js/master/plugins.js":
/*!**********************************!*\
  !*** ./src/js/master/plugins.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function ($) {\r\n    $.fn.getExpandableBlocks = function () {\r\n        var expandBlocks = [];\r\n\r\n        $(this).each(function () {\r\n            var expand = $(this),\r\n                expander,\r\n                expandable,\r\n                expandBlock;\r\n\r\n            if (expand.hasClass(\"js-responsive-expand\")) {\r\n                expander = expand.find($(\".js-responsive-expander\")).first();\r\n                expandable = expand\r\n                    .find($(\".js-responsive-expandable\"))\r\n                    .first();\r\n            } else if (expand.hasClass(\"js-expand\")) {\r\n                expander = expand.find($(\".js-expander\")).first();\r\n                expandable = expand.find($(\".js-expandable\")).first();\r\n            } else if (expand.hasClass(\"js-nav-tree-expand\")) {\r\n                expander = expand.find($(\".js-nav-tree-expander\")).first();\r\n                expandable = expand.find($(\".js-nav-tree-expandable\")).first();\r\n            }\r\n\r\n            function ExpandBlock(expand, expander, expandable) {\r\n                this.expand = expand[0];\r\n                this.expander = expander[0];\r\n                this.expandable = expandable[0];\r\n            }\r\n\r\n            expandBlock = new ExpandBlock(expand, expander, expandable);\r\n\r\n            expandBlocks.push(expandBlock);\r\n        });\r\n\r\n        return $(expandBlocks);\r\n    };\r\n\r\n    $.fn.addExpandability = function () {\r\n        $(this).each(function () {\r\n            $(this).removeExpandability();\r\n\r\n            var expand = $(this.expand),\r\n                expander = $(this.expander),\r\n                expandable = $(this.expandable);\r\n\r\n            // Clicking or focusing on an expander or its children adds a\r\n            // class that makes it look like the whole block is focused\r\n            expand.on(\"focusout.addExpandability\", function () {\r\n                $(\".focused\").removeClass(\"focused\");\r\n            });\r\n\r\n            expand.on(\"focusin.addExpandability\", function () {\r\n                expand.addClass(\"focused\");\r\n            });\r\n\r\n            // Initializes the block\r\n            expand.addClass(\"initial expand collapsed\");\r\n            expander.addClass(\"expander\");\r\n            expander.attr(\"aria-expanded\", \"false\");\r\n            expandable.addClass(\"expandable\");\r\n\r\n            // Make non-button expanders work with enter key\r\n            if (!expander.is(\"button\")) {\r\n                expander.attr(\"role\", \"button\");\r\n                expander.attr(\"tabindex\", \"0\");\r\n                expander.on(\"keypress.addExpandability\", function (e) {\r\n                    var pressedKey = e.which;\r\n                    if (pressedKey === 13 || pressedKey === 32) {\r\n                        e.preventDefault();\r\n                        $(this).click();\r\n                    }\r\n                });\r\n            }\r\n\r\n            expander.on(\"click.addExpandability\", function (e) {\r\n                e.preventDefault();\r\n                if (expander.attr(\"aria-expanded\") === \"false\") {\r\n                    // Expand the block\r\n                    expander.attr(\"aria-expanded\", \"true\");\r\n                    expand.addClass(\"expanded\").removeClass(\"collapsed\");\r\n\r\n                } else if (expander.attr(\"aria-expanded\") === \"true\") {\r\n                    // Collapse the block\r\n                    expander.attr(\"aria-expanded\", \"false\");\r\n                    expand.addClass(\"collapsed\").removeClass(\"expanded\");\r\n                }\r\n\r\n                expand.removeClass(\"initial\");\r\n            });\r\n        });\r\n\r\n        return $(this);\r\n    };\r\n\r\n    $.fn.removeExpandability = function () {\r\n        $(this).each(function () {\r\n            var expand = $(this.expand),\r\n                expander = $(this.expander),\r\n                expandable = $(this.expandable);\r\n\r\n            expander.off(\".addExpandability\");\r\n            expand.off(\".addExpandability\");\r\n            expandable.off(\".addExpandability\");\r\n\r\n            expand.removeClass(\"initial expand expanded collapsed focused\");\r\n            expander.removeAttr(\"aria-expanded tabindex role\");\r\n            expander.css(\"margin-bottom\", \"\");\r\n            expander.removeClass(\"expander\");\r\n            expandable.removeClass(\"expandable\");\r\n        });\r\n\r\n        return $(this);\r\n    };\r\n\r\n    $.fn.focusWithoutScrolling = function(){\r\n        var x = window.scrollX, y = window.scrollY;\r\n        this.focus();\r\n        window.scrollTo(x, y);\r\n        return this;\r\n    };\r\n\r\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyL3BsdWdpbnMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFzdGVyL3BsdWdpbnMuanM/ZjNkYyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQpIHtcclxuICAgICQuZm4uZ2V0RXhwYW5kYWJsZUJsb2NrcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZXhwYW5kQmxvY2tzID0gW107XHJcblxyXG4gICAgICAgICQodGhpcykuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBleHBhbmQgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kZXIsXHJcbiAgICAgICAgICAgICAgICBleHBhbmRhYmxlLFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kQmxvY2s7XHJcblxyXG4gICAgICAgICAgICBpZiAoZXhwYW5kLmhhc0NsYXNzKFwianMtcmVzcG9uc2l2ZS1leHBhbmRcIikpIHtcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVyID0gZXhwYW5kLmZpbmQoJChcIi5qcy1yZXNwb25zaXZlLWV4cGFuZGVyXCIpKS5maXJzdCgpO1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kYWJsZSA9IGV4cGFuZFxyXG4gICAgICAgICAgICAgICAgICAgIC5maW5kKCQoXCIuanMtcmVzcG9uc2l2ZS1leHBhbmRhYmxlXCIpKVxyXG4gICAgICAgICAgICAgICAgICAgIC5maXJzdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cGFuZC5oYXNDbGFzcyhcImpzLWV4cGFuZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kZXIgPSBleHBhbmQuZmluZCgkKFwiLmpzLWV4cGFuZGVyXCIpKS5maXJzdCgpO1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kYWJsZSA9IGV4cGFuZC5maW5kKCQoXCIuanMtZXhwYW5kYWJsZVwiKSkuZmlyc3QoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChleHBhbmQuaGFzQ2xhc3MoXCJqcy1uYXYtdHJlZS1leHBhbmRcIikpIHtcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVyID0gZXhwYW5kLmZpbmQoJChcIi5qcy1uYXYtdHJlZS1leHBhbmRlclwiKSkuZmlyc3QoKTtcclxuICAgICAgICAgICAgICAgIGV4cGFuZGFibGUgPSBleHBhbmQuZmluZCgkKFwiLmpzLW5hdi10cmVlLWV4cGFuZGFibGVcIikpLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIEV4cGFuZEJsb2NrKGV4cGFuZCwgZXhwYW5kZXIsIGV4cGFuZGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kID0gZXhwYW5kWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRlciA9IGV4cGFuZGVyWzBdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRhYmxlID0gZXhwYW5kYWJsZVswXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXhwYW5kQmxvY2sgPSBuZXcgRXhwYW5kQmxvY2soZXhwYW5kLCBleHBhbmRlciwgZXhwYW5kYWJsZSk7XHJcblxyXG4gICAgICAgICAgICBleHBhbmRCbG9ja3MucHVzaChleHBhbmRCbG9jayk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkKGV4cGFuZEJsb2Nrcyk7XHJcbiAgICB9O1xyXG5cclxuICAgICQuZm4uYWRkRXhwYW5kYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAkKHRoaXMpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUV4cGFuZGFiaWxpdHkoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBleHBhbmQgPSAkKHRoaXMuZXhwYW5kKSxcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVyID0gJCh0aGlzLmV4cGFuZGVyKSxcclxuICAgICAgICAgICAgICAgIGV4cGFuZGFibGUgPSAkKHRoaXMuZXhwYW5kYWJsZSk7XHJcblxyXG4gICAgICAgICAgICAvLyBDbGlja2luZyBvciBmb2N1c2luZyBvbiBhbiBleHBhbmRlciBvciBpdHMgY2hpbGRyZW4gYWRkcyBhXHJcbiAgICAgICAgICAgIC8vIGNsYXNzIHRoYXQgbWFrZXMgaXQgbG9vayBsaWtlIHRoZSB3aG9sZSBibG9jayBpcyBmb2N1c2VkXHJcbiAgICAgICAgICAgIGV4cGFuZC5vbihcImZvY3Vzb3V0LmFkZEV4cGFuZGFiaWxpdHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgJChcIi5mb2N1c2VkXCIpLnJlbW92ZUNsYXNzKFwiZm9jdXNlZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBleHBhbmQub24oXCJmb2N1c2luLmFkZEV4cGFuZGFiaWxpdHlcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZXhwYW5kLmFkZENsYXNzKFwiZm9jdXNlZFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplcyB0aGUgYmxvY2tcclxuICAgICAgICAgICAgZXhwYW5kLmFkZENsYXNzKFwiaW5pdGlhbCBleHBhbmQgY29sbGFwc2VkXCIpO1xyXG4gICAgICAgICAgICBleHBhbmRlci5hZGRDbGFzcyhcImV4cGFuZGVyXCIpO1xyXG4gICAgICAgICAgICBleHBhbmRlci5hdHRyKFwiYXJpYS1leHBhbmRlZFwiLCBcImZhbHNlXCIpO1xyXG4gICAgICAgICAgICBleHBhbmRhYmxlLmFkZENsYXNzKFwiZXhwYW5kYWJsZVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIE1ha2Ugbm9uLWJ1dHRvbiBleHBhbmRlcnMgd29yayB3aXRoIGVudGVyIGtleVxyXG4gICAgICAgICAgICBpZiAoIWV4cGFuZGVyLmlzKFwiYnV0dG9uXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlci5hdHRyKFwicm9sZVwiLCBcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGV4cGFuZGVyLmF0dHIoXCJ0YWJpbmRleFwiLCBcIjBcIik7XHJcbiAgICAgICAgICAgICAgICBleHBhbmRlci5vbihcImtleXByZXNzLmFkZEV4cGFuZGFiaWxpdHlcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJlc3NlZEtleSA9IGUud2hpY2g7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByZXNzZWRLZXkgPT09IDEzIHx8IHByZXNzZWRLZXkgPT09IDMyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBleHBhbmRlci5vbihcImNsaWNrLmFkZEV4cGFuZGFiaWxpdHlcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGlmIChleHBhbmRlci5hdHRyKFwiYXJpYS1leHBhbmRlZFwiKSA9PT0gXCJmYWxzZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXhwYW5kIHRoZSBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVyLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwidHJ1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBleHBhbmQuYWRkQ2xhc3MoXCJleHBhbmRlZFwiKS5yZW1vdmVDbGFzcyhcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV4cGFuZGVyLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIpID09PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIENvbGxhcHNlIHRoZSBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZGVyLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsIFwiZmFsc2VcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZXhwYW5kLmFkZENsYXNzKFwiY29sbGFwc2VkXCIpLnJlbW92ZUNsYXNzKFwiZXhwYW5kZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZXhwYW5kLnJlbW92ZUNsYXNzKFwiaW5pdGlhbFwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLnJlbW92ZUV4cGFuZGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGV4cGFuZCA9ICQodGhpcy5leHBhbmQpLFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kZXIgPSAkKHRoaXMuZXhwYW5kZXIpLFxyXG4gICAgICAgICAgICAgICAgZXhwYW5kYWJsZSA9ICQodGhpcy5leHBhbmRhYmxlKTtcclxuXHJcbiAgICAgICAgICAgIGV4cGFuZGVyLm9mZihcIi5hZGRFeHBhbmRhYmlsaXR5XCIpO1xyXG4gICAgICAgICAgICBleHBhbmQub2ZmKFwiLmFkZEV4cGFuZGFiaWxpdHlcIik7XHJcbiAgICAgICAgICAgIGV4cGFuZGFibGUub2ZmKFwiLmFkZEV4cGFuZGFiaWxpdHlcIik7XHJcblxyXG4gICAgICAgICAgICBleHBhbmQucmVtb3ZlQ2xhc3MoXCJpbml0aWFsIGV4cGFuZCBleHBhbmRlZCBjb2xsYXBzZWQgZm9jdXNlZFwiKTtcclxuICAgICAgICAgICAgZXhwYW5kZXIucmVtb3ZlQXR0cihcImFyaWEtZXhwYW5kZWQgdGFiaW5kZXggcm9sZVwiKTtcclxuICAgICAgICAgICAgZXhwYW5kZXIuY3NzKFwibWFyZ2luLWJvdHRvbVwiLCBcIlwiKTtcclxuICAgICAgICAgICAgZXhwYW5kZXIucmVtb3ZlQ2xhc3MoXCJleHBhbmRlclwiKTtcclxuICAgICAgICAgICAgZXhwYW5kYWJsZS5yZW1vdmVDbGFzcyhcImV4cGFuZGFibGVcIik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiAkKHRoaXMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLmZvY3VzV2l0aG91dFNjcm9sbGluZyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWCwgeSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIHRoaXMuZm9jdXMoKTtcclxuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG5cclxufSkoalF1ZXJ5KTsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/master/plugins.js\n");

/***/ }),

/***/ "./src/js/master/responsiveExpandableBlocks.js":
/*!*****************************************************!*\
  !*** ./src/js/master/responsiveExpandableBlocks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Add collapsing/expanding functionality to responsive expanding blocks in 1-col.\r\n\r\nfunction responsiveExpandableBlocks() {\r\n\r\n    var responsiveExpandableBlocks = $(\".js-responsive-expand\").getExpandableBlocks();\r\n\r\n    if (layoutQ().number[0] !== 1) {\r\n        responsiveExpandableBlocks.removeExpandability();\r\n    } else {\r\n        responsiveExpandableBlocks.addExpandability();\r\n    }\r\n}\r\n\r\nwindow.responsiveExpandableBlocks = responsiveExpandableBlocks;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyL3Jlc3BvbnNpdmVFeHBhbmRhYmxlQmxvY2tzLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL21hc3Rlci9yZXNwb25zaXZlRXhwYW5kYWJsZUJsb2Nrcy5qcz81MDAxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFkZCBjb2xsYXBzaW5nL2V4cGFuZGluZyBmdW5jdGlvbmFsaXR5IHRvIHJlc3BvbnNpdmUgZXhwYW5kaW5nIGJsb2NrcyBpbiAxLWNvbC5cclxuXHJcbmZ1bmN0aW9uIHJlc3BvbnNpdmVFeHBhbmRhYmxlQmxvY2tzKCkge1xyXG5cclxuICAgIHZhciByZXNwb25zaXZlRXhwYW5kYWJsZUJsb2NrcyA9ICQoXCIuanMtcmVzcG9uc2l2ZS1leHBhbmRcIikuZ2V0RXhwYW5kYWJsZUJsb2NrcygpO1xyXG5cclxuICAgIGlmIChsYXlvdXRRKCkubnVtYmVyWzBdICE9PSAxKSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZUV4cGFuZGFibGVCbG9ja3MucmVtb3ZlRXhwYW5kYWJpbGl0eSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXNwb25zaXZlRXhwYW5kYWJsZUJsb2Nrcy5hZGRFeHBhbmRhYmlsaXR5KCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbndpbmRvdy5yZXNwb25zaXZlRXhwYW5kYWJsZUJsb2NrcyA9IHJlc3BvbnNpdmVFeHBhbmRhYmxlQmxvY2tzOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/master/responsiveExpandableBlocks.js\n");

/***/ }),

/***/ "./src/js/master/textSizeExpander.js":
/*!*******************************************!*\
  !*** ./src/js/master/textSizeExpander.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("﻿// Used to fix issues with expand/collapse on text size button when using keyboard\r\nfunction textSizeExpander() {\r\n    let isActive = false;\r\n    $('.text-size button').on('click', function() {\r\n        isActive = !isActive;\r\n    });\r\n    $('.text-size button').focusout(function(e) {\r\n        if(isActive) {\r\n            $(this).trigger('click');\r\n        }\r\n    });\r\n}\r\n\r\nwindow.textSizeExpander = textSizeExpander;\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFzdGVyL3RleHRTaXplRXhwYW5kZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFzdGVyL3RleHRTaXplRXhwYW5kZXIuanM/ZTM2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyLvu78vLyBVc2VkIHRvIGZpeCBpc3N1ZXMgd2l0aCBleHBhbmQvY29sbGFwc2Ugb24gdGV4dCBzaXplIGJ1dHRvbiB3aGVuIHVzaW5nIGtleWJvYXJkXHJcbmZ1bmN0aW9uIHRleHRTaXplRXhwYW5kZXIoKSB7XHJcbiAgICBsZXQgaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICQoJy50ZXh0LXNpemUgYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaXNBY3RpdmUgPSAhaXNBY3RpdmU7XHJcbiAgICB9KTtcclxuICAgICQoJy50ZXh0LXNpemUgYnV0dG9uJykuZm9jdXNvdXQoZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKGlzQWN0aXZlKSB7XHJcbiAgICAgICAgICAgICQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LnRleHRTaXplRXhwYW5kZXIgPSB0ZXh0U2l6ZUV4cGFuZGVyO1xyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/master/textSizeExpander.js\n");

/***/ })

/******/ });