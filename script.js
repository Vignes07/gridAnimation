function remove() {
    document.getElementById("parent").classList.remove("parent1")
    document.getElementById("parent").classList.remove("parent2")
    document.getElementById("parent").classList.remove("parent3")
    document.getElementById("first").classList.remove("First1");
    document.getElementById("second").classList.remove("Second1");
    document.getElementById("third").classList.remove("Third1");
    document.getElementById("first").classList.remove("First2");
    document.getElementById("second").classList.remove("Second2");
    document.getElementById("third").classList.remove("Third2");
}

const first = document.querySelector(".first");
animateCSSGrid.wrapGrid(first, {
    duration: 600
});

const second = document.querySelector(".second");
animateCSSGrid.wrapGrid(second, {
    duration: 600
});

const third = document.querySelector(".third");
animateCSSGrid.wrapGrid(third, {
    duration: 600
});

function a1() {
    remove();
    document.getElementById("parent").classList.add("parent1");
    document.getElementById("first").classList.add("First1");
}

function a2() {
    remove();
    document.getElementById("parent").classList.add("parent1");
    document.getElementById("first").classList.add("First2");
}

function a3() {
    remove();
    document.getElementById("parent").classList.add("parent2");
    document.getElementById("second").classList.add("Second1");
}

function a4() {
    remove();
    document.getElementById("parent").classList.add("parent2");
    document.getElementById("second").classList.add("Second2");
}


function a5() {
    remove();
    document.getElementById("parent").classList.add("parent3");
    document.getElementById("third").classList.add("Third1");
}

function a6() {
    remove();
    document.getElementById("parent").classList.add("parent3");
    document.getElementById("third").classList.add("Third2");
}