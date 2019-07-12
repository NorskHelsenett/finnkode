// This ensures the correct ARIA-attributes and keyboard nav for the tabs at the bottom of the code cards.
// https://www.deque.com/blog/a11y-support-series-part-1-aria-tab-panel-accessibility/

function codeTabs() {
    var tabgroups = $(".js-tabgroup");

    if (tabgroups.length !== 0) {

        /*
                if (layoutQ().number[0] == 1 && layoutQ().number[1] !== 1) {
                    console.log("1 col, first load. Removing tab groups.");
                    //tabgroups.resetTabgroups();

                } else if (layoutQ().number[0] > 1 && layoutQ().number[1] == 1) {
                    // Only when moving from 1-col to 2+ col
                    console.log("moving from 1 to 2 col. Making tab groups. ");
                    //tabgroups.makeTabgroups();

                } else if (layoutQ().number[0] > 1 && layoutQ().number[1] >= 1) {
                    console.log("moving from 2 to 3- or 4-col. Not doing anything. ");

                } else if (layoutQ().number[0] > 1 && layoutQ().number[1] == 1) {
                    console.log("First load, layout 2+ col. Make tabs.");
                }

        */

        if (layoutQ().number[1] === 0) {
            console.log("first load");

            if (layoutQ().number[0] == 1) {
                console.log("1 col. Removing tab groups, make responsive expanders since it's first load but the HTML has changed.");
                tabgroups.resetTabgroups();
                responsiveExpandableBlocks();
            } else {
                console.log("2+ col. Make tab groups.");
                tabgroups.resetTabgroups();
                tabgroups.makeTabgroups();
            }

        } else {
            console.log("not first load--layout changed");

            if (layoutQ().number[0] == 1) {
                console.log("Layout changed to one col. Removing tab groups, make responsive expanders since the HTML changes.");
                tabgroups.resetTabgroups();
                responsiveExpandableBlocks();

            } else if (layoutQ().number[1] == 1) {
                console.log("Layout changed, moving from 1-col to 2+ col. Making tab groups, removing responsive expanders.");
                tabgroups.makeTabgroups();
                responsiveExpandableBlocks();
            }




        }

    }
}

window.codeTabs = codeTabs;