// Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (name === "" || email === "" || message === "") {
    formMessage.textContent = "All fields are required.";
    formMessage.style.color = "red";
  } else if (!email.includes("@")) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
  } else {
    formMessage.textContent = "Message sent successfully!";
    formMessage.style.color = "green";
    this.reset();
  }
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("todoInput");
  const task = taskInput.value.trim();
  const list = document.getElementById("todoList");

  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "❌";
    removeBtn.style.marginLeft = "10px";
    removeBtn.onclick = () => li.remove();

    li.appendChild(removeBtn);
    list.appendChild(li);

    taskInput.value = "";
  }
}
