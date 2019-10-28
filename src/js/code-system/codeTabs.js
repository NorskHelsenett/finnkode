// This ensures the correct ARIA-attributes and keyboard nav for the tabs at the bottom of the code cards.
// https://www.deque.com/blog/a11y-support-series-part-1-aria-tab-panel-accessibility/

function codeTabs() {
    if ($(".js-tabgroup").length !== 0) {

        if (layoutQ().number[1] === 0) {
            //console.log("First load. Default, existing markup is tabs.");

            if (layoutQ().number[0] == 1) {
                //console.log("1 col. Removing tab groups, make responsive expanders since it's first load but the HTML has changed.");
                tabsToExpandableBlocks();

            } else {
                //console.log("2+ col. Markup exists. Add functionality to tab groups.");
                addTabFunctionality();
            }

        } else {
            //console.log("not first load--layout changed");

            if (layoutQ().number[0] == 1) {
                //console.log("Layout changed to one col. Removing tab groups, make responsive expanders since the HTML changes.");
                tabsToExpandableBlocks();

            } else if (layoutQ().number[1] == 1) {
                //console.log("Layout changed, moving from 1-col to 2+ col. Making tab groups, removing responsive expanders.");
                expandableBlocksToTabs();
            }
        }
    }
}

function removeTabFunctionality() {

    var tablists = $(".js-tablist"),
        tabtitles = $(".js-tabtitle"),
        tabs = $(".js-tab"),
        tabpanels = $(".js-tabpanel");

    // Remove events, attributes and classes
    tablists.removeAttr("role aria-orientation");
    tablists.off(".makeTabgroupFunctionality");

    tabtitles.removeClass("selected");

    tabs.removeAttr("role aria-selected");
    tabs.off(".makeTabgroupFunctionality");

    tabpanels.removeClass("selected");
    tabpanels.removeAttr("role");
}

function addTabFunctionality() {

    // Add events, attributes and classes for tabs
    // Assumes markup for tabs exists

    var tabgroups = $(".js-tabgroup"),
        tablists = $(".js-tablist"),
        tabtitles = $(".js-tabtitle"),
        tabs = $(".js-tab"),
        tabpanels = $(".js-tabpanel");

    tablists.attr("role", "tablist");
    tablists.attr("aria-orientation", "horizontal");

    tabs.attr("role", "tab");

    tabpanels.attr("role", "tabpanel");

    // Set up click functionality
    $(".js-tab").on("click.makeTabgroupFunctionality", function () {
        var clickedTab = $(this),
            clickedTabpanel = $("#" + clickedTab.attr("aria-controls")),

            tabgroup = clickedTab.closest(".js-tabgroup"),
            tabs = tabgroup.find(".js-tab"),
            tabpanels = tabgroup.find(".js-tabpanel"),

            otherTabs = tabs.not(clickedTab),
            otherTabpanels = tabpanels.not(clickedTabpanel);

        clickedTab.attr("aria-selected", "true");
        clickedTab.closest(".js-tabtitle").addClass("selected");

        otherTabs.attr("aria-selected", "false");
        otherTabs.closest(".js-tabtitle").removeClass("selected");

        clickedTabpanel.addClass("selected");
        otherTabpanels.removeClass("selected");
    });

    // Set up the keyboard nav
    $(".js-tablist").on("keydown.makeTabgroupFunctionality", function (e) {

        // Left arrow and up arrow select the previous tab
        if (e.keyCode == 37 || e.keyCode == 38) {
            $(".js-tab:focus").closest(".js-tabtitle").prev().find(".js-tab").click().focus();
            e.preventDefault();
        }

        // Right arrow and down arrow select the next tab
        if (e.keyCode == 39 || e.keyCode == 40) {
            $(".js-tab:focus").closest(".js-tabtitle").next().find(".js-tab").click().focus();
            e.preventDefault();
        }

    });
};

function tabsToExpandableBlocks() {
    removeTabFunctionality();

    $(".js-tabgroup").each(function () {

        var tabgroup = $(this),
            tabpanels = tabgroup.find(".js-tabpanel"),
            tablist = tabgroup.find(".js-tablist");

        tabpanels.each(function () {
            var tabpanel = $(this),
                tabtitle = $("#" + tabpanel.attr("aria-labelledby")).closest(".js-tabtitle");

            // Move the expander/tabtitle first inside the expand block
            tabpanel.prepend(tabtitle);
        });

        // Delete the tablist element
        tablist.remove();
    });

    responsiveExpandableBlocks();
};

function expandableBlocksToTabs() {
    responsiveExpandableBlocks();

    $(".js-tabgroup").each(function () {

        var tabgroup = $(this),
            tabpanels = tabgroup.find($(".js-tabpanel"));

        // Create the tablist element first inside the tabgroup
        tabgroup.prepend($("<div>", {
            "class": "js-tablist",
            "role": "tablist",
            "aria-orientation": "horizontal"
        }));

        // Grab the tablist
        var tablist = tabgroup.find(".js-tablist");

        // Move the tabtitles into the tablist
        tabpanels.each(function () {
            var tabtitle = $(this).find(".js-tabtitle");

            // Move the expander/tabtitle into the tablist
            tablist.append(tabtitle);
        });

        // Select the first tab in each group
        var tablist = tabgroup.find(".js-tablist"),
            firstTabtitle = tablist.find(".js-tabtitle").filter(":first-child"),
            firstTab = firstTabtitle.find(".js-tab"),
            firstTabpanelContainer = $("#" + firstTab.attr("aria-controls"));

        firstTabtitle.addClass("selected");
        firstTab.attr("aria-selected", "true");
        firstTabpanelContainer.addClass("selected");
    });

    addTabFunctionality();
};


window.codeTabs = codeTabs;