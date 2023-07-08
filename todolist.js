document.addEventListener('DOMContentLoaded', function() {
  const addButton = document.getElementById('addButton');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const userInfoContainer = document.getElementById('userInfoContainer');
  const usernameDisplay = document.getElementById('usernameDisplay');
  const logoutButton = document.getElementById('logoutButton');

  let tasks = [];

  addButton.addEventListener('click', addTask);
  logoutButton.addEventListener('click', logout);

  renderTasks();
  renderUserInfo();

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

  function renderUserInfo() {
      const loggedInUser = localStorage.getItem("userInfo");
      if (loggedInUser) {
          const userInfo = JSON.parse(loggedInUser);
          const username = userInfo.username;
          usernameDisplay.textContent = username;
      } else {
          window.location.href = "login.html";
      }
  }

  function logout() {
      localStorage.removeItem("userInfo");
      window.location.href = "login.html";
  }
  document.getElementById("registerButton").addEventListener("click", function() {
    window.location.href = "register.html";
});

});
