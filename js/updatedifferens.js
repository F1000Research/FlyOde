/**
 * Created by Begum Alaybeyoglu, 2014-2015..
 */
function updatedifferens() {
    var stagetext = {
        "Differentiation level": ['Stage', 'Larva', 'Pupa', 'Adult']
    };
    var stagevalue = {
        "Differentiation level": ["", "i", "p", "a"]
    };
    var celltypetext = {
        "Differentiation level": ['Cell type', 'Photoreceptor cell', 'Glia', 'Pigment cell', 'Preconecell', 'Cone cell', 'Bristle cell', 'Basal cell']
    };
    var celltypevalue = {
        "Differentiation level": ["", "PR", "glia", "_pigmentcell", "proconecell", "_conecell", "bristlecell", "basalc"]
    };


    $(".differentiation option:selected").each(function () {
        var differens = $(this).text();
        //console.log(differens);
        if (differens != "Differentiation level") {
            remvstct();
        }
    });
    function remvstct() {
        var dummby = $('#hovercontent').find('.stage1');
        dummby.each(function () {
            var stg1 = dummby.empty();
        });
        var dummby = $('#hovercontent').find('.stage2');
        dummby.each(function () {
            var stg2 = dummby.empty();
        });
        var lummby = $('#hovercontent').find('.celltype1');
        lummby.each(function () {
            var cty1 = lummby.empty();
        });
        var lummby = $('#hovercontent').find('.celltype2');
        lummby.each(function () {
            var cty2 = lummby.empty();
        });
        var lummby = $('#hovercontent').find('.specialization');
        lummby.each(function () {
            var specl = lummby.empty();
        });
        var lummby = $('#hovercontent').find('.subtypes');
        lummby.each(function () {
            var subtys = lummby.empty();
        });
    }

    var differenselect = [];
    $(".differentiation option:selected").each(function () {
        differenselect.push($(this).text());
    });
    //console.log(differenselect);

    var value = 0;
    for (i in differenselect) {
        if (differenselect[i] == "Differentiation level") {
            value = value + 1;
        }
    }
    //console.log(value);

    if (value == differenselect.length) {
        var dummby = $('#hovercontent').find('.stage1');
        dummby.each(function () {
            var differen = dummby.empty();
            for (i in stagetext["Differentiation level"]) {
                var d2_name = stagetext["Differentiation level"][i];
                var d2_value = stagevalue["Differentiation level"][i];
                differen.append($('<option>').val(d2_value).text(d2_name));
            }
        });
        var dummby = $('#hovercontent').find('.stage2');
        dummby.each(function () {
            var differen = dummby.empty();
            differen.append($('<option>').val("").text("Stage prefix"));
        });

        var lummby = $('#hovercontent').find('.celltype1');
        lummby.each(function () {
            var locali = lummby.empty();
            for (i in celltypetext["Differentiation level"]) {
                var l2_name = celltypetext["Differentiation level"][i];
                var l2_value = celltypevalue["Differentiation level"][i];
                locali.append($('<option>').val(l2_value).text(l2_name));
            }
        });

        var lummby = $('#hovercontent').find('.celltype2');
        lummby.each(function () {
            var locali = lummby.empty();
            locali.append($('<option>').val("").text("Cell type 2"));
        });
        var lummby = $('#hovercontent').find('.specialization');
        lummby.each(function () {
            var locali = lummby.empty();
            locali.append($('<option>').val("").text("Specialization"));
        });
        var lummby = $('#hovercontent').find('.subtypes');
        lummby.each(function () {
            var locali = lummby.empty();
            locali.append($('<option>').val("").text("Subtype"));
        });
    }
}
