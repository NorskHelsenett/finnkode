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

__webpack_require__(/*! ./master/debounce */ "./src/js/master/debounce.js");
__webpack_require__(/*! ./master/layoutQ */ "./src/js/master/layoutQ.js");
__webpack_require__(/*! ./master/plugins */ "./src/js/master/plugins.js");

__webpack_require__(/*! ./master/unhideMenu */ "./src/js/master/unhideMenu.js");
__webpack_require__(/*! ./master/expandableBlocks */ "./src/js/master/expandableBlocks.js");
__webpack_require__(/*! ./master/responsiveExpandableBlocks */ "./src/js/master/responsiveExpandableBlocks.js");
__webpack_require__(/*! ./master/textSizeExpander */ "./src/js/master/textSizeExpander.js");
__webpack_require__(/*! ./master/main */ "./src/js/master/main.js");

/***/ }),

/***/ "./src/js/master/debounce.js":
/*!***********************************!*\
  !*** ./src/js/master/debounce.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Handles variation in browser resize behavior

function debounce(fn, interval) {
    var timeout = null;
    return function () {
        var args = arguments,
            context = this;
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            fn.apply(context, args);
        }, interval);
    };
}

window.debounce = debounce;

/***/ }),

/***/ "./src/js/master/expandableBlocks.js":
/*!*******************************************!*\
  !*** ./src/js/master/expandableBlocks.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Adds collapsing/expanding functionality to non-responsive expandable blocks.

function expandableBlocks() {
    var expandableBlocks = $('.js-expand').getExpandableBlocks();
    expandableBlocks.addExpandability();
}

window.expandableBlocks = expandableBlocks;

/***/ }),

/***/ "./src/js/master/layoutQ.js":
/*!**********************************!*\
  !*** ./src/js/master/layoutQ.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Creates a queue to give info about whether the layout has changed
// and which layout we're in.

var layoutQ = makeLayoutQ();

function makeLayoutQ() {
    // Initializing the queue (on page load). The value 0
    // indicates first page load.
    // "true" is just a default value.
    var Q = { number: [0, 0], changed: true };

    return function() {
        Q.changed = false;

        try {
            // Get the layout (the title z-index set in a
            // CSS media query.) To check the layout, call the function you get by calling makeLayout
            var layout = parseInt($('title').css('z-index'));
        } catch (e) {
            console.log(e);
        }

        // If the previous layout is not equal to the new layout,
        // the layout has changed.  Add the new layout to the queue.
        if (Q.number[0] !== layout) {
            Q.number.unshift(layout);
        }

        // If the layout queue is longer than two, that means
        // another layout has been added to the queue, therefore
        // the layout has changed. We hack off the oldest layout
        // in the queue, since we only want to know the previous and
        // the current layout.
        if (Q.number.length > 2) {
            Q.changed = true;
            Q.number.pop();
        }

        if (Q.changed) {
            $(document).trigger('layoutchange');
        }

        if (Q.number[0] === 1) {
            $(document).trigger('conditionalresize');
        }

        return Q;
    };
}

window.layoutQ = layoutQ;
window.makeLayoutQ = makeLayoutQ;


/***/ }),

/***/ "./src/js/master/main.js":
/*!*******************************!*\
  !*** ./src/js/master/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿//console.log("start - main.js");

// "ready" triggers as soon as the dom is in place.  Use this for things
// that are not affected by a change in layout or window size.
$(window).on("ready", function () {
    //console.log('ready - main.js');
    layoutQ();
});


// "load" triggers when all the content on the page has finished loading.
// Use this for things that need to have their content fully loaded in
// order to work correctly, e.g. stuff affected by height.
$(window).on("load", function () {
    //console.log('load - master/master.js');
    unhideMenu();
    responsiveExpandableBlocks();
    expandableBlocks();
    textSizeExpander();
});


// "layoutchange" triggers only when the layout changes, as opposed to
// triggering on every resize.  Since the layout also changes on document
// ready--we're going from no layout to one layout--you don't have to call
// the function on document ready when you call it here.
$(window).on("layoutchange", function () {
    //console.log("layoutchange - master/master.js");
    responsiveExpandableBlocks();
});

// "conditionalresize" does stuff does stuff on debounced resize when the layout is 1-col.
$(window).on(
    'conditionalresize',
    debounce(function () {
        //console.log("conditionalresize - master/master.js");
    }, 25)
);

// "resize orientationchange" triggers every time the browser window resizes
// or the device's orientation changes. You almost certainly want to put your
// function call in "layoutchange" or "conditionalresize" and not here.
$(window).on(
    "resize orientationchange",
    debounce(function () {
        //console.log("resize orientationchange - master/master.js");
        layoutQ();
    }, 25)
);

/***/ }),

/***/ "./src/js/master/plugins.js":
/*!**********************************!*\
  !*** ./src/js/master/plugins.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
    $.fn.getExpandableBlocks = function () {
        var expandBlocks = [];

        $(this).each(function () {
            var expand = $(this),
                expander,
                expandable,
                expandBlock;

            if (expand.hasClass("js-responsive-expand")) {
                expander = expand.find($(".js-responsive-expander")).first();
                expandable = expand
                    .find($(".js-responsive-expandable"))
                    .first();
            } else if (expand.hasClass("js-expand")) {
                expander = expand.find($(".js-expander")).first();
                expandable = expand.find($(".js-expandable")).first();
            } else if (expand.hasClass("js-tree-expand")) {
                expander = expand.find($(".js-tree-expander")).first();
                expandable = expand.find($(".js-tree-expandable")).first();
            }

            function ExpandBlock(expand, expander, expandable) {
                this.expand = expand[0];
                this.expander = expander[0];
                this.expandable = expandable[0];
            }

            expandBlock = new ExpandBlock(expand, expander, expandable);

            expandBlocks.push(expandBlock);
        });

        return $(expandBlocks);
    };

    $.fn.addExpandability = function () {
        $(this).each(function () {
            $(this).removeExpandability();

            var expand = $(this.expand),
                expander = $(this.expander),
                expandable = $(this.expandable);

            // Clicking or focusing on an expander or its children adds a
            // class that makes it look like the whole block is focused
            expand.on("focusout.addExpandability", function () {
                $(".focused").removeClass("focused");
            });

            expand.on("focusin.addExpandability", function () {
                expand.addClass("focused");
            });

            // Initializes the block
            expand.addClass("initial expand collapsed");
            expander.addClass("expander");
            expander.attr("aria-expanded", "false");
            expandable.addClass("expandable");

            // Make non-button expanders work with enter key
            if (!expander.is("button")) {
                expander.attr("role", "button");
                expander.attr("tabindex", "0");
                expander.on("keypress.addExpandability", function (e) {
                    var pressedKey = e.which;
                    if (pressedKey === 13 || pressedKey === 32) {
                        e.preventDefault();
                        $(this).click();
                    }
                });
            }

            expander.on("click.addExpandability", function (e) {
                e.preventDefault();
                if (expander.attr("aria-expanded") === "false") {
                    // Expand the block
                    expander.attr("aria-expanded", "true");
                    expand.addClass("expanded").removeClass("collapsed");

                } else if (expander.attr("aria-expanded") === "true") {
                    // Collapse the block
                    expander.attr("aria-expanded", "false");
                    expand.addClass("collapsed").removeClass("expanded");
                }

                expand.removeClass("initial");
            });
        });

        return $(this);
    };

    $.fn.removeExpandability = function () {
        $(this).each(function () {
            var expand = $(this.expand),
                expander = $(this.expander),
                expandable = $(this.expandable);

            expander.off(".addExpandability");
            expand.off(".addExpandability");
            expandable.off(".addExpandability");

            expand.removeClass("initial expand expanded collapsed focused");
            expander.removeAttr("aria-expanded tabindex role");
            expander.css("margin-bottom", "");
            expander.removeClass("expander");
            expandable.removeClass("expandable");
        });

        return $(this);
    };

})(jQuery);





/***/ }),

/***/ "./src/js/master/responsiveExpandableBlocks.js":
/*!*****************************************************!*\
  !*** ./src/js/master/responsiveExpandableBlocks.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Add collapsing/expanding functionality to responsive expanding blocks in 1-col.

function responsiveExpandableBlocks() {
    var responsiveExpandableBlocks = $(".js-responsive-expand").getExpandableBlocks();

    if (layoutQ().number[0] !== 1) {
        console.log("removing resp.expand");
        responsiveExpandableBlocks.removeExpandability();
    } else {
        console.log("adding resp.expand");
        responsiveExpandableBlocks.addExpandability();
    }
}

window.responsiveExpandableBlocks = responsiveExpandableBlocks;

/***/ }),

/***/ "./src/js/master/textSizeExpander.js":
/*!*******************************************!*\
  !*** ./src/js/master/textSizeExpander.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿// Keyboard functionality for the text size expander in the footer
function textSizeExpander() {
    let isActive = false;

    $('.text-size button').on('click', function() {
        isActive = !isActive;
    });

    // Close the expander when tabbing out
    $('.text-size button').focusout(function(e) {
        if(isActive) {
            $(this).trigger('click');
        }
    });

    // Close the expander when Esc is pressed
    $('.text-size button').on('keyup', function(e) {
        if (e.keyCode == 27 && isActive) {
            $(this).trigger('click');
        }
    });
}

window.textSizeExpander = textSizeExpander;


/***/ }),

/***/ "./src/js/master/unhideMenu.js":
/*!*************************************!*\
  !*** ./src/js/master/unhideMenu.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿// The template includes CSS that hides the menu while the page
// is loading in order to avoid the open menu causing the page to
// jump.  This JS removes that CSS.

function unhideMenu() {
    $('.js-remove-menu-jump').remove();
}

window.unhideMenu = unhideMenu;

/***/ })

/******/ });
//# sourceMappingURL=master.js.map