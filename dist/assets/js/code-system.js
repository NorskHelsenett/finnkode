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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/code-system.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/code-system.js":
/*!*******************************!*\
  !*** ./src/js/code-system.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Scripts that are used solely on the code system page

/*
require('./code-system/codeSystemTree');
require('./code-system/codeSystemTreeExpand');
*/
/*
require('./code-system/treeLinks');
require('./code-system/treeItemLinks');
*/

__webpack_require__(/*! ./code-system/codeTabs */ "./src/js/code-system/codeTabs.js");
__webpack_require__(/*! ./code-system/resizableSplitter */ "./src/js/code-system/resizableSplitter.js");
__webpack_require__(/*! ./code-system/stickyCodeSystemTree */ "./src/js/code-system/stickyCodeSystemTree.js");
__webpack_require__(/*! ./code-system/stickyHeader */ "./src/js/code-system/stickyHeader.js");

__webpack_require__(/*! ./code-system/main */ "./src/js/code-system/main.js");

/***/ }),

/***/ "./src/js/code-system/codeTabs.js":
/*!****************************************!*\
  !*** ./src/js/code-system/codeTabs.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// This ensures the correct ARIA-attributes and keyboard nav for the tabs at the bottom of the code cards.
// https://www.deque.com/blog/a11y-support-series-part-1-aria-tab-panel-accessibility/

function codeTabs() {
    var tabgroups = $(".js-tabgroup");

    if (tabgroups.length !== 0) {
        if (layoutQ().number[0] !== 1) {
            tabgroups.makeTabgroups();

        } else {
            tabgroups.resetTabgroups();
        }
    }
}

window.codeTabs = codeTabs;

/***/ }),

/***/ "./src/js/code-system/main.js":
/*!************************************!*\
  !*** ./src/js/code-system/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿//console.log("start - code-system.js");

// "ready" triggers as soon as the dom is in place.  Use this for things
// that are not affected by a change in layout or window size.
$(window).on("ready", function () {
    //console.log('ready - code-system.js');
});


// "load" triggers when all the content on the page has finished loading.
// Use this for things that need to have their content fully loaded in
// order to work correctly, e.g. stuff affected by height.
$(window).on("load", function () {
    //console.log('load - code-system.js');
/*
    codeSystemTree();
*/
    resizableSplitter();
});


// "layoutchange" triggers only when the layout changes, as opposed to
// triggering on every resize.  Since the layout also changes on document
// ready--we're going from no layout to one layout--you don't have to call
// the function on document ready when you call it here.
$(window).on("layoutchange", function () {
    //console.log("layoutchange - code-system.js");
    stickyHeader();
    // codeSystemTreeExpand();
    codeTabs();
    stickyCodeSystemTree();
});

// "conditionalresize" does stuff does stuff on debounced resize when the layout is 1-col.
$(window).on(
    'conditionalresize',
    debounce(function () {
        //console.log("conditionalresize - code-system.js");
    }, 25)
);

// "resize orientationchange" triggers every time the browser window resizes
// or the device's orientation changes. You almost certainly want to put your
// function call in "layoutchange" or "conditionalresize" and not here.
$(window).on(
    "resize orientationchange",
    debounce(function () {
        //console.log("resize orientationchange - code-system.js");
        resizableSplitter();
    }, 25)
);


/***/ }),

/***/ "./src/js/code-system/resizableSplitter.js":
/*!*************************************************!*\
  !*** ./src/js/code-system/resizableSplitter.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function resizableSplitter() {

    var resizablePanel = $(".js-resizable-splitter");

    if (resizablePanel.length !== 0) {
        if (layoutQ().number[0] <= 2) {
            resizablePanel.resizable("destroy");
        } else {
            resizablePanel.resizable({
                handleSelector: ".splitter",
                resizeHeight: false
            });
        }
    }
}

window.resizableSplitter = resizableSplitter;

/***/ }),

/***/ "./src/js/code-system/stickyCodeSystemTree.js":
/*!****************************************************!*\
  !*** ./src/js/code-system/stickyCodeSystemTree.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Sticks the code system tree to the left side
// of the viewport in 3+ col layout

function stickyCodeSystemTree() {

    var tree = $(".js-sticky-tree");

    if (tree.length !== 0) {
        tree.makeStickyCodeSystemTree();
    }
}

window.stickyCodeSystemTree = stickyCodeSystemTree;

/*!============================================================
// Based on
 * jquery.sticky-nav.js
 * Copyright (c) Federico Cargnelutti <fedecarg@gmail.com>
 * http://www.fedecarg.com/
 ============================================================*/

(function ($) {

    $.fn.makeStickyCodeSystemTree = function () {

        // Set jQuery DOM elements
        const $nav = this;
        const $navLinks = $nav.find("a");
        const $sections = $(".js-scrollto");
        const $scrollingPanel = $(".js-current-tree-location-panel");

        const navHeight = $nav.height();
        const scrollTopOffset = $sections.first().height() / 2;

        let currentScrollPosition = 0;
        let offsetNumbers = [0];

        function initialise() {
            $nav.resetStickyCodeSystemTree();

            calculateOffsets();
            bindEvents();
        }

        function bindEvents() {
            $navLinks.on("click.makeStickyCodeSystemTree", onClick);
            $scrollingPanel.on("scroll.makeStickyCodeSystemTree", throttle(onScroll, 20));
        }

        function onClick(e) {
            const targetEl = $(this).attr("href");

            if ($(targetEl).length) {
                selectNavItem(this);

                $(targetEl).fadeOut(0).fadeIn(400);
            }
        }

        function onScroll() {
            // var scrollTop = $scrollingPanel.scrollTop() - navHeight,
            //     closestPosition = findClosestNumber(scrollTop, offsetNumbers);
            //
            // // select navbar item
            // if (closestPosition !== currentScrollPosition) {
            //     selectNavItem(".section-offset-" + closestPosition);
            //     currentScrollPosition = closestPosition;
            // }
            //
            // // fix navbar
            // // if (scrollTop > scrollTopOffset) {
            // //     $nav.addClass("sticky");
            // // } else {
            // //     $nav.removeClass("sticky");
            // // }
        }

        function findClosestNumber(num, arr) {
            return arr.reduce(function (prev, curr) {
                return (Math.abs(curr - num) < Math.abs(prev - num) ? curr : prev);
            });
        }

        function calculateOffsets() {
            $sections.each(function (index) {
                const el = $(this)[0];
                const offsetTop = getOffsetTop(el);

                offsetNumbers.push(offsetTop);
                getNavItem(el).addClass("section-offset-" + offsetTop);
            });
        }

        function getOffsetTop(el) {
            const rect = el.getBoundingClientRect(),
                scrollTop = $scrollingPanel.scrollTop();
            // || document.$scrollingPanel.scrollTop;

            return Math.round(rect.top + scrollTop);
        }

        function getNavItem(el) {
            return $("nav a[href=\"#" + $(el).attr("id") + "\"]");
        }

        function selectNavItem(el) {
            // if (!$nav.hasClass("sticky")) {
            //     $nav.addClass("sticky");
            // }

            $navLinks.removeClass("active");
            $(el).addClass("active");
        }

        function throttle(func, delay) {
            let timer = 0;

            return function () {
                const context = this,
                    args = [].slice.call(arguments);

                clearTimeout(timer);
                timer = setTimeout(function () {
                    func.apply(context, args);
                }, delay);
            };
        }

        initialise();
    };

    $.fn.resetStickyCodeSystemTree = function () {
        const $nav = this;
        const $navLinks = $nav.find("a");
        const $scrollingPanel = $(".js-current-tree-location-panel");

        $navLinks.off(".makeStickyCodeSystemTree");
        $scrollingPanel.off(".makeStickyCodeSystemTree");

        $navLinks.removeClass("active");
        $nav.removeClass("sticky");
    };


}(jQuery))
;

/***/ }),

/***/ "./src/js/code-system/stickyHeader.js":
/*!********************************************!*\
  !*** ./src/js/code-system/stickyHeader.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Sticks the header to the top of the viewport on code system pages

function stickyHeader() {

    var header = $(".js-sticky-header");

    if (header.length > 0) {
        if (layoutQ().number[0] <= 3) {
            header.addClass("sticky");

        } else {
            header.removeClass("sticky");
        }
    }
}

window.stickyHeader = stickyHeader;

/***/ })

/******/ });
//# sourceMappingURL=code-system.js.map