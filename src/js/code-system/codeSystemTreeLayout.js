// Makes the code system tree expand and collapse in 1- and 2-col layouts

function codeSystemTreeLayout() {
    var panelContainer = $(".js-panel-container");

    if (panelContainer.length > 0) {

        var treeExpandBlock = $(".js-tree-expand"),
            expanderSplitter = $(".js-tree-expander"),
            tree = $(".js-tree-expandable"),
            content = $(".js-code-system-content-container");

        if (layoutQ().number[0] > 2) {

            // Splitter layout

            // remove the expand block behavior
            treeExpandBlock
                .getExpandableBlocks()
                .removeExpandability();

            // Move the elements in the correct order to make a splitter
            panelContainer.prepend(tree, expanderSplitter, content);

            // Make the tree sticky
            tree.makeStickyCodeSystemTree();

            // Remove the empty expand block
            treeExpandBlock.remove();

            // Make the splitter behavior
            tree.resizable({
                handleSelector: ".js-tree-expander",
                resizeHeight: false
            });

        } else {
            // Expand block layout

            // Remove the sticky tree
            tree.resetStickyCodeSystemTree();

            // Remove the resizability from the tree
            tree.resizable("destroy");

            // move content so it works as an expander
            if (treeExpandBlock.length === 0) {
                panelContainer.prepend($("<div>", {class: "js-tree-expand tree-expand-block"}));
            }

            $(".js-tree-expand")
                .prepend(tree, expanderSplitter)
                .after(content);

            $(".js-tree-expand")
                .getExpandableBlocks()
                .addExpandability();
        }
    }
}

window.codeSystemTreeLayout = codeSystemTreeLayout;