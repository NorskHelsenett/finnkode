// Makes the code system tree expand and collapse in 1- and 2-col layouts

function codeSystemTreeToggle () {
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

window.codeSystemTreeToggle = codeSystemTreeToggle;