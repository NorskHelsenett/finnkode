// Keyboard functionality for the text size expander in the footer
function textSizeExpander() {
    let isActive = false;

    $('.text-size button').on('click', function() {
        isActive = !isActive;
    });

    // Close the expander when tabbing out
    $('.text-size button').focusout(function(e) {
        if(isActive) {
            $(this).trigger('click');
        }
    });

    // Close the expander when Esc is pressed
    $('.text-size button').on('keyup', function(e) {
        if (e.keyCode == 27 && isActive) {
            $(this).trigger('click');
        }
    });
}

window.textSizeExpander = textSizeExpander;
