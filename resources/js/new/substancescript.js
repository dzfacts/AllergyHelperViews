$(function() {

    $(".similar-enabler").on("click", function() {
        $(".subst-select").prop("disabled", false);
    });

    $(".subst-select").select2({
        placeholder: 'Use o enter para separar as substancias.',
        minimumInputLength: 2,
        language: {
            inputTooShort: function() {
                return 'Começe a digitar para pesquisar substâncias ou cria-las';
            }
        },
        tags: true
    });

    $(".similar-enable").on("click", function() {
        $(".subst-select").prop("disabled", false);
    });

    $(".similar-disable").on("click", function() {
        $(".subst-select").prop("disabled", true);
    });

    var $button = $('.button-checkbox').find('button');
    $('.button-checkbox').find('input:checkbox');

    button = $widget.find('button'),
            $checkbox = $widget.find('input:checkbox'),
            color = $button.data('color'),
            settings = {
                on: {
                    icon: 'glyphicon glyphicon-check'
                },
                off: {
                    icon: 'glyphicon glyphicon-unchecked'
                }
            };

});

// <select class="subst-select form-control" id="similarSelect" multiple="multiple"></select>

function dynInput(cbox) {
    if (cbox.checked) {
        var input = document.createElement("input");
        input.type = "text";
        var div = document.createElement("div");
        div.id = cbox.name;
        div.innerHTML = "Text to display for " + cbox.name;
        div.appendChild(input);
        document.getElementById("contentSubsInput").appendChild(div);
    } else {
        document.getElementById(cbox.name).remove();
    }
}