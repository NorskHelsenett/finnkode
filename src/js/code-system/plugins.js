(function ($) {

    $.fn.focusWithoutScrolling = function () {
        var x = window.scrollX, y = window.scrollY;
        this.focus();
        window.scrollTo(x, y);
        return this;
    };

    $.fn.resizable = function fnResizable(options) {
        // jquery-resizable
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

    // $.fn.resetTabs = function () {
    //     console.log("resetting tabs");
    //
    //     var tabgroups = $(this);
    //
    //     var tablists = $(".js-tablist"),
    //         tabtitles = $(".js-tabtitle"),
    //         tabs = $(".js-tab"),
    //         tabpanels = $(".js-tabpanel");
    //
    //     tablists.removeAttr("role");
    //     tablists.removeAttr("aria-orientation");
    //     tablists.off("keydown.makeTabs");
    //
    //     tabtitles.removeClass("selected");
    //
    //     tabs.removeAttr("role aria-selected");
    //     tabs.off("click.makeTabs");
    //
    //     tabpanels.removeClass("selected");
    //     tabpanels.removeAttr("role");
    //
    //     return this;
    // };

    $.fn.resetTabgroups = function () {
        // Starting from a series of tabgroups, make expandable blocks

        var tabgroups = $(this);

        var tablists = $(".js-tablist"),
            tabtitles = $(".js-tabtitle"),
            tabs = $(".js-tab"),
            tabpanels = $(".js-tabpanel");

        tablists.removeAttr("role");
        tablists.removeAttr("aria-orientation");
        tablists.off("keydown.makeTabgroups");

        tabtitles.removeClass("selected");

        tabs.removeAttr("role aria-selected");
        tabs.off("click.makeTabgroups");

        tabpanels.removeClass("selected");
        tabpanels.removeAttr("role");

        tabgroups = $(".js-tabgroup");
        tabgroups.each(function () {

            var tabgroup = $(this),
                tabpanels = tabgroup.find(".js-tabpanel"),
                tablist = tabgroup.find(".js-tablist");

            // For each expand block
            tabpanels.each(function () {
                var tabpanel = $(this),
                    tabtitle = $("#" + tabpanel.attr("aria-labelledby")).closest(".js-tabtitle");

                // Move the expander/tabtitle first inside the expand block
                tabpanel.prepend(tabtitle);
            });


            // Delete the tablist element
            tablist.remove();

        });

        return this;
    };

    $.fn.makeTabgroups = function () {
        var tabgroups = $(this);

        tabgroups.resetTabgroups();

        var tabgroups = $(".js-tabgroup"),
            tablists = $(".js-tablist"),
            tabtitles = $(".js-tabtitle"),
            tabs = $(".js-tab"),
            tabpanels = $(".js-tabpanel");

        tablists.attr("role", "tablist");
        tablists.attr("aria-orientation", "horizontal");
        tabs.attr("role", "tab");
        tabpanels.attr("role", "tabpanel");

        // Make the clicking functionality
        tabs.on("click.makeTabgroups", function () {
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
        tablists.on("keydown.makeTabgroups", function (e) {

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

        tabgroups = $(".js-tabgroup");

        tabgroups.each(function () {
            // Create the tablist element first inside the tabgroup
            $(this).prepend($("<div>", {
                "class": "js-tablist",
                "role": "tablist",
                "aria-orientation": "horizontal"
            }));

            var tabgroup = $(this),
                expandBlocks = tabgroup.find(".js-responsive-expand"),
                tablist = tabgroup.find(".js-tablist"),
                tabpanels = tabgroup.find(".js-tabpanel");

            // For each expand block/tab
            expandBlocks.each(function () {
                var expandBlock = $(this),
                    tabpanelExpandable = expandBlock.find(".js-tabpanel"),
                    tabtitleExpander = expandBlock.find(".js-tabtitle"),
                    tab = expandBlock.find(".js-tab");

                tab.attr("aria-selected", "false");

                // Move the expander/tabtitle into the tablist
                tablist.append(tabtitleExpander);
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

        return this;
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

                console.log($(targetEl));

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