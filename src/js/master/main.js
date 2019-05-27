﻿//console.log("start - master/master.js");

// "ready" triggers as soon as the dom is in place.  Use this for things
// that are not affected by a change in layout or window size.
$(window).on("ready", function () {
    //console.log('ready - master/master.js');
    layoutQ();
});

// // "load" triggers when all the content on the page has finished loading.
// Use this for things that need to have their content fully loaded in
// order to work correctly, e.g. stuff affected by height.
$(window).on('load', function () {
    //console.log('load - master/master.js');
    responsiveExpandableBlocks();
    expandableBlocks();
    textSizeExpander();
});


// "layoutchange" triggers only when the layout changes, as opposed to
// triggering on every resize.  Since the layout also changes on document
// ready--we're going from no layout to one layout--you don't have to call
// the function on document ready when you call it here.
$(window).on("layoutchange", function () {
    //console.log("layoutchange - master/master.js");

    responsiveExpandableBlocks();
});

// "conditionalresize" does stuff does stuff on debounced resize when the layout is 1-col.
// $(window).on(
//     'conditionalresize',
//     debounce(function () {
//         //console.log("conditionalresize - master/master.js");
//     }, 25)
// );

// "resize orientationchange" triggers every time the browser window resizes
// or the device's orientation changes. You almost certainly want to put your
// function call in "layoutchange" or "conditionalresize" and not here.
$(window).on(
    "resize orientationchange",
    debounce(function () {
        //console.log("resize orientationchange - master/master.js");
        layoutQ();
    }, 25)
);
