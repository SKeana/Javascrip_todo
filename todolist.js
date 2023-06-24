document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    let tasks = [];
  
    addButton.addEventListener('click', addTask);
  
    renderTasks();
  
    function addTask() {
      const task = taskInput.value;
      if (task.trim() !== '') {
        if (tasks.length >= 5) {
          alert('You need to finish a task first before you can add another (You have 5 tasks, complete at least 1 before adding another)');
          return;
        }
        tasks.push(task);
        renderTasks();
        taskInput.value = '';
      }
    }
  
    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
          const listItem = document.createElement('li');
          listItem.textContent = task;
          taskList.appendChild(listItem);
        });
      }      
  });
  