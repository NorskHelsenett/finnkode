function resizableSplitter() {

    var resizablePanel = $(".js-resizable-splitter");

    if (resizablePanel.length !== 0) {
        resizablePanel.resizable({
            handleSelector: ".splitter",
            resizeHeight: false
        });
    }
}

window.resizableSplitter = resizableSplitter;