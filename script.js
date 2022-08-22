function remove() {
    document.getElementById("first").classList.remove("First1");
    document.getElementById("second").classList.remove("Second1");
    document.getElementById("third").classList.remove("Third1");
    document.getElementById("first").classList.remove("First2");
    document.getElementById("second").classList.remove("Second2");
    document.getElementById("third").classList.remove("Third2");
}

const grid1 = document.querySelector(".grid1");
animateCSSGrid.wrapGrid(grid1, {
    duration: 600
});

const grid2 = document.querySelector(".grid2");
animateCSSGrid.wrapGrid(grid2, {
    duration: 600
});

const grid3 = document.querySelector(".grid3");
animateCSSGrid.wrapGrid(grid3, {
    duration: 600
});

function a1() {
    remove();
    document.getElementById("first").classList.add("First1");
}

function a2() {
    remove();
    document.getElementById("first").classList.add("First2");
}

function a3() {
    remove();
    document.getElementById("second").classList.add("Second1");
}

function a4() {
    remove();
    document.getElementById("second").classList.add("Second2");
}


function a5() {
    remove();
    document.getElementById("third").classList.add("Third1");
}

function a6() {
    remove();
    document.getElementById("third").classList.add("Third2");
}