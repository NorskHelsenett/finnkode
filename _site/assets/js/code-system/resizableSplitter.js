function resizableSplitter() {

    var resizablePanel = $(".js-resizable-splitter");

    if (resizablePanel.length !== 0) {
        if (layoutQ().number[0] <= 2) {
             // resizablePanel.removeAttr("style");
             // resizablePanel.find(".splitter").removeAttr("style")
             // resizablePanel.off("resizeableSplitter");

            resizablePanel.resizable("destroy");

        } else {
            resizablePanel.resizable({
                handleSelector: ".splitter",
                resizeHeight: false
            });
        }
    }
}

window.resizableSplitter = resizableSplitter;