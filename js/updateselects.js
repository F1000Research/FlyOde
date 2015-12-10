/**
 * Created by Begum Alaybeyoglu, 2014-2015.
 */
function updateselectsst(event) {
    var prefixestext = {
        "Stage": ['Stage 2'],
        Larva: ['All 3rd instar larva', 'Early 3rd instar', 'Intermediate 3rd instar', 'Late 3rd instar'],
        Pupa: ['All pupa', 'Early', 'Intermediate', 'Late'],
        Adult: ['']
    };
    var prefixesvalue = {
        "Stage": [""],
        Larva: ['3i_', 'e3i', 'i3i', 'l3i'],
        Pupa: ['p_', 'ep', 'ip', 'lp'],
        Adult: ['adult']
    };

    var differentext = {
        "Stage": ['Differentiation level', 'In morphogenetic furrow', 'Anterior to morphogenetic furrow', 'Immediate anterior to morphogenetic furrow', 'Posterior to morphogenetic furrow', 'Immediate posterior to morphogenetic furrow', 'Proneural', 'Preproneural', 'Intermediate group'],
        Larva: [''],
        Pupa: [''],
        Adult: ['']
    };
    var differenvalue = {
        "Stage": ["", 'inmf', 'antmf', 'iantmf', 'postmf', 'ipostmf', 'proneural', 'preproneural', 'intermediategroup'],
        Larva: [''],
        Pupa: [''],
        Adult: ['']
    };

    //if( !e ) e = window.event;

    var trgt = $(event.target);
    var trgttxt = trgt.find('option:selected').text();
    var nextstg2 = trgt.parent('div').nextAll('div').first();
    var nextstage2 = nextstg2.children('select');
    var stage2 = nextstage2.empty();
    for (i in prefixestext[trgttxt]) {
        var s2_name = prefixestext[trgttxt][i];
        var s2_value = prefixesvalue[trgttxt][i];
        stage2.append($('<option>').val(s2_value).text(s2_name));
    }
    if (trgttxt != "Stage") {
        remvdiff();
    }

    function remvdiff() {
        var dummby = $('#hovercontent').find('.differentiation');
        dummby.each(function () {
            var differen = dummby.empty();
        });

    }

    var allstage1select = [];
    var allcelltype1select = [];
    $(".stage1 option:selected").each(function () {
        allstage1select.push($(this).text());
    });
    //console.log(allstage1select);
    $('.celltype1 option:selected').each(function () {
        allcelltype1select.push($(this).text());
    });
    //console.log(allcelltype1select);

    var value = 0;
    for (i in allstage1select) {
        if ((allstage1select[i] == "Stage") && (allcelltype1select[i] == "Cell type")) {
            value = value + 1;
        }
    }
    if (value == allstage1select.length) {
        var dummby = $('#hovercontent').find('.differentiation');
        dummby.each(function () {
            var differen = dummby.empty();
            for (i in differentext["Stage"]) {
                var d2_name = differentext["Stage"][i];
                var d2_value = differenvalue["Stage"][i];
                differen.append($('<option>').val(d2_value).text(d2_name));
            }
        });
    }
}