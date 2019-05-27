function resizableSplitter() {

    console.log("resizableSplitter");

    var resizablePanel = $(".js-resizable-splitter");

    if (resizablePanel.length !== 0) {
        if (layoutQ().number[0] <= 2) {
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