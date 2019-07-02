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