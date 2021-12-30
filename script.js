let tasks = document.getElementsByClassName("task");

for (let i = 0; i < tasks.length; i++) {
  tasks[i].textContent = "TASK #" + (i + 1);
}
