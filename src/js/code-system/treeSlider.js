function treeExpand () {
    var treeContainer = $(".js-tree-expand");

    if (treeContainer.length > 0) {
        var treeExpandBlocks = $(".js-tree-expand").getExpandableBlocks();

        if (layoutQ().number[0] > 2) {
            treeExpandBlocks.removeExpandability();
        } else {
            treeExpandBlocks.addExpandability();
        }
    }
}

window.treeExpand = treeExpand;