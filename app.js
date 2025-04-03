// Default cleaning tasks
const defaultTasks = [
    "Cole's Laundry",
    "Kane's Laundry",
    "Bathroom (hallway)",
    "Bathroom (bedroom)",
    "Mop",
    "Sweep",
    "Cat litter boxes",
    "Dust bookcases",
    "Clean baseboards and wall",
    "clean ceiling fans",
    "Clean dishes"
  ];
  
  // Create a new task element with text and delete button
  function createTaskElement(taskText) {
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
      li.parentNode.removeChild(li);
    };
  
    li.appendChild(span);
    li.appendChild(deleteBtn);
    return li;
  }
  
  // Load default tasks into the list
  function loadDefaultTasks() {
    const taskList = document.getElementById('task-list');
    defaultTasks.forEach(task => {
      const li = createTaskElement(task);
      taskList.appendChild(li);
    });
  }
  
  function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const taskList = document.getElementById('task-list');
    const li = createTaskElement(taskText);
    taskList.appendChild(li);
    taskInput.value = '';
  }
  
  function clearTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  }
  
  // Load the default tasks when the page loads
  window.onload = loadDefaultTasks;
  