// Handles how the code system layout changes from split to vertical depending on the layout

function navTreeExpand () {
    var treeContainer = $(".js-nav-tree-expand");

    if (treeContainer.length > 0) {
        var treeExpandBlocks = $(".js-nav-tree-expand").getExpandableBlocks();

        if (layoutQ().number[0] > 2) {
            treeExpandBlocks.removeExpandability();
        } else {
            treeExpandBlocks.addExpandability();
        }
    }
}

window.navTreeExpand = navTreeExpand;