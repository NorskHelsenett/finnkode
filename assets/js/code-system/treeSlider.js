function treeSlider() {
    var sliderContainer = $(".js-tree-slider");

    if (sliderContainer.length > 0) {

        var sliderBlocks = $(".js-tree-slider").getExpandableBlocks();

        if (layoutQ().number[0] > 2) {
            sliderBlocks.removeExpandability();
        } else {
            sliderBlocks.addExpandability();
        }
    }
}

window.treeSlider = treeSlider;