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

// require('./code-system/codeTabs');

__webpack_require__(/*! ./code-system/treeLinks */ "./src/js/code-system/treeLinks.js");
__webpack_require__(/*! ./code-system/treeItemLinks */ "./src/js/code-system/treeItemLinks.js");
__webpack_require__(/*! ./code-system/codeSystemTreeExpand */ "./src/js/code-system/codeSystemTreeExpand.js");
__webpack_require__(/*! ./code-system/resizableSplitter */ "./src/js/code-system/resizableSplitter.js");
__webpack_require__(/*! ./code-system/stickyCodeSystemTree */ "./src/js/code-system/stickyCodeSystemTree.js");
__webpack_require__(/*! ./code-system/stickyHeader */ "./src/js/code-system/stickyHeader.js");
__webpack_require__(/*! ./code-system/main */ "./src/js/code-system/main.js");

/***/ }),

/***/ "./src/js/code-system/codeSystemTreeExpand.js":
/*!****************************************************!*\
  !*** ./src/js/code-system/codeSystemTreeExpand.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Makes the code system tree expand and collapse in 1- and 2-col layouts

function codeSystemTreeExpand () {
    var treeContainer = $(".js-tree-expand");

    if (treeContainer.length > 0) {
        var treeExpandBlocks = $(".js-tree-expand").getExpandableBlocks();

        if (layoutQ().number[0] > 2) {
            treeExpandBlocks.removeExpandability();
        } else {
            treeExpandBlocks.addExpandability();
        }
    }
}

window.codeSystemTreeExpand = codeSystemTreeExpand;

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
    stickyCodeSystemTree();
    resizableSplitter();
});


// "layoutchange" triggers only when the layout changes, as opposed to
// triggering on every resize.  Since the layout also changes on document
// ready--we're going from no layout to one layout--you don't have to call
// the function on document ready when you call it here.
$(window).on("layoutchange", function () {
    //console.log("layoutchange - code-system.js");
    stickyHeader();
    codeSystemTreeExpand();
    // codeTabs();
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

// The vertical splitter on code system pages in 3- and 4-col layouts

function resizableSplitter() {

    var resizablePanel = $(".js-resizable-splitter");

    if (resizablePanel.length !== 0) {
        if (layoutQ().number[0] <= 2) {
            console.log("destroy splitter");
            resizablePanel.resizable("destroy");
        } else {
            console.log("create splitter");
            resizablePanel.resizable({
                handleSelector: ".splitter",
                resizeHeight: false
            });
        }
    }
}

window.resizableSplitter = resizableSplitter;


/*
jquery-resizable
Version 0.32 - 5/5/2018
© 2015-2018 Rick Strahl, West Wind Technologies
www.west-wind.com
Licensed under MIT License
*/
(function ($, undefined) {

    console.log("jquery-resizable");

    if ($.fn.resizable)
        return;

    $.fn.resizable = function fnResizable(options) {
        var defaultOptions = {
            // selector for handle that starts dragging
            handleSelector: null,
            // resize the width
            resizeWidth: true,
            // resize the height
            resizeHeight: true,
            // the side that the width resizing is relative to
            resizeWidthFrom: "right",
            // the side that the height resizing is relative to
            resizeHeightFrom: "bottom",
            // hook into start drag operation (event passed)
            onDragStart: null,
            // hook into stop drag operation (event passed)
            onDragEnd: null,
            // hook into each drag operation (event passed)
            onDrag: null,
            // disable touch-action on $handle
            // prevents browser level actions like forward back gestures
            touchActionNone: true,
            // instance id
            instanceId: null
        };
        if (typeof options == "object")
            defaultOptions = $.extend(defaultOptions, options);

        return this.each(function () {
            var opt = $.extend({}, defaultOptions);
            if (!opt.instanceId)
                opt.instanceId = "rsz_" + new Date().getTime();

            var startPos, startTransition;

            // get the element to resize
            var $el = $(this);
            var $handle;

            if (options === "destroy") {
                opt = $el.data("resizable");
                if (!opt)
                    return;

                $handle = getHandle(opt.handleSelector, $el);
                $handle.off("mousedown." + opt.instanceId + " touchstart." + opt.instanceId);
                if (opt.touchActionNone)
                    $handle.css("touch-action", "");
                $el.removeClass("resizable");
                $el.removeAttr("style");
                return;
            }

            $el.data("resizable", opt);

            // get the drag handle

            $handle = getHandle(opt.handleSelector, $el);

            if (opt.touchActionNone)
                $handle.css("touch-action", "none");

            $el.addClass("resizable");
            $handle.on("mousedown." + opt.instanceId + " touchstart." + opt.instanceId, startDragging);

            function noop(e) {
                e.stopPropagation();
                e.preventDefault();
            };

            function startDragging(e) {
                // Prevent dragging a ghost image in HTML5 / Firefox and maybe others
                if (e.preventDefault) {
                    e.preventDefault();
                }

                startPos = getMousePos(e);
                startPos.width = parseInt($el.width(), 10);
                startPos.height = parseInt($el.height(), 10);

                startTransition = $el.css("transition");
                $el.css("transition", "none");

                if (opt.onDragStart) {
                    if (opt.onDragStart(e, $el, opt) === false)
                        return;
                }

                $(document).on("mousemove." + opt.instanceId, doDrag);
                $(document).on("mouseup." + opt.instanceId, stopDragging);
                if (window.Touch || navigator.maxTouchPoints) {
                    $(document).on("touchmove." + opt.instanceId, doDrag);
                    $(document).on("touchend." + opt.instanceId, stopDragging);
                }
                $(document).on("selectstart." + opt.instanceId, noop); // disable selection
                $("iframe").css("pointer-events", "none");
            }

            function doDrag(e) {

                var pos = getMousePos(e), newWidth, newHeight;

                if (opt.resizeWidthFrom === "left")
                    newWidth = startPos.width - pos.x + startPos.x;
                else
                    newWidth = startPos.width + pos.x - startPos.x;

                if (opt.resizeHeightFrom === "top")
                    newHeight = startPos.height - pos.y + startPos.y;
                else
                    newHeight = startPos.height + pos.y - startPos.y;

                if (!opt.onDrag || opt.onDrag(e, $el, newWidth, newHeight, opt) !== false) {
                    if (opt.resizeHeight)
                        $el.height(newHeight);

                    if (opt.resizeWidth)
                        $el.width(newWidth);
                }
            }

            function stopDragging(e) {
                e.stopPropagation();
                e.preventDefault();

                $(document).off("mousemove." + opt.instanceId);
                $(document).off("mouseup." + opt.instanceId);

                if (window.Touch || navigator.maxTouchPoints) {
                    $(document).off("touchmove." + opt.instanceId);
                    $(document).off("touchend." + opt.instanceId);
                }
                $(document).off("selectstart." + opt.instanceId, noop);

                // reset changed values
                $el.css("transition", startTransition);
                $("iframe").css("pointer-events", "auto");

                if (opt.onDragEnd)
                    opt.onDragEnd(e, $el, opt);

                return false;
            }

            function getMousePos(e) {
                var pos = {x: 0, y: 0, width: 0, height: 0};
                if (typeof e.clientX === "number") {
                    pos.x = e.clientX;
                    pos.y = e.clientY;
                } else if (e.originalEvent.touches) {
                    pos.x = e.originalEvent.touches[0].clientX;
                    pos.y = e.originalEvent.touches[0].clientY;
                } else
                    return null;

                return pos;
            }

            function getHandle(selector, $el) {
                if (selector && selector.trim()[0] === ">") {
                    selector = selector.trim().replace(/^>\s*/, "");
                    return $el.find(selector);
                }

                // Search for the selector, but only in the parent element to limit the scope
                // This works for multiple objects on a page (using .class syntax most likely)
                // as long as each has a separate parent container.
                return selector ? $el.parent().find(selector) : $el;
            }
        });
    };
})(jQuery);

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

/***/ }),

/***/ "./src/js/code-system/treeItemLinks.js":
/*!*********************************************!*\
  !*** ./src/js/code-system/treeItemLinks.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   File:   TreeitemLink.js
*
*   Desc:   Treeitem widget that implements ARIA Authoring Practices
*           for a tree being used as a file viewer
*/

/*
*   @constructor
*
*   @desc
*       Treeitem object for representing the state and user interactions for a
*       treeItem widget
*
*   @param node
*       An element with the role=tree attribute
*/

var TreeitemLink = function (node, treeObj, group) {

  // Check whether node is a DOM element
  if (typeof node !== 'object') {
    return;
  }

  node.tabIndex = -1;
  this.tree = treeObj;
  this.groupTreeitem = group;
  this.domNode = node;
  this.label = node.textContent.trim();
  this.stopDefaultClick = false;

  if (node.getAttribute('aria-label')) {
    this.label = node.getAttribute('aria-label').trim();
  }

  this.isExpandable = false;
  this.isVisible = false;
  this.inGroup = false;

  if (group) {
    this.inGroup = true;
  }

  var elem = node.firstElementChild;

  while (elem) {

    if (elem.tagName.toLowerCase() == 'ul') {
      elem.setAttribute('role', 'group');
      this.isExpandable = true;
      break;
    }

    elem = elem.nextElementSibling;
  }

  this.keyCode = Object.freeze({
    RETURN: 13,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  });
};

TreeitemLink.prototype.init = function () {
  this.domNode.tabIndex = -1;

  if (!this.domNode.getAttribute('role')) {
    this.domNode.setAttribute('role', 'treeitem');
  }

  this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
  this.domNode.addEventListener('click', this.handleClick.bind(this));
  this.domNode.addEventListener('focus', this.handleFocus.bind(this));
  this.domNode.addEventListener('blur', this.handleBlur.bind(this));

  if (this.isExpandable) {
    this.domNode.firstElementChild.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.domNode.firstElementChild.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }
  else {
    this.domNode.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.domNode.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }
};

TreeitemLink.prototype.isExpanded = function () {

  if (this.isExpandable) {
    return this.domNode.getAttribute('aria-expanded') === 'true';
  }

  return false;

};

/* EVENT HANDLERS */

TreeitemLink.prototype.handleKeydown = function (event) {
  var tgt = event.currentTarget,
    flag = false,
    char = event.key,
    clickEvent;

  function isPrintableCharacter (str) {
    return str.length === 1 && str.match(/\S/);
  }

  function printableCharacter (item) {
    if (char == '*') {
      item.tree.expandAllSiblingItems(item);
      flag = true;
    }
    else {
      if (isPrintableCharacter(char)) {
        item.tree.setFocusByFirstCharacter(item, char);
        flag = true;
      }
    }
  }

  this.stopDefaultClick = false;

  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  if (event.shift) {
    if (event.keyCode == this.keyCode.SPACE || event.keyCode == this.keyCode.RETURN) {
      event.stopPropagation();
      this.stopDefaultClick = true;
    }
    else {
      if (isPrintableCharacter(char)) {
        printableCharacter(this);
      }
    }
  }
  else {
    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
        if (this.isExpandable) {
          if (this.isExpanded()) {
            this.tree.collapseTreeitem(this);
          }
          else {
            this.tree.expandTreeitem(this);
          }
          flag = true;
        }
        else {
          event.stopPropagation();
          this.stopDefaultClick = true;
        }
        break;

      case this.keyCode.UP:
        this.tree.setFocusToPreviousItem(this);
        flag = true;
        break;

      case this.keyCode.DOWN:
        this.tree.setFocusToNextItem(this);
        flag = true;
        break;

      case this.keyCode.RIGHT:
        if (this.isExpandable) {
          if (this.isExpanded()) {
            this.tree.setFocusToNextItem(this);
          }
          else {
            this.tree.expandTreeitem(this);
          }
        }
        flag = true;
        break;

      case this.keyCode.LEFT:
        if (this.isExpandable && this.isExpanded()) {
          this.tree.collapseTreeitem(this);
          flag = true;
        }
        else {
          if (this.inGroup) {
            this.tree.setFocusToParentItem(this);
            flag = true;
          }
        }
        break;

      case this.keyCode.HOME:
        this.tree.setFocusToFirstItem();
        flag = true;
        break;

      case this.keyCode.END:
        this.tree.setFocusToLastItem();
        flag = true;
        break;

      default:
        if (isPrintableCharacter(char)) {
          printableCharacter(this);
        }
        break;
    }
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

TreeitemLink.prototype.handleClick = function (event) {

  // only process click events that directly happened on this treeitem
  if (event.target !== this.domNode && event.target !== this.domNode.firstElementChild) {
    return;
  }

  if (this.isExpandable) {
    if (this.isExpanded()) {
      this.tree.collapseTreeitem(this);
    }
    else {
      this.tree.expandTreeitem(this);
    }
    event.stopPropagation();
  }
};

TreeitemLink.prototype.handleFocus = function (event) {
  var node = this.domNode;
  if (this.isExpandable) {
    node = node.firstElementChild;
  }
  node.classList.add('focus');
};

TreeitemLink.prototype.handleBlur = function (event) {
  var node = this.domNode;
  if (this.isExpandable) {
    node = node.firstElementChild;
  }
  node.classList.remove('focus');
};

TreeitemLink.prototype.handleMouseOver = function (event) {
  event.currentTarget.classList.add('hover');
};

TreeitemLink.prototype.handleMouseOut = function (event) {
  event.currentTarget.classList.remove('hover');
};

/* harmony default export */ __webpack_exports__["default"] = (TreeitemLink);


/***/ }),

/***/ "./src/js/code-system/treeLinks.js":
/*!*****************************************!*\
  !*** ./src/js/code-system/treeLinks.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treeitemLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeitemLinks */ "./src/js/code-system/treeitemLinks.js");
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   File:   TreeLinks.js
*
*   Desc:   Tree widget that implements ARIA Authoring Practices
*           for a tree being used as a file viewer
*/


/**
 * ARIA Treeview example
 * @function onload
 * @desc  after page has loaded initialize all treeitems based on the role=treeitem
 */
window.addEventListener('load', function () {

  var trees = document.querySelectorAll('[role="tree"]');

  for (var i = 0; i < trees.length; i++) {
    var t = new TreeLinks(trees[i]);
    t.init();
  }

});

/*
*   @constructor
*
*   @desc
*       Tree item object for representing the state and user interactions for a
*       tree widget
*
*   @param node
*       An element with the role=tree attribute
*/

var TreeLinks = function (node) {
  // Check whether node is a DOM element
  if (typeof node !== 'object') {
    return;
  }

  this.domNode = node;

  this.treeitems = [];
  this.firstChars = [];

  this.firstTreeitem = null;
  this.lastTreeitem = null;

};

TreeLinks.prototype.init = function () {

  function findTreeitems (node, tree, group) {

    var elem = node.firstElementChild;
    var ti = group;

    while (elem) {

      if ((elem.tagName.toLowerCase() === 'li' && elem.firstElementChild.tagName.toLowerCase() === 'span') || elem.tagName.toLowerCase() === 'a') {
        ti = new _treeitemLinks__WEBPACK_IMPORTED_MODULE_0__["default"](elem, tree, group);
        ti.init();
        tree.treeitems.push(ti);
        tree.firstChars.push(ti.label.substring(0, 1).toLowerCase());
      }

      if (elem.firstElementChild) {
        findTreeitems(elem, tree, ti);
      }

      elem = elem.nextElementSibling;
    }
  }

  // initialize pop up menus
  if (!this.domNode.getAttribute('role')) {
    this.domNode.setAttribute('role', 'tree');
  }

  findTreeitems(this.domNode, this, false);

  this.updateVisibleTreeitems();

  this.firstTreeitem.domNode.tabIndex = 0;

};

TreeLinks.prototype.setFocusToItem = function (treeitem) {

  for (var i = 0; i < this.treeitems.length; i++) {
    var ti = this.treeitems[i];

    if (ti === treeitem) {
      ti.domNode.tabIndex = 0;
      ti.domNode.focus();
    }
    else {
      ti.domNode.tabIndex = -1;
    }
  }

};

TreeLinks.prototype.setFocusToNextItem = function (currentItem) {

  var nextItem = false;

  for (var i = (this.treeitems.length - 1); i >= 0; i--) {
    var ti = this.treeitems[i];
    if (ti === currentItem) {
      break;
    }
    if (ti.isVisible) {
      nextItem = ti;
    }
  }

  if (nextItem) {
    this.setFocusToItem(nextItem);
  }

};

TreeLinks.prototype.setFocusToPreviousItem = function (currentItem) {

  var prevItem = false;

  for (var i = 0; i < this.treeitems.length; i++) {
    var ti = this.treeitems[i];
    if (ti === currentItem) {
      break;
    }
    if (ti.isVisible) {
      prevItem = ti;
    }
  }

  if (prevItem) {
    this.setFocusToItem(prevItem);
  }
};

TreeLinks.prototype.setFocusToParentItem = function (currentItem) {

  if (currentItem.groupTreeitem) {
    this.setFocusToItem(currentItem.groupTreeitem);
  }
};

TreeLinks.prototype.setFocusToFirstItem = function () {
  this.setFocusToItem(this.firstTreeitem);
};

TreeLinks.prototype.setFocusToLastItem = function () {
  this.setFocusToItem(this.lastTreeitem);
};

TreeLinks.prototype.expandTreeitem = function (currentItem) {
  if (currentItem.isExpandable) {
    currentItem.domNode.setAttribute('aria-expanded', true);
    this.updateVisibleTreeitems();
  }

};

TreeLinks.prototype.expandAllSiblingItems = function (currentItem) {
  for (var i = 0; i < this.treeitems.length; i++) {
    var ti = this.treeitems[i];

    if ((ti.groupTreeitem === currentItem.groupTreeitem) && ti.isExpandable) {
      this.expandTreeitem(ti);
    }
  }

};

TreeLinks.prototype.collapseTreeitem = function (currentItem) {

  var groupTreeitem = false;

  if (currentItem.isExpanded()) {
    groupTreeitem = currentItem;
  }
  else {
    groupTreeitem = currentItem.groupTreeitem;
  }

  if (groupTreeitem) {
    groupTreeitem.domNode.setAttribute('aria-expanded', false);
    this.updateVisibleTreeitems();
    this.setFocusToItem(groupTreeitem);
  }

};

TreeLinks.prototype.updateVisibleTreeitems = function () {

  this.firstTreeitem = this.treeitems[0];

  for (var i = 0; i < this.treeitems.length; i++) {
    var ti = this.treeitems[i];

    var parent = ti.domNode.parentNode;

    ti.isVisible = true;

    while (parent && (parent !== this.domNode)) {

      if (parent.getAttribute('aria-expanded') == 'false') {
        ti.isVisible = false;
      }
      parent = parent.parentNode;
    }

    if (ti.isVisible) {
      this.lastTreeitem = ti;
    }
  }

};

TreeLinks.prototype.setFocusByFirstCharacter = function (currentItem, char) {
  var start, index, char = char.toLowerCase();

  // Get start index for search based on position of currentItem
  start = this.treeitems.indexOf(currentItem) + 1;
  if (start === this.treeitems.length) {
    start = 0;
  }

  // Check remaining slots in the menu
  index = this.getIndexFirstChars(start, char);

  // If not found in remaining slots, check from beginning
  if (index === -1) {
    index = this.getIndexFirstChars(0, char);
  }

  // If match was found...
  if (index > -1) {
    this.setFocusToItem(this.treeitems[index]);
  }
};

TreeLinks.prototype.getIndexFirstChars = function (startIndex, char) {
  for (var i = startIndex; i < this.firstChars.length; i++) {
    if (this.treeitems[i].isVisible) {
      if (char === this.firstChars[i]) {
        return i;
      }
    }
  }
  return -1;
};


/***/ }),

/***/ "./src/js/code-system/treeitemLinks.js":
/*!*********************************************!*\
  !*** ./src/js/code-system/treeitemLinks.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
*   This content is licensed according to the W3C Software License at
*   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
*
*   File:   TreeitemLink.js
*
*   Desc:   Treeitem widget that implements ARIA Authoring Practices
*           for a tree being used as a file viewer
*/

/*
*   @constructor
*
*   @desc
*       Treeitem object for representing the state and user interactions for a
*       treeItem widget
*
*   @param node
*       An element with the role=tree attribute
*/

var TreeitemLink = function (node, treeObj, group) {

  // Check whether node is a DOM element
  if (typeof node !== 'object') {
    return;
  }

  node.tabIndex = -1;
  this.tree = treeObj;
  this.groupTreeitem = group;
  this.domNode = node;
  this.label = node.textContent.trim();
  this.stopDefaultClick = false;

  if (node.getAttribute('aria-label')) {
    this.label = node.getAttribute('aria-label').trim();
  }

  this.isExpandable = false;
  this.isVisible = false;
  this.inGroup = false;

  if (group) {
    this.inGroup = true;
  }

  var elem = node.firstElementChild;

  while (elem) {

    if (elem.tagName.toLowerCase() == 'ul') {
      elem.setAttribute('role', 'group');
      this.isExpandable = true;
      break;
    }

    elem = elem.nextElementSibling;
  }

  this.keyCode = Object.freeze({
    RETURN: 13,
    SPACE: 32,
    PAGEUP: 33,
    PAGEDOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
  });
};

TreeitemLink.prototype.init = function () {
  this.domNode.tabIndex = -1;

  if (!this.domNode.getAttribute('role')) {
    this.domNode.setAttribute('role', 'treeitem');
  }

  this.domNode.addEventListener('keydown', this.handleKeydown.bind(this));
  this.domNode.addEventListener('click', this.handleClick.bind(this));
  this.domNode.addEventListener('focus', this.handleFocus.bind(this));
  this.domNode.addEventListener('blur', this.handleBlur.bind(this));

  if (this.isExpandable) {
    this.domNode.firstElementChild.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.domNode.firstElementChild.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }
  else {
    this.domNode.addEventListener('mouseover', this.handleMouseOver.bind(this));
    this.domNode.addEventListener('mouseout', this.handleMouseOut.bind(this));
  }
};

TreeitemLink.prototype.isExpanded = function () {

  if (this.isExpandable) {
    return this.domNode.getAttribute('aria-expanded') === 'true';
  }

  return false;

};

/* EVENT HANDLERS */

TreeitemLink.prototype.handleKeydown = function (event) {
  var tgt = event.currentTarget,
    flag = false,
    char = event.key,
    clickEvent;

  function isPrintableCharacter (str) {
    return str.length === 1 && str.match(/\S/);
  }

  function printableCharacter (item) {
    if (char == '*') {
      item.tree.expandAllSiblingItems(item);
      flag = true;
    }
    else {
      if (isPrintableCharacter(char)) {
        item.tree.setFocusByFirstCharacter(item, char);
        flag = true;
      }
    }
  }

  this.stopDefaultClick = false;

  if (event.altKey || event.ctrlKey || event.metaKey) {
    return;
  }

  if (event.shift) {
    if (event.keyCode == this.keyCode.SPACE || event.keyCode == this.keyCode.RETURN) {
      event.stopPropagation();
      this.stopDefaultClick = true;
    }
    else {
      if (isPrintableCharacter(char)) {
        printableCharacter(this);
      }
    }
  }
  else {
    switch (event.keyCode) {
      case this.keyCode.SPACE:
      case this.keyCode.RETURN:
        if (this.isExpandable) {
          if (this.isExpanded()) {
            this.tree.collapseTreeitem(this);
          }
          else {
            this.tree.expandTreeitem(this);
          }
          flag = true;
        }
        else {
          event.stopPropagation();
          this.stopDefaultClick = true;
        }
        break;

      case this.keyCode.UP:
        this.tree.setFocusToPreviousItem(this);
        flag = true;
        break;

      case this.keyCode.DOWN:
        this.tree.setFocusToNextItem(this);
        flag = true;
        break;

      case this.keyCode.RIGHT:
        if (this.isExpandable) {
          if (this.isExpanded()) {
            this.tree.setFocusToNextItem(this);
          }
          else {
            this.tree.expandTreeitem(this);
          }
        }
        flag = true;
        break;

      case this.keyCode.LEFT:
        if (this.isExpandable && this.isExpanded()) {
          this.tree.collapseTreeitem(this);
          flag = true;
        }
        else {
          if (this.inGroup) {
            this.tree.setFocusToParentItem(this);
            flag = true;
          }
        }
        break;

      case this.keyCode.HOME:
        this.tree.setFocusToFirstItem();
        flag = true;
        break;

      case this.keyCode.END:
        this.tree.setFocusToLastItem();
        flag = true;
        break;

      default:
        if (isPrintableCharacter(char)) {
          printableCharacter(this);
        }
        break;
    }
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};

TreeitemLink.prototype.handleClick = function (event) {

  // only process click events that directly happened on this treeitem
  if (event.target !== this.domNode && event.target !== this.domNode.firstElementChild) {
    return;
  }

  if (this.isExpandable) {
    if (this.isExpanded()) {
      this.tree.collapseTreeitem(this);
    }
    else {
      this.tree.expandTreeitem(this);
    }
    event.stopPropagation();
  }
};

TreeitemLink.prototype.handleFocus = function (event) {
  var node = this.domNode;
  if (this.isExpandable) {
    node = node.firstElementChild;
  }
  node.classList.add('focus');
};

TreeitemLink.prototype.handleBlur = function (event) {
  var node = this.domNode;
  if (this.isExpandable) {
    node = node.firstElementChild;
  }
  node.classList.remove('focus');
};

TreeitemLink.prototype.handleMouseOver = function (event) {
  event.currentTarget.classList.add('hover');
};

TreeitemLink.prototype.handleMouseOut = function (event) {
  event.currentTarget.classList.remove('hover');
};

/* harmony default export */ __webpack_exports__["default"] = (TreeitemLink);


/***/ })

/******/ });
//# sourceMappingURL=code-system.js.map