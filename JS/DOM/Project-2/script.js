const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");
const filterBtns = document.querySelectorAll("[data-filter]");

addBtn.addEventListener("click", addTask);

function addTask() {
  const value = taskInput.value.trim();

  if (!value) return;

  const li = document.createElement("li");

  li.className = "task";
  li.innerHTML = `
      <span>${value}</span>

      <div class="actions">
        <button class="complete">✓</button>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
  `;

  taskList.appendChild(li);

  taskInput.value = "";
}

taskList.addEventListener("click", (e) => {

  const task = e.target.closest(".task");

  if (e.target.classList.contains("delete")) {
    task.remove();
  }

  if (e.target.classList.contains("complete")) {
    task.querySelector("span").classList.toggle("completed");
  }

  if (e.target.classList.contains("edit")) {

    const span = task.querySelector("span");

    const updated = prompt("Edit Task", span.textContent);

    if (updated) {
      span.textContent = updated;
    }
  }
});

filterBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    const filter = btn.dataset.filter;

    document.querySelectorAll(".task").forEach(task => {

      const completed =
      task.querySelector("span").classList.contains("completed");

      if(filter === "all"){
        task.style.display = "flex";
      }

      else if(filter === "completed"){
        task.style.display = completed ? "flex" : "none";
      }

      else if(filter === "pending"){
        task.style.display = completed ? "none" : "flex";
      }

    });

  });

});