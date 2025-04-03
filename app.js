// Default cleaning tasks with optional subtasks
const defaultTasks = [
    { label: "Cole's Laundry" },
    { label: "Kane's Laundry" },
    { label: "Bathroom (hallway)", subtasks: ["mirrors", "sinks", "bathtub", "floors"] },
    { label: "Bathroom (bedroom)", subtasks: ["mirrors", "sinks", "bathtub", "floors"] },
    { label: "Mop", subtasks: ["living room", "kitchen", "laundry room", "office"] },
    { label: "Sweep", subtasks: ["living room", "kitchen", "laundry room", "office"] },
    { label: "Cat litter boxes" },
    { label: "Dust bookcases" },
    { label: "Clean baseboards and wall", subtasks: ["living room", "kitchen", "laundry room", "office"] },
    { label: "clean ceiling fans", subtasks: ["living room", "kitchen", "bedrooms", "office"] },
    { label: "Clean dishes" }
    { label: "Mowing", subtasks: ["front yard", "back yard"] }
    { label: "Clean carpets",  subtasks:  ["living room", "bedrooms"] },
    { label: "Shampoo carpets", subtasks: ["living room", "bedrooms"] },
    { label: "Clean kitchen countertops" },
    { label: "Clean washing machine" },
    { label: "Clean refrigerator" },
    { label: "Clean windows" },
    { label: "Clean curtains" },
  ];
  
  // Helper: Create a subtask element without a delete button
  function createSubTaskElement(subtaskText) {
    const li = document.createElement('li');
    li.classList.add('subtask-item');
  
    const span = document.createElement('span');
    // Prepend a dash to indicate it's a micro-label
    span.textContent = "- " + subtaskText;
    span.onclick = () => {
      span.classList.toggle('done');
    };
  
    li.appendChild(span);
    return li;
  }
  
  // Helper: Create a main task element (with optional subtasks) without a delete button
  function createTaskElement(task) {
    const li = document.createElement('li');
  
    // Create span for main task label
    const span = document.createElement('span');
    span.textContent = task.label;
    span.onclick = () => {
      span.classList.toggle('done');
    };
  
    li.appendChild(span);
  
    // If subtasks exist, create a nested list
    if (task.subtasks && Array.isArray(task.subtasks)) {
      const subList = document.createElement('ul');
      subList.classList.add('subtask-list');
      task.subtasks.forEach(subtask => {
        const subLi = createSubTaskElement(subtask);
        subList.appendChild(subLi);
      });
      li.appendChild(subList);
    }
  
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
  
  // Add a new task (as a simple task without subtasks)
  function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
  
    const taskList = document.getElementById('task-list');
    // Create a task object without subtasks
    const task = { label: taskText };
    const li = createTaskElement(task);
    taskList.appendChild(li);
    taskInput.value = '';
  }
  
  // Clear all tasks from the list
  function clearTasks() {
    const taskList = document.getElementById('task-list');
    taskList.innerHTML = '';
  }
  
  // Load the default tasks when the page loads
  window.onload = loadDefaultTasks;
  