const form = document.getElementById('create-task-form');
const taskList = document.getElementById('list-of-tasks');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const input = document.getElementById('new-task-input');
  const taskText = input.value.trim();

  if (taskText) {
    const li = document.createElement('li');
    li.textContent = taskText;
    taskList.appendChild(li);
    input.value = '';
  }
});
