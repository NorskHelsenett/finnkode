// Add collapsing/expanding functionality to responsive expanding blocks in 1-col.

function responsiveExpandableBlocks() {
    var responsiveExpandableBlocks = $(".js-responsive-expand").getExpandableBlocks();

    if (layoutQ().number[0] !== 1) {
        responsiveExpandableBlocks.removeExpandability();
    } else {
        responsiveExpandableBlocks.addExpandability();
    }
}

window.responsiveExpandableBlocks = responsiveExpandableBlocks;