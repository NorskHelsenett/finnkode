function resizableSplitter() {

    var resizablePanel = $(".js-resizable-splitter");

    resizablePanel.resizable({
        handleSelector: ".splitter",
        resizeHeight: false
    });
}

window.resizableSplitter = resizableSplitter;