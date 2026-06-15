const inp = document.querySelector(".inp1");
const inp2 = document.querySelector(".inp2");
const btn = document.querySelector(".get");
const todoBox = document.querySelector(".todo-list");
const update = document.querySelector(".updt");
const popup = document.querySelector(".popup");
const cancel = document.querySelector(".cncl");
let currentTask;


btn.addEventListener('click', () => {
    
    const value = inp.value;
    if(value.trim() === "") return;
    todoBox.innerHTML += `<div class="box2">
    <h3>${value}</h3>
    <div class="btns">
    <button class="btn edit">edit</button>
    <button class="btn del">delete</button>
    </div>
    </div>
    `
    inp.value = "";
});

todoBox.addEventListener("click", (event) => {
    if(event.target.classList.contains("del")){
        event.target.closest(".box2").remove()
    };
});

todoBox.addEventListener('click', (event) => {
    if(event.target.classList.contains("edit")){
        popup.style.display = "block";
        currentTask = event.target.closest(".box2").querySelector("h3");
        inp2.value = currentTask.textContent;
    };
    inp2.value = "";
    if(value.trim() === "") return;
});

update.addEventListener("click",(event) =>{
    const value = inp2.value;
    currentTask.textContent = value;
    popup.style.display = "none";

});

cancel.addEventListener('click', (event) => {

    popup.style.display = "none";
})

