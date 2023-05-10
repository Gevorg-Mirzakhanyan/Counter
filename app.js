
let countEl = document.getElementById("count-el");

let count = 0;

function decrement() {
    count = count - 1
    countEl.innerText = count;
}

function increment() {
    count = count + 1
    countEl.innerText = count;
}

function reset() {
    count = 0
    countEl.innerText = count
}