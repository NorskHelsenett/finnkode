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