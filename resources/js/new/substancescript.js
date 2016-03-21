$(function() {

    $(".similar-enabler").on("click", function() {
        $(".subst-select").prop("disabled", false);
    });

    $(".subst-select").select2({
        placeholder: 'Use o enter para separar as substancias.',
            minimumInputLength: 2,
            dataType: 'json',
            language: {
                inputTooShort: function() {
                    return 'Começe a digitar para pesquisar substâncias ou cria-las';
                }
            },
            createTag: function(params) {return null;},
            ajax: {
                url: 'https://allergyhelper3.firebaseio.com/substancies.json?',
                dataType: 'json',
                data: function(params) {
                    var unicode = "\uf8ff";
                    var startAt = '"' + params.term + '"';
                    var endAt = '"' + params.term + unicode + '"';
                    var query = {
                        orderBy: "\"lowerCaseName\"",
                        startAt: startAt.toLowerCase(),
                        endAt: endAt.toLowerCase(),
                        print: "\"pretty\""
                    };
                    // Query paramters will be ?search=[term]&page=[page]
                    return query;
                },
                processResults: function(data, key) {
                    responsejson = {
                        results: $.map(data, function(obj, key) {
                            return {
                                id: key,
                                lower: obj.lowerCaseName,
                                text: obj.commonName
                            };
                        })
                    };
                    return responsejson;
                }
            }
    });

    // $(".similar-enable").on("click", function() {
    //     $(".subst-select").prop("disabled", false);
    // });

    // $(".similar-disable").on("click", function() {
    //     $(".subst-select").prop("disabled", true);
    // });

    $("#checkboxSimilar").change(function() {
        var test = $(".subst-select").is(':disabled');
        $(".subst-select").prop("disabled", test ? false:true);
    });

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