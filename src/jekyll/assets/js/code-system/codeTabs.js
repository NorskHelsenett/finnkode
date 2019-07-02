// This ensures the correct ARIA-attributes and keyboard nav for the tabs at the bottom of the code cards.

function codeTabs() {


    var tabList = $('.js-tab-list'),
        tabPanelContainer = $('.js-tab-panels');

    if (tabPanelContainer.length !== 0 && tabList.length !== 0) {

        var tabs = tabList.find($('[role=tab]')),
            panels = tabPanelContainer.find($('[role=tabpanel]'));

        // Reset all tabs
        tabs.removeAttr('aria-selected');
        tabs.attr("tabindex","0");
        tabs.removeClass('selected unselected');
        panels.removeClass('selected unselected');

        //if (layoutQ().number[0] >= 3) {
            var selectedTab;

            function showTabPanel(event) {
                var currentTabs = tabList.find($('[role=tab]')),
                    panels = tabPanelContainer.find($('[role=tabpanel]'));

                if (typeof selectedTab === 'undefined') {
                    selectedTab = currentTabs.first();
                } else {
                    selectedTab = $(event.target);
                }

                // Reset all tabs
                currentTabs.removeAttr('aria-selected');
                currentTabs.removeClass('selected unselected');
                panels.removeClass('selected unselected');

                // Select the clicked tab, unselect the others
                currentTabs.not(selectedTab).attr('aria-selected', 'false');
                currentTabs.not(selectedTab).addClass('unselected');

                selectedTab.attr('aria-selected', 'true');
                selectedTab.addClass('selected');

                // Show the associated panel
                var panelToOpenID = selectedTab.attr('aria-controls'),
                    panelToOpen = $('#' + panelToOpenID);

                panels.not(panelToOpen).addClass('unselected');
                panelToOpen.addClass('selected');
            }

            showTabPanel();

            tabs.off('codeTabs').on('click', function (event) {
                var selectedTab = $(event.target),
                    panelToOpenID = selectedTab.attr('aria-controls'),
                    panelToOpen = $('#' + panelToOpenID);

                showTabPanel(event);
                //
                // if (selectedTab.hasClass('selected')) {
                //     panelToOpen.focusWithoutScrolling();
                // }

            });

            tabList.off('codeTabs').on('keydown', function (event) {

                // Left arrow
                if (event.keyCode === 37) {
                    $(event.target).prev().focus();
                }

                // Right arrow
                if (event.keyCode === 39) {
                    $(event.target).next().focus();
                }
            });
        //}
    }

}

window.codeTabs = codeTabs;