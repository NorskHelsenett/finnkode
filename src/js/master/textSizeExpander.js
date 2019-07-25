// Used to fix issues with expand/collapse on text size button when using keyboard
function textSizeExpander() {
    let isActive = false;
    $('.text-size button').on('click', function() {
        isActive = !isActive;
    });
    $('.text-size button').focusout(function(e) {
        if(isActive) {
            $(this).trigger('click');
        }
    });
}

window.textSizeExpander = textSizeExpander;
