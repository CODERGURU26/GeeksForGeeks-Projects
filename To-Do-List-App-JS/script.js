// Select elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const taskText = input.value.trim();
  if (taskText === "") return;

  // Create task row
  const li = document.createElement("li");

  // Task content (checkbox + text)
  const taskContent = document.createElement("div");
  taskContent.classList.add("task-content");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const span = document.createElement("span");
  span.textContent = taskText;

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
  });

  // Delete behavior
  delBtn.addEventListener("click", function () {
    li.remove();
  });

  // Build task row
  li.appendChild(taskContent);
  li.appendChild(delBtn);

  // Add to list
  list.appendChild(li);

  input.value = "";
});
