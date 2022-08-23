var cur = 'grid1';
var temp = 'null';
var init = 'g1'

function clickCol(col) {
    var a = col;
    document.getElementById(cur).classList.remove("grow");
    document.getElementById(a).classList.add("grow");
    temp = a;
    a = cur;
    cur = temp;
}

function clickDiv(div) {
    var b = div;
    document.getElementById(init).classList.remove("grow");
    document.getElementById(b).classList.add("grow");
    temp = b;
    b = init;
    init = temp;
}