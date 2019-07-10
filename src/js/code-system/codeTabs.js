// This ensures the correct ARIA-attributes and keyboard nav for the tabs at the bottom of the code cards.
// https://www.deque.com/blog/a11y-support-series-part-1-aria-tab-panel-accessibility/

function codeTabs() {
    var tabgroups = $(".js-tabgroup");

    if (tabgroups.length !== 0) {

        if (layoutQ().number[0] === 1) {
            tabgroups.resetTabgroups();
            responsiveExpandableBlocks();
        } else if (layoutQ().number[1] === 1 && layoutQ().number[0] > 1) {
            // Only when moving from 1-col to 2+ col
            tabgroups.makeTabgroups();
            console.log("mving from 1 to 2+ col");
        }
    }
}

window.codeTabs = codeTabs;