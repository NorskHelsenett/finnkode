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