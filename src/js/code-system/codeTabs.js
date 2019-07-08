// This ensures the correct ARIA-attributes and keyboard nav for the tabs at the bottom of the code cards.
// https://www.deque.com/blog/a11y-support-series-part-1-aria-tab-panel-accessibility/

function codeTabs() {

    var tabgroups = $(".js-tabgroup");

    if (tabgroups.length !== 0) {

        // Make/reset tabs

        $(".js-tabtitle").removeClass("selected");
        $(".js-tabtitle:first-child").addClass("selected");

        $(".js-tab").attr("aria-selected", "false");
        $(".js-tabtitle:first-child .js-tab").attr("aria-selected", "true");

        $(".js-tabpanel").removeClass("selected").attr("style","display:none");
        $(".js-tabpanel:nth-child(2)").addClass("selected").attr("style","display:block");

        $(".js-tab").on("click", showTabPanel);

        function showTabPanel() {
            var clickedTab = $(this),
                clickedTabpanel = $("#" + clickedTab.attr("aria-controls")),

                tabgroup = clickedTab.closest(".js-tabgroup"),
                tabs = tabgroup.find(".js-tab"),
                tabpanels = tabgroup.find(".js-tabpanel"),

                otherTabs = tabs.not(clickedTab),
                otherTabpanels = tabpanels.not(clickedTabpanel);

            clickedTab.attr("aria-selected", "true");
            clickedTab.closest("js-tabtitle").addClass("selected");

            otherTabs.attr("aria-selected", "false");
            otherTabs.closest("js-tabtitle").removeClass("selected");

            clickedTabpanel.addClass("selected").attr("style","display:block");
            otherTabpanels.removeClass("selected").attr("style","display:none");
        }

        $("[role=tablist]").keydown(function (e) {

            if (e.keyCode == 37) {

                $(".js-tab:focus").closest(".js-tabtitle").prev().find(".js-tab").click().focus();
                e.preventDefault();
            }
            if (e.keyCode == 38) {
                $(".js-tab:focus").closest(".js-tabtitle").prev().find(".js-tab").click().focus();
                e.preventDefault();
            }
            if (e.keyCode == 39) {
                $(".js-tab:focus").closest(".js-tabtitle").next().find(".js-tab").click().focus();
                e.preventDefault();
            }
            if (e.keyCode == 40) {
                $(".js-tab:focus").closest(".js-tabtitle").next().find(".js-tab").click().focus();
                e.preventDefault();
            }
        });
    }
}

window.codeTabs = codeTabs;