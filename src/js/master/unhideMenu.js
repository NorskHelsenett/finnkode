// The template includes CSS that hides the menu while the page
// is loading in order to avoid the open menu causing the page to
// jump.  This JS removes that CSS.

function unhideMenu() {
    $('.js-remove-menu-jump').remove();
}

window.unhideMenu = unhideMenu;