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

})(jQuery);