const input = document.getElementById("task");
const list = document.getElementById("taskList");

function addTask() {
  const task = input.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.push({ text: task, done: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  render();
}

function render() {
  list.innerHTML = "";
  const tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
  tasks.forEach((t, i) => {
    const li = document.createElement("li");
    li.textContent = t.text;
    li.style.textDecoration = t.done ? "line-through" : "none";
    li.onclick = () => {
      tasks[i].done = !tasks[i].done;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      render();
    };
    list.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", render);