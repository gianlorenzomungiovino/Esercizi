const ul = document.querySelector("ul");

const body = ul.parentElement;
console.log(body);

const liSecond = ul.children[1];
console.log(liSecond.innerHTML);

const next = liSecond.nextElementSibling;
console.log(next.innerHTML);

const previous = liSecond.previousElementSibling;
console.log(previous.innerHTML);