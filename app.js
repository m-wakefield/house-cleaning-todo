function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const taskList = document.getElementById('task-list');
    const li = document.createElement('li');
  
    // Create span for task text
    const span = document.createElement('span');
    span.textContent = taskText;
    span.onclick = () => {
      span.classList.toggle('done');
    };
  
    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => {
      taskList.removeChild(li);
    };
  
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    taskInput.value = '';
  }
  
  function clearTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  }
  