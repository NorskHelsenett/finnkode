(function ($) {
    $.fn.getExpandableBlocks = function () {
        var expandBlocks = [];

        $(this).each(function () {
            var expand = $(this),
                expander,
                expandable,
                expandBlock;

            if (expand.hasClass("js-responsive-expand")) {
                expander = expand.find($(".js-responsive-expander")).first();
                expandable = expand
                    .find($(".js-responsive-expandable"))
                    .first();
            } else if (expand.hasClass("js-expand")) {
                expander = expand.find($(".js-expander")).first();
                expandable = expand.find($(".js-expandable")).first();
            } else if (expand.hasClass("js-tree-expand")) {
                expander = expand.find($(".js-tree-expander")).first();
                expandable = expand.find($(".js-tree-expandable")).first();
            }

            function ExpandBlock(expand, expander, expandable) {
                this.expand = expand[0];
                this.expander = expander[0];
                this.expandable = expandable[0];
            }

            expandBlock = new ExpandBlock(expand, expander, expandable);

            expandBlocks.push(expandBlock);
        });

        return $(expandBlocks);
    };

    $.fn.addExpandability = function () {
        $(this).each(function () {
            $(this).removeExpandability();

            var expand = $(this.expand),
                expander = $(this.expander),
                expandable = $(this.expandable);

            // Clicking or focusing on an expander or its children adds a
            // class that makes it look like the whole block is focused
            expand.on("focusout.addExpandability", function () {
                $(".focused").removeClass("focused");
            });

            expand.on("focusin.addExpandability", function () {
                expand.addClass("focused");
            });

            // Initializes the block
            expand.addClass("initial expand collapsed");
            expander.addClass("expander");
            expander.attr("aria-expanded", "false");
            expandable.addClass("expandable");

            // Make non-button expanders work with enter key
            if (!expander.is("button")) {
                expander.attr("role", "button");
                expander.attr("tabindex", "0");
                expander.on("keypress.addExpandability", function (e) {
                    var pressedKey = e.which;
                    if (pressedKey === 13 || pressedKey === 32) {
                        e.preventDefault();
                        $(this).click();
                    }
                });
            }

            expander.on("click.addExpandability", function (e) {
                e.preventDefault();
                if (expander.attr("aria-expanded") === "false") {
                    // Expand the block
                    expander.attr("aria-expanded", "true");
                    expand.addClass("expanded").removeClass("collapsed");

                } else if (expander.attr("aria-expanded") === "true") {
                    // Collapse the block
                    expander.attr("aria-expanded", "false");
                    expand.addClass("collapsed").removeClass("expanded");
                }

                expand.removeClass("initial");
            });
        });

        return $(this);
    };

    $.fn.removeExpandability = function () {
        $(this).each(function () {
            var expand = $(this.expand),
                expander = $(this.expander),
                expandable = $(this.expandable);

            expander.off(".addExpandability");
            expand.off(".addExpandability");
            expandable.off(".addExpandability");

            expand.removeClass("initial expand expanded collapsed focused");
            expander.removeAttr("aria-expanded tabindex role");
            expander.css("margin-bottom", "");
            expander.removeClass("expander");
            expandable.removeClass("expandable");
        });

        return $(this);
    };

    $.fn.focusWithoutScrolling = function () {
        var x = window.scrollX, y = window.scrollY;
        this.focus();
        window.scrollTo(x, y);
        return this;
    };


    // $.fn.resetTabs = function () {
    //     console.log("resetting tabs");
    //
    //     var tabgroups = $(this);
    //
    //     var tablists = $(".js-tablist"),
    //         tabtitles = $(".js-tabtitle"),
    //         tabs = $(".js-tab"),
    //         tabpanels = $(".js-tabpanel");
    //
    //     tablists.removeAttr("role");
    //     tablists.removeAttr("aria-orientation");
    //     tablists.off("keydown.makeTabs");
    //
    //     tabtitles.removeClass("selected");
    //
    //     tabs.removeAttr("role aria-selected");
    //     tabs.off("click.makeTabs");
    //
    //     tabpanels.removeClass("selected");
    //     tabpanels.removeAttr("role");
    //
    //     return this;
    // };

    $.fn.resetTabgroups = function () {
        // Starting from a series of tabgroups, make expandable blocks

        var tabgroups = $(this);

        console.log("resetting tabs");

        var tablists = $(".js-tablist"),
            tabtitles = $(".js-tabtitle"),
            tabs = $(".js-tab"),
            tabpanels = $(".js-tabpanel");

        tablists.removeAttr("role");
        tablists.removeAttr("aria-orientation");
        tablists.off("keydown.makeTabgroups");

        tabtitles.removeClass("selected");

        tabs.removeAttr("role aria-selected");
        tabs.off("click.makeTabgroups");

        tabpanels.removeClass("selected");
        tabpanels.removeAttr("role");

        // Resetting  groups
        tabgroups = $(".js-tabgroup");
        tabgroups.each(function () {

            var tabgroup = $(this),
                tabpanels = tabgroup.find(".js-tabpanel"),
                tablist = tabgroup.find(".js-tablist");

            // For each expand block
            tabpanels.each(function () {
                var tabpanel = $(this),
                    tab = $("#" + tabpanel.attr("aria-labelledby")).closest(".js-tabtitle");


                // Move the expander/tabtitle first inside the expand block
                tabpanel.prepend(tabtitleExpander);
            });


            // Delete the tablist element
            tablist.remove();

        });

        return this;
    };

    $.fn.makeTabgroups = function () {
        var tabgroups = $(this);

        tabgroups.resetTabgroups();

        console.log("making tab groups");

        var tabgroups = $(".js-tabgroup"),
            tablists = $(".js-tablist"),
            tabtitles = $(".js-tabtitle"),
            tabs = $(".js-tab"),
            tabpanels = $(".js-tabpanel");

        tablists.attr("role", "tablist");
        tablists.attr("aria-orientation", "horizontal");
        tabs.attr("role", "tab");
        tabpanels.attr("role", "tabpanel");

        // Make the clicking functionality
        tabs.on("click.makeTabgroups", function () {
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
        tablists.on("keydown.makeTabgroups", function (e) {

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

        tabgroups = $(".js-tabgroup"),

            tabgroups.each(function () {
                // Create the tablist element first inside the tabgroup
                $(this).prepend("<div class=\"js-tablist\" role=\"tablist\" aria-orientation=\"horizontal\"></div>");

                var tabgroup = $(this),
                    expandBlocks = tabgroup.find(".js-responsive-expand"),
                    tablist = tabgroup.find(".js-tablist"),
                    tabpanels = tabgroup.find(".js-tabpanel");

                // For each expand block
                expandBlocks.each(function () {
                    var expandBlock = $(this),
                        tabpanelExpandable = expandBlock.find(".js-tabpanel"),
                        tabtitleExpander = $("#" + tabpanelExpandable.attr("aria-labelledby")).closest(".js-tabtitle");

                    // Move the expander/tabtitle into the tablist
                    tablist.append(tabtitleExpander);
                });

                // Select the first tab in each group
                var tablist = tabgroup.find(".js-tablist"),
                    firstTabtitle = tablist.find(".js-tabtitle").filter(":first-child"),
                    firstTab = firstTabtitle.find(".js-tab"),
                    firstTabpanelContainer = $("#" + firstTab.attr("aria-controls")).parent();

                firstTabtitle.addClass("selected");
                firstTab.attr("aria-selected", "true");
                firstTabpanelContainer.addClass("selected");
            });

        return this;
    };


})(jQuery);