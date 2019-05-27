// Adds collapsing/expanding functionality to non-responsive expandable blocks.

export default function expandableBlocks() {
    var expandableBlocks = $('.js-expand').getExpandableBlocks();
    expandableBlocks.addExpandability();
}

window.expandableBlocks = expandableBlocks;