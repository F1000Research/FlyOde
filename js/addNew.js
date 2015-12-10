/**
 * Created by Begum Alaybeyoglu, 2014-2015..
 */
function addNew() {
    // Get the main Div in which all the other divs will be added
    var hovercontent = document.getElementById('hovercontent');

    // Create a new div for holding text and button input elements
    var newDiwbp = document.createElement('div');
    newDiwbp.style.display = "table-row";
    newDiwbp.setAttribute("id", "bools");
    var newDiwb = document.createElement('div');
    newDiwb.style.display = "table-cell";

    // Create a new select list
    var newDropdown = document.createElement('select');
    newDropdown.setAttribute("class", "bools");
    var option;
    /* create options elements */
    option = document.createElement("option");
    option.value = "AND";
    option.text = "AND";
    newDropdown.add(option);
    option = document.createElement("option");
    option.value = "OR";
    option.text = "OR";
    newDropdown.add(option);
    option = document.createElement("option");
    option.value = "NOT";
    option.text = "NOT";
    newDropdown.add(option);
    var x = newDropdown.children[0];
    x.setAttribute("selected", "selected");

    var newDiwd = document.createElement('div');
    newDiwd.style.display = "table-row";
    newDiwd.setAttribute("id", "rowhadd");

    var newDiw = document.createElement('div');
    newDiw.style.display = "table-cell";
    newDiw.setAttribute("id", "column");

    var newDiw2 = document.createElement('div');
    newDiw2.style.display = "table-cell";
    newDiw2.setAttribute("id", "column");

    var newDiw3 = document.createElement('div');
    newDiw3.style.display = "table-cell";
    newDiw3.setAttribute("id", "column");

    var newDiw4 = document.createElement('div');
    newDiw3.style.display = "table-cell";
    newDiw3.setAttribute("id", "column");

    var newDiw5 = document.createElement('div');
    newDiw5.style.display = "table-cell";
    newDiw5.setAttribute("id", "column");

    var newDiw6 = document.createElement('div');
    newDiw6.style.display = "table-cell";
    newDiw6.setAttribute("id", "column");

    var newDiw7 = document.createElement('div');
    newDiw7.style.display = "table-cell";
    newDiw7.setAttribute("id", "column");

    var newDiw8 = document.createElement('div');
    newDiw8.style.display = "table-cell";
    newDiw8.setAttribute("id", "column");

    var newDiw9 = document.createElement('div');
    newDiw9.style.display = "table-cell";

    var newDiw10 = document.createElement('div');
    newDiw10.style.display = "table-cell";

    var newDiw11 = document.createElement('div');
    newDiw11.style.display = "table-cell";
    newDiw11.setAttribute("id", "ORcolumn");

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
    //console.log(differenselect.length);
    if (value != differenselect.length) {
        var newDropdown2 = document.createElement('select');
        newDropdown2.setAttribute("class", "stage1");
        var newDropdown3 = document.createElement('select');
        newDropdown3.setAttribute("class", "stage2");
        var newDropdown6 = document.createElement('select');
        newDropdown6.setAttribute("class", "celltype1");
        var newDropdown7 = document.createElement('select');
        newDropdown7.setAttribute("class", "celltype2");
        var newDropdown8 = document.createElement('select');
        newDropdown8.setAttribute("class", "specialization");
        var newDropdown9 = document.createElement('select');
        newDropdown9.setAttribute("class", "subtypes");
    } else {
        var newDropdown2 = document.createElement('select');
        newDropdown2.setAttribute("class", "stage1");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Stage";
        newDropdown2.add(option);
        option = document.createElement("option");
        option.value = "i";
        option.text = "Larva";
        newDropdown2.add(option);
        option = document.createElement("option");
        option.value = "p";
        option.text = "Pupa";
        newDropdown2.add(option);
        option = document.createElement("option");
        option.value = "adult";
        option.text = "Adult";
        newDropdown2.add(option);
        var x = newDropdown2.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown3 = document.createElement('select');
        newDropdown3.setAttribute("class", "stage2");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Stage prefix";
        newDropdown3.add(option);
        var x = newDropdown3.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown6 = document.createElement('select');
        newDropdown6.setAttribute("class", "celltype1");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Cell type";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "PR";
        option.text = "Photoreceptor cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "glia";
        option.text = "Glia";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "_pigmentcell";
        option.text = "Pigment cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "preconecell";
        option.text = "Preconecell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "_conecell";
        option.text = "Cone cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "bristlecell";
        option.text = "Bristle cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "basalc";
        option.text = "Basal cell";
        newDropdown6.add(option);
        var x = newDropdown6.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown7 = document.createElement('select');
        newDropdown7.setAttribute("class", "celltype2");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Cell type 2";
        newDropdown7.add(option);
        var x = newDropdown7.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown8 = document.createElement('select');
        newDropdown8.setAttribute("class", "specialization");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Specialization";
        newDropdown8.add(option);
        var x = newDropdown8.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown9 = document.createElement('select');
        newDropdown9.setAttribute("class", "subtypes");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Subtype";
        newDropdown9.add(option);
        var x = newDropdown9.children[0];
        x.setAttribute("selected", "selected");
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
    //console.log(allstage1select.length);
    //console.log(value);
    if (value != allstage1select.length) {
        var newDropdown2 = document.createElement('select');
        newDropdown2.setAttribute("class", "stage1");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Stage";
        newDropdown2.add(option);
        option = document.createElement("option");
        option.value = "i";
        option.text = "Larva";
        newDropdown2.add(option);
        option = document.createElement("option");
        option.value = "p";
        option.text = "Pupa";
        newDropdown2.add(option);
        option = document.createElement("option");
        option.value = "adult";
        option.text = "Adult";
        newDropdown2.add(option);
        var x = newDropdown2.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown3 = document.createElement('select');
        newDropdown3.setAttribute("class", "stage2");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Stage prefix";
        newDropdown3.add(option);
        var x = newDropdown3.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown6 = document.createElement('select');
        newDropdown6.setAttribute("class", "celltype1");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Cell type";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "PR";
        option.text = "Photoreceptor cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "glia";
        option.text = "Glia";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "_pigmentcell";
        option.text = "Pigment cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "preconecell";
        option.text = "Preconecell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "_conecell";
        option.text = "Cone cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "bristlecell";
        option.text = "Bristle cell";
        newDropdown6.add(option);
        option = document.createElement("option");
        option.value = "basalc";
        option.text = "Basal cell";
        newDropdown6.add(option);
        var x = newDropdown6.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown7 = document.createElement('select');
        newDropdown7.setAttribute("class", "celltype2");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Cell type 2";
        newDropdown7.add(option);
        var x = newDropdown7.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown8 = document.createElement('select');
        newDropdown8.setAttribute("class", "specialization");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Specialization";
        newDropdown8.add(option);
        var x = newDropdown8.children[0];
        x.setAttribute("selected", "selected");

        var newDropdown9 = document.createElement('select');
        newDropdown9.setAttribute("class", "subtypes");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Subtype";
        newDropdown9.add(option);
        var x = newDropdown9.children[0];
        x.setAttribute("selected", "selected");
        var newDropdown4 = document.createElement('select');
        newDropdown4.setAttribute("class", "differentiation");
    } else {
        var newDropdown4 = document.createElement('select');
        newDropdown4.setAttribute("class", "differentiation");
        var option;
        option = document.createElement("option");
        option.value = "";
        option.text = "Differentiation level";
        newDropdown4.add(option);
        option = document.createElement("option");
        option.value = "inmf";
        option.text = "In morphogenetic furrow";
        newDropdown4.add(option);
        option = document.createElement("option");
        option.value = "antmf";
        option.text = "Anterior to morphogenetic furrow";
        newDropdown4.add(option);
        option = document.createElement("option");
        option.value = "iantmf";
        option.text = "Immediate anterior to morphogenetic furrow";
        newDropdown4.add(option);
        option = document.createElement("option");
        option.value = "postmf";
        option.text = "Posterior to morphogenetic furrow";
        newDropdown4.add(option);
        option = document.createElement("option");
        option.value = "proneural";
        option.text = "Proneural";
        newDropdown4.add(option);
        option = document.createElement("option");
        option.value = "preproneural";
        option.text = "Preproneural";
        newDropdown4.add(option);
        option = document.createElement("option");
        option.value = "intermediategroup";
        option.text = "Intermediate group";
        newDropdown4.add(option);
        var x = newDropdown4.children[0];
        x.setAttribute("selected", "selected");
    }

    var newOR = document.createElement('p');
    var newORtext = document.createTextNode('OR');
    newOR.appendChild(newORtext);

    // Create buttons for creating and removing inputs
    var newAddButton = document.createElement('input');
    newAddButton.type = "button";
    newAddButton.value = " + ";
    newAddButton.setAttribute("class", "addmore");

    var newDelButton = document.createElement('input');
    newDelButton.type = "button";
    newDelButton.value = " - ";
    newDelButton.setAttribute("class", "addmore");

    // Append elements to the newDiv
    newDiwb.appendChild(newDropdown);

    newDiw.appendChild(newDropdown2);
    newDiw2.appendChild(newDropdown3);

    newDiw5.appendChild(newDropdown6);
    newDiw6.appendChild(newDropdown7);
    newDiw7.appendChild(newDropdown8);
    newDiw8.appendChild(newDropdown9);
    newDiw11.appendChild(newOR);
    newDiw3.appendChild(newDropdown4);
    newDiw9.appendChild(newAddButton);
    newDiw10.appendChild(newDelButton);

    newDiwbp.appendChild(newDiwb);
    newDiwd.appendChild(newDiw);
    newDiwd.appendChild(newDiw2);

    newDiwd.appendChild(newDiw5);
    newDiwd.appendChild(newDiw6);
    newDiwd.appendChild(newDiw7);
    newDiwd.appendChild(newDiw8);
    newDiwd.appendChild(newDiw11);
    newDiwd.appendChild(newDiw3);
    newDiwd.appendChild(newDiw9);
    newDiwd.appendChild(newDiw10);

    // Append newDiv input to the mainContainer div
    hovercontent.appendChild(newDiwbp);
    hovercontent.appendChild(newDiwd);

    // Add a handler to button for deleting the newDiv from the mainContainer
    newAddButton.onclick = addNew;
    newDelButton.onclick = function () {
        hovercontent.removeChild(newDiwbp);
        hovercontent.removeChild(newDiwd);
    };
}