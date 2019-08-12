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

__webpack_require__(/*! ./code-system/codeTabs */ "./src/js/code-system/codeTabs.js");
__webpack_require__(/*! ./code-system/treeLinks */ "./src/js/code-system/treeLinks.js");
__webpack_require__(/*! ./code-system/treeItemLinks */ "./src/js/code-system/treeItemLinks.js");

__webpack_require__(/*! ./code-system/codeSystemTreeLayout */ "./src/js/code-system/codeSystemTreeLayout.js");

__webpack_require__(/*! ./code-system/stickyHeader */ "./src/js/code-system/stickyHeader.js");
__webpack_require__(/*! ./code-system/plugins */ "./src/js/code-system/plugins.js");
__webpack_require__(/*! ./code-system/main */ "./src/js/code-system/main.js");

/***/ }),

/***/ "./src/js/code-system/codeSystemTreeLayout.js":
/*!****************************************************!*\
  !*** ./src/js/code-system/codeSystemTreeLayout.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Makes the code system tree expand and collapse in 1- and 2-col layouts

function codeSystemTreeLayout() {
    var panelContainer = $(".js-panel-container");

    if (panelContainer.length > 0) {

        var treeExpandBlock = $(".js-tree-expand"),
            expanderSplitter = $(".js-tree-expander"),
            tree = $(".js-tree-expandable"),
            content = $(".js-code-system-content-container");

        if (layoutQ().number[0] > 2) {

            // Splitter layout

            // remove the expand block behavior
            treeExpandBlock
                .getExpandableBlocks()
                .removeExpandability();

            // Move the elements in the correct order to make a splitter
            panelContainer.prepend(tree, expanderSplitter, content);

            // Make the tree sticky
            tree.makeStickyCodeSystemTree();

            // Remove the empty expand block
            treeExpandBlock.remove();

            // Make the splitter behavior
            tree.resizable({
                handleSelector: ".js-tree-expander",
                resizeHeight: false
            });

        } else {
            // Expand block layout

            // Remove the sticky tree
            tree.resetStickyCodeSystemTree();

            // Remove the resizability from the tree
            tree.resizable("destroy");

            // move content so it works as an expander
            if (treeExpandBlock.length === 0) {
                panelContainer.prepend($("<div>", {class: "js-tree-expand tree-expand-block"}));
            }

            $(".js-tree-expand")
                .prepend(tree, expanderSplitter)
                .after(content);

            $(".js-tree-expand")
                .getExpandableBlocks()
                .addExpandability();
        }
    }
}

window.codeSystemTreeLayout = codeSystemTreeLayout;

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
    if ($(".js-tabgroup").length !== 0) {

        if (layoutQ().number[1] === 0) {
            //console.log("First load. Default, existing markup is tabs.");

            if (layoutQ().number[0] == 1) {
                //console.log("1 col. Removing tab groups, make responsive expanders since it's first load but the HTML has changed.");
                tabsToExpandableBlocks();

            } else {
                //console.log("2+ col. Markup exists. Add functionality to tab groups.");
                addTabFunctionality();
            }

        } else {
            //console.log("not first load--layout changed");

            if (layoutQ().number[0] == 1) {
                //console.log("Layout changed to one col. Removing tab groups, make responsive expanders since the HTML changes.");
                tabsToExpandableBlocks();

            } else if (layoutQ().number[1] == 1) {
                //console.log("Layout changed, moving from 1-col to 2+ col. Making tab groups, removing responsive expanders.");
                expandableBlocksToTabs();
            }
        }
    }
}

function removeTabFunctionality() {

    var tablists = $(".js-tablist"),
        tabtitles = $(".js-tabtitle"),
        tabs = $(".js-tab"),
        tabpanels = $(".js-tabpanel");

    // Remove events, attributes and classes
    tablists.removeAttr("role aria-orientation");
    tablists.off(".makeTabgroupFunctionality");

    tabtitles.removeClass("selected");

    tabs.removeAttr("role aria-selected");
    tabs.off(".makeTabgroupFunctionality");

    tabpanels.removeClass("selected");
    tabpanels.removeAttr("role");
}

function addTabFunctionality() {

    // Add events, attributes and classes for tabs
    // Assumes markup for tabs exists

    var tabgroups = $(".js-tabgroup"),
        tablists = $(".js-tablist"),
        tabtitles = $(".js-tabtitle"),
        tabs = $(".js-tab"),
        tabpanels = $(".js-tabpanel");

    tablists.attr("role", "tablist");
    tablists.attr("aria-orientation", "horizontal");

    tabs.attr("role", "tab");

    tabpanels.attr("role", "tabpanel");

    // Set up click functionality
    $(".js-tab").on("click.makeTabgroupFunctionality", function () {
        var clickedTab = $(this),
            clickedTabpanel = $("#" + clickedTab.attr("aria-controls")),

            tabgroup = clickedTab.closest(".js-tabgroup"),
            tabs = tabgroup.find(".js-tab"),
            tabpanels = tabgroup.find(".js-tabpanel"),

            otherTabs = tabs.not(clickedTab),
            otherTabpanels = tabpanels.not(clickedTabpanel);

        clickedTab.attr("aria-selected", "true");
        clickedTab.closest(".js-tabtitle").addClass("selected");

        otherTabs.attr("aria-selected", "false");
        otherTabs.closest(".js-tabtitle").removeClass("selected");

        clickedTabpanel.addClass("selected");
        otherTabpanels.removeClass("selected");
    });

    // Set up the keyboard nav
    $(".js-tablist").on("keydown.makeTabgroupFunctionality", function (e) {

        // Left arrow and up arrow select the previous tab
        if (e.keyCode == 37 || e.keyCode == 38) {
            $(".js-tab:focus").closest(".js-tabtitle").prev().find(".js-tab").click().focus();
            e.preventDefault();
        }

        // Right arrow and down arrow select the next tab
        if (e.keyCode == 39 || e.keyCode == 40) {
            $(".js-tab:focus").closest(".js-tabtitle").next().find(".js-tab").click().focus();
            e.preventDefault();
        }

    });
};

function tabsToExpandableBlocks() {
    removeTabFunctionality();

    $(".js-tabgroup").each(function () {

        var tabgroup = $(this),
            tabpanels = tabgroup.find(".js-tabpanel"),
            tablist = tabgroup.find(".js-tablist");

        tabpanels.each(function () {
            var tabpanel = $(this),
                tabtitle = $("#" + tabpanel.attr("aria-labelledby")).closest(".js-tabtitle");

            // Move the expander/tabtitle first inside the expand block
            tabpanel.prepend(tabtitle);
        });

        // Delete the tablist element
        tablist.remove();
    });

    responsiveExpandableBlocks();
};

function expandableBlocksToTabs() {
    responsiveExpandableBlocks();

    $(".js-tabgroup").each(function () {

        var tabgroup = $(this),
            tabpanels = tabgroup.find($(".js-tabpanel"));

        // Create the tablist element first inside the tabgroup
        tabgroup.prepend($("<div>", {
            "class": "js-tablist",
            "role": "tablist",
            "aria-orientation": "horizontal"
        }));

        // Grab the tablist
        var tablist = tabgroup.find(".js-tablist");

        // Move the tabtitles into the tablist
        tabpanels.each(function () {
            var tabtitle = $(this).find(".js-tabtitle");

            // Move the expander/tabtitle into the tablist
            tablist.append(tabtitle);
        });

        // Select the first tab in each group
        var tablist = tabgroup.find(".js-tablist"),
            firstTabtitle = tablist.find(".js-tabtitle").filter(":first-child"),
            firstTab = firstTabtitle.find(".js-tab"),
            firstTabpanelContainer = $("#" + firstTab.attr("aria-controls"));

        firstTabtitle.addClass("selected");
        firstTab.attr("aria-selected", "true");
        firstTabpanelContainer.addClass("selected");
    });

    addTabFunctionality();
};


window.codeTabs = codeTabs;

/***/ }),

/***/ "./src/js/code-system/main.js":
/*!************************************!*\
  !*** ./src/js/code-system/main.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

﻿// "layoutchange" triggers only when the layout changes, as opposed to
// triggering on every resize.  Since the layout also changes on document
// ready--we're going from no layout to one layout--you don't have to call
// the function on document ready when you call it here.
$(window).on("layoutchange", function () {
    //console.log("layoutchange - code-system.js");
    stickyHeader();
    codeTabs();
    codeSystemTreeLayout();
});


/***/ }),

/***/ "./src/js/code-system/plugins.js":
/*!***************************************!*\
  !*** ./src/js/code-system/plugins.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {

    $.fn.focusWithoutScrolling = function () {
        var x = window.scrollX, y = window.scrollY;
        this.focus();
        window.scrollTo(x, y);
        return this;
    };

    $.fn.resizable = function fnResizable(options) {
        // Adapted from jquery-resizable
        // Version 0.32 - 5/5/2018
        // © 2015-2018 Rick Strahl, West Wind Technologies
        // www.west-wind.com
        // Licensed under MIT License

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


    /*!============================================================
     * Based on
     * jquery.sticky-nav.js
     * Copyright (c) Federico Cargnelutti <fedecarg@gmail.com>
     * http://www.fedecarg.com/
     ============================================================*/

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


})(jQuery);

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
        header.removeClass("minimal");
        $(".js-code-system-content-container").off("scroll.stickyHeader");

        if (layoutQ().number[0] <= 2) {

            var headerHeight = header.height(),
                scrollQ = {direction: ["down", "down"], changed: false},
                previousScrollTop = 0,
                minScroll = 10,
                currentDirection = "down",
                previousDirection = "down";

            $(".js-code-system-content-container").on("scroll.stickyHeader", debounce(function () {

                        scrollQ.changed = false;

                        try {
                            var currentScrollTop = $(this).scrollTop();

                            if (Math.abs(previousScrollTop - currentScrollTop) <= minScroll)
                                return;

                            if (currentScrollTop > previousScrollTop) {
                                currentDirection = "down";
                                header.addClass("minimal");
                            } else if (currentScrollTop <= previousScrollTop) {
                                currentDirection = "up";
                            }

                            previousScrollTop = currentScrollTop;
                            previousDirection = currentDirection;

                        } catch (e) {
                            console.log(e);
                        }

                        if (scrollQ.direction[0] !== currentDirection) {
                            scrollQ.direction.unshift(currentDirection);
                        }

                        if (scrollQ.direction.length > 2) {
                            scrollQ.changed = true;
                            scrollQ.direction.pop();
                        }

                        if (scrollQ.changed) {
                            if (currentDirection == "down") {
                                header.addClass("minimal");
                            } else {
                                header.removeClass("minimal");
                            }
                        }
                    }, 25)
            );

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
/* harmony import */ var _treeItemLinks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./treeItemLinks */ "./src/js/code-system/treeItemLinks.js");
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
        ti = new _treeItemLinks__WEBPACK_IMPORTED_MODULE_0__["default"](elem, tree, group);
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


/***/ })

/******/ });
//# sourceMappingURL=code-system.js.map