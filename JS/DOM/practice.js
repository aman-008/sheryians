// const inp = document.querySelector("input");
// const btn = document.querySelector("button");
// const div = document.querySelector(".box")

// btn.addEventListener('click', () => {
//     div.appendChild('inp.value')
// });

const main = document.querySelector("main");
const box1 = document.createElement("div");
const box2 = document.createElement("div");
const box3 = document.createElement("div");

box1.classList.add("box");
box1.style.backgroundColor = "red";

box2.classList.add("box");
box2.style.backgroundColor = "yellow";

box3.classList.add("box");
box3.style.backgroundColor = "blue";

main.append(box1, box2, box3);

// main.prepend(box3)

// box1.before(box3);

// main.replaceChild(box3,box1)

// box1.replaceWith(box2)