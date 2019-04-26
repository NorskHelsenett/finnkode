// Adds collapsing/expanding functionality to non-responsive expandable blocks.

function expandableBlocks() {
    var expandableBlocks = $('.js-expand').getExpandableBlocks();
    expandableBlocks.addExpandability();
}

window.expandableBlocks = expandableBlocks;