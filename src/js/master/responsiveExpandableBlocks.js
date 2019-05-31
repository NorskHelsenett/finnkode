// Add collapsing/expanding functionality to responsive expanding blocks in 1-col.

function responsiveExpandableBlocks() {
    setTimeout(() => {

    var responsiveExpandableBlocks = $(".js-responsive-expand").getExpandableBlocks();

    if (layoutQ().number[0] !== 1) {
        responsiveExpandableBlocks.removeExpandability();
    } else {
        responsiveExpandableBlocks.addExpandability();
    }
    }, 1000);
}

window.responsiveExpandableBlocks = responsiveExpandableBlocks;