// Select elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// ---- Save tasks to localStorage ----
function saveTasks() {
  const tasks = [];
  list.querySelectorAll("li").forEach(li => {
    const span = li.querySelector("span");
    const checkbox = li.querySelector("input[type='checkbox']");
    tasks.push({
      text: span.textContent,
      completed: checkbox.checked
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ---- Load tasks from localStorage ----
function loadTasks() {
  const stored = JSON.parse(localStorage.getItem("tasks")) || [];
  stored.forEach(task => createTask(task.text, task.completed));
}

// ---- Create task function ----
function createTask(taskText, completed = false) {
  const li = document.createElement("li");

  // Task content
  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = completed;

  const span = document.createElement("span");
  span.textContent = taskText;

  // Apply completed style if needed
  if (completed) {
    span.style.textDecoration = "line-through";
    span.style.color = "gray";
  }

  taskContent.appendChild(checkbox);
  taskContent.appendChild(span);

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete-btn");

  // Checkbox behavior
  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      span.style.color = "gray";
    } else {
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
    saveTasks();
  });

  // Delete behavior
  delBtn.addEventListener("click", function () {
    li.remove();
    saveTasks();
  });

  // Build task row
  li.appendChild(taskContent);
  li.appendChild(delBtn);

  // Add to list
  list.appendChild(li);

  saveTasks();
}

// ---- Form submit ----
form.addEventListener("submit", function(event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  createTask(taskText);

  input.value = "";
});

// ---- Run on page load ----
loadTasks();
