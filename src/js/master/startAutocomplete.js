// Accessible jQuery UI autocomplete
// Based on http://pauljadam.com/demos/jqueryui-autocomplete.html

function startAutocomplete() {
    var hits = [
        "rest",
        "res Andre spesifiserte symptomer og tegn med tilknytning til sirkulasjons- og åndedrettssystemet",
        "restless legs",
        "restriktiv lungesykdom",
        "restless legs svangerskap",
        "rester etter fødsel",
        "restless",
        "rester etter abort",
        "rest urin",
        "restriktiv",
        "rester"
    ];

    $('#autocomplete').autocomplete({
        source: hits,
        autofocus: true,
        messages: {
            noResults: 'Fant ingen resultater.',
            results: function (count) {
                return count + (count > 1 ? ' resultater' : ' resultat ') + ' funnet. Velg et forslag under.';
            }
        },
        appendTo: "#listbox-wrapper",
        close: function (event, ui) {
            val = $("#autocomplete").val();
            return false;
        },
        focus: function (event, ui) {
            var menu = $(this).data("uiAutocomplete").menu.element;
            var focusid = menu.find("a.ui-state-active").attr('id');
            $('#autocomplete').attr('aria-activedescendant', focusid);
            $(".ui-autocomplete a").attr('aria-selected', 'false');
            $(".ui-autocomplete a.ui-state-active").attr('aria-selected', 'true');
        }
    });
    $.ui.autocomplete.prototype._renderItem = function (ul, item) {
        return $("<li></li>")
            .data("item.autocomplete", item)
            .append("<a role=option>" + item.label + "</a>")
            .appendTo(ul);
    };
    $.ui.autocomplete.prototype._renderMenu = function (ul, items) {
        var that = this;
        $.each(items, function (index, item) {
            that._renderItemData(ul, item);
        });
        $(ul).attr('role', 'listbox');
        $(ul).attr('id', 'listbox-container');
        $(ul).find("li:odd").addClass("odd");
    };
    $(".ui-autocomplete").on('blur', function () {
        $("#autocomplete").autocomplete("destroy");
        startAutocomplete();
        $('#autocomplete').attr('aria-expanded', 'false');
    });
    $('.ui-helper-hidden-accessible').detach().appendTo('body');
}

$("#autocomplete").on('input change keyup paste', function () {
    $('#autocomplete').attr('aria-expanded', 'true');
    if (!this.value) {
        $("#autocomplete").autocomplete("destroy");
        startAutocomplete();
        $('#autocomplete').attr('aria-expanded', 'false');
    }
});

$("#autocomplete").keypress(function (e) {
    if (e.keyCode == '13') {
        $("#autocomplete").autocomplete("destroy");
        startAutocomplete();
        $('#autocomplete').attr('aria-expanded', 'false');
        return false;
    }
});

window.startAutocomplete = startAutocomplete;