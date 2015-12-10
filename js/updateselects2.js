/**
 * Created by Begum Alaybeyoglu, 2014-2015.
 */
function updateselectsct(e) {

    var cellprefixtext = {
        "Cell type": ['Cell type 2'],
        "Photoreceptor cell": ['Any PR', 'At least one outer PR', 'At least one inner PR', 'All of the outer PRs', 'Photoreceptor cell R1', 'Photoreceptor cell R2', 'Photoreceptor cell R3', 'Photoreceptor cell R4', 'Photoreceptor cell R5', 'Photoreceptor cell R6', 'Photoreceptor cell R7', 'Photoreceptor cell R8'],
        Glia: ['All glia', 'Retinal basal glia'],
        Prepigmentcell: [''],
        "Pigment cell": ['All pigment cells', 'Primary pigment cell', 'Secondary pigment cell', 'Tertiary pigment cell'],
        Preconecell: [''],
        "Cone cell": [''],
        "Bristle cell": [''],
        "Basal cell": ['']
    };
    var cellprefixvalue = {
        "Cell type": [""],
        "Photoreceptor cell": ['PR', 'PRo', 'PRi', 'PRoall', 'PRo1', 'PRo2', 'PRo3', 'PRo4', 'PRo5', 'PRo6', 'PRi7', 'PRi8'],
        Glia: ['glia', 'rbglia'],
        Prepigmentcell: ['prepigmentcell'],
        "Pigment cell": ['pigc', 'primpigc', 'secpigc', 'tertpigc'],
        Preconecell: ['proconecell'],
        "Cone cell": ['_conecell'],
        "Bristle cell": ['bristlecell'],
        "Basal cell": ['basalc']
    };

    var differentext = {
        "Stage": ['Differentiation level', 'In morphogenetic furrow', 'Anterior to morphogenetic furrow', 'Immediate anterior to morphogenetic furrow', 'Posterior to morphogenetic furrow', 'Proneural', 'Preproneural', 'Intermediate group'],
        Larva: [''],
        Pupa: [''],
        Adult: ['']
    };
    var differenvalue = {
        "Stage": ["", 'inmf', 'antmf', 'iantmf', 'postmf', 'proneural', 'preproneural', 'intermediategroup'],
        Larva: [''],
        Pupa: [''],
        Adult: ['']
    };

    if (!e) e = window.event;

    var trgtct = $(e.target);
    var celltype1 = trgtct.find('option:selected').text();
    var nxtcll2 = trgtct.parent('div').nextAll('div').first();
    var nextcell2 = nxtcll2.children('select');
    var celltype2 = nextcell2.empty();
    for (i in cellprefixtext[celltype1]) {
        var cs2_name = cellprefixtext[celltype1][i];
        var cs2_value = cellprefixvalue[celltype1][i];
        celltype2.append($('<option>').val(cs2_value).text(cs2_name));
    }

    if ((celltype1 != "Photoreceptor cell") && (celltype1 != "Cell type")) {
        var nxtspci = nxtcll2.nextAll('div:first');
        var nextspeci = nxtspci.children('select');
        var specialization = nextspeci.empty();
        /*            for (i in specitext[celltype1]) {
         var sp2_name = specitext[celltype1][i];
         var sp2_value = specivalue[celltype1][i];
         specialization.append($('<option>').val(sp2_value).text(sp2_name));
         }*/
        var nxtsbt = nxtspci.nextAll('div:first');
        var nextsubt = nxtsbt.children('select');
        var subtypes = nextsubt.empty();
        /*            for (i in subttext[celltype1]) {
         var sub2_name = subttext[celltype1][i];
         var sub2_value = subtvalue[celltype1][i];
         subtypes.append($('<option>').val(sub2_value).text(sub2_name));
         }*/
    } else {
        var nxtspci = nxtcll2.nextAll('div:first');
        var nextspeci = nxtspci.children('select');
        var specialization = nextspeci.empty();
        specialization.append($('<option>').val("").text("Specialization"));

        var nxtsbt = nxtspci.nextAll('div:first');
        var nextsubt = nxtsbt.children('select');
        var subtypes = nextsubt.empty();
        subtypes.append($('<option>').val("").text("Subtype"));
    }


    if (celltype1 != "Cell type") {
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

function updateselectspe(e) {

    var specitext = {
        "Any PR": ['Specialization'],
        "At least one outer PR": [''],
        "At least one inner PR": ['All', 'Dorsal 3rd', 'Dorsal rim area'],
        "All of the outer PRs": [''],
        "Photoreceptor cell R1": [''],
        "Photoreceptor cell R2": [''],
        "Photoreceptor cell R3": [''],
        "Photoreceptor cell R4": [''],
        "Photoreceptor cell R5": [''],
        "Photoreceptor cell R6": [''],
        "Photoreceptor cell R7": ['All', 'Dorsal 3rd', 'Dorsal rim area'],
        "Photoreceptor cell R8": ['All', 'Dorsal 3rd', 'Dorsal rim area']
    };

    var specivalue = {
        "Any PR": [''],
        "At least one outer PR": [''],
        "At least one inner PR": ['', '_d3', '_dra'],
        "All of the outer PRs": [''],
        "Photoreceptor cell R1": [''],
        "Photoreceptor cell R2": [''],
        "Photoreceptor cell R3": [''],
        "Photoreceptor cell R4": [''],
        "Photoreceptor cell R5": [''],
        "Photoreceptor cell R6": [''],
        "Photoreceptor cell R7": ['', '_d3', '_dra'],
        "Photoreceptor cell R8": ['', '_d3', '_dra']
    };

    var subttext = {
        "Any PR": ['Subtype'],
        "At least one outer PR": [''],
        "At least one inner PR": ['All subtypes', 'Pale', 'Yellow'],
        "All of the outer PRs": [''],
        "Photoreceptor cell R1": [''],
        "Photoreceptor cell R2": [''],
        "Photoreceptor cell R3": [''],
        "Photoreceptor cell R4": [''],
        "Photoreceptor cell R5": [''],
        "Photoreceptor cell R6": [''],
        "Photoreceptor cell R7": ['All subtypes', 'Pale', 'Yellow'],
        "Photoreceptor cell R8": ['All subtypes', 'Pale', 'Yellow']
    };


    var subtvalue = {
        "Any PR": [''],
        "At least one outer PR": [''],
        "At least one inner PR": ['', 'p', 'y'],
        "All of the outer PRs": [''],
        "Photoreceptor cell R1": [''],
        "Photoreceptor cell R2": [''],
        "Photoreceptor cell R3": [''],
        "Photoreceptor cell R4": [''],
        "Photoreceptor cell R5": [''],
        "Photoreceptor cell R6": [''],
        "Photoreceptor cell R7": ['', 'p', 'y'],
        "Photoreceptor cell R8": ['', 'p', 'y']
    };

    if (!e) e = window.event;

    var trgtct2 = $(e.target);
    var clltype2 = trgtct2.find('option:selected').text();
    //console.log(clltype2);
    var nxtspeci = trgtct2.parent('div').nextAll('div').first();
    var nextcell2 = nxtspeci.children('select');
    var upspeci = nextcell2.empty();
    for (i in specitext[clltype2]) {
        var specs_name = specitext[clltype2][i];
        //console.log(specs_name);
        var specs_value = specivalue[clltype2][i];
        upspeci.append($('<option>').val(specs_value).text(specs_name));
    }
    var nxtsubt = nxtspeci.nextAll('div').first();
    var nextsubt2 = nxtsubt.children('select');
    var upsubt = nextsubt2.empty();
    for (i in subttext[clltype2]) {
        var subs_name = subttext[clltype2][i];
        var subs_value = subtvalue[clltype2][i];
        upsubt.append($('<option>').val(subs_value).text(subs_name));
    }
}

function updateselectsub(e) {
    var selspeci = {
        "All": ['All subtypes', 'Pale', 'Yellow'],
        "Dorsal 3rd": ['All subtypes', 'Pale', 'Yellow'],
        "Dorsal rim area": ['']
    };
    var selspecival = {
        "All": ['', 'p', 'y'],
        "Dorsal 3rd": ['', 'p', 'y'],
        "Dorsal rim area": ['']
    };
    if (!e) e = window.event;
    var trgtct3 = $(e.target);
    var subupt = trgtct3.find('option:selected').text();
    var nxtsubupt = trgtct3.parent('div').nextAll('div').first();
    var nxtsubupt2 = nxtsubupt.children('select');
    var upsubies = nxtsubupt2.empty();
    for (i in selspeci[subupt]) {
        var subis_name = selspeci[subupt][i];
        var subis_value = selspecival[subupt][i];
        upsubies.append($('<option>').val(subis_value).text(subis_name));
    }
}