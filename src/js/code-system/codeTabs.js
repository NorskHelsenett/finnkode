// This ensures the correct ARIA-attributes and keyboard nav for the tabs at the bottom of the code cards.
// https://www.deque.com/blog/a11y-support-series-part-1-aria-tab-panel-accessibility/

function codeTabs() {

    var tabs = $("[role=tab]");

    if (tabs.length !== 0) {

        tabs.on("click", showTabPanel);

        function showTabPanel(el) { //runs when tab is clicked
            var clickTabs = tabs = $("[role=tab]"),
            clickedTab = $(el.target);

            clickTabs.attr("aria-selected", "false");
            clickTabs.attr("style", "font-weight:normal");
            clickedTab.attr("aria-selected", "true");
            clickedTab.attr("style", "font-weight:bold");

            var tabPanelToOpen = $("#" + clickedTab.attr("aria-controls")),
                tabPanels = $("[role=tabpanel]");

            tabPanels.attr("style","display:none");
            tabPanelToOpen.attr("style","display:block");
        }

        $("[role=tablist]").keydown(function (e) {
            if (e.keyCode == 37) {
                $("[aria-selected=true]").prev().click().focus();
                e.preventDefault();
            }
            if (e.keyCode == 38) {
                $("[aria-selected=true]").prev().click().focus();
                e.preventDefault();
            }
            if (e.keyCode == 39) {
                $("[aria-selected=true]").next().click().focus();
                e.preventDefault();
            }
            if (e.keyCode == 40) {
                $("[aria-selected=true]").next().click().focus();
                e.preventDefault();
            }
        });

    }
}

window.codeTabs = codeTabs;