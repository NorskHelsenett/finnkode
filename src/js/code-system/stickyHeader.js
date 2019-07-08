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