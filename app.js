// Default cleaning tasks with frequency and optional subtasks
const defaultTasks = [
    { label: "Cole's Laundry", frequency: "daily" },
    { label: "Kane's Laundry", frequency: "daily" },
    { label: "Bathroom (hallway)", frequency: "weekly", subtasks: ["mirrors", "sinks", "bathtub", "floors"] },
    { label: "Bathroom (bedroom)", frequency: "weekly", subtasks: ["mirrors", "sinks", "bathtub", "floors"] },
    { label: "Mop", frequency: "weekly", subtasks: ["living room", "kitchen", "laundry room", "office"] },
    { label: "Sweep", frequency: "weekly", subtasks: ["living room", "kitchen", "laundry room", "office"] },
    { label: "Cat litter boxes", frequency: "daily" },
    { label: "Dust bookcases", frequency: "weekly" },
    { label: "Clean baseboards and wall", frequency: "weekly", subtasks: ["living room", "kitchen", "laundry room", "office"] },
    { label: "Clean ceiling fans", frequency: "weekly", subtasks: ["living room", "kitchen", "bedrooms", "office"] },
    { label: "Clean dishes", frequency: "daily" },
    { label: "Mowing", frequency: "monthly", subtasks: ["front yard", "back yard"] },
    { label: "Clean carpets", frequency: "monthly", subtasks: ["living room", "bedrooms"] },
    { label: "Shampoo carpets", frequency: "monthly", subtasks: ["living room", "bedrooms"] },
    { label: "Clean kitchen countertops", frequency: "weekly" },
    { label: "Clean washing machine", frequency: "monthly" },
    { label: "Clean refrigerator", frequency: "monthly" },
    { label: "Clean windows", frequency: "monthly" },
    { label: "Clean curtains", frequency: "monthly" }
  ];
  
  // Global variable to hold all tasks
  let tasksArray = [];
  
  // Save tasks to localStorage
  function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasksArray));
  }
  
  // Load tasks from localStorage or use defaultTasks if none exist
  function loadTasks() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      return JSON.parse(storedTasks);
    }
    return defaultTasks;
  }
  
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
  
  // Helper: Get the appropriate task list element based on frequency
  function getTaskListByFrequency(frequency) {
    switch (frequency.toLowerCase()) {
      case "daily":
        return document.getElementById('daily-task-list');
      case "weekly":
        return document.getElementById('weekly-task-list');
      case "monthly":
        return document.getElementById('monthly-task-list');
      default:
        return document.getElementById('daily-task-list');
    }
  }
  
  // Render tasks into their respective lists
  function renderTasks() {
    // First, clear all lists
    ['daily-task-list', 'weekly-task-list', 'monthly-task-list'].forEach(id => {
      document.getElementById(id).innerHTML = '';
    });
  
    // Add each task to the proper list
    tasksArray.forEach(task => {
      const li = createTaskElement(task);
      const list = getTaskListByFrequency(task.frequency);
      list.appendChild(li);
    });
  }
  
  // Add a new task (reads the category from the select dropdown)
  function addTask() {
    const taskInput = document.getElementById('new-task');
    const categorySelect = document.getElementById('task-category');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    
    const frequency = categorySelect.value; // "daily", "weekly", or "monthly"
    const newTask = { label: taskText, frequency: frequency };
    tasksArray.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
  }
  
  // Clear all tasks from all lists and localStorage
  function clearTasks() {
    tasksArray = [];
    saveTasks();
    renderTasks();
  }
  
  // Load tasks when the page loads
  window.onload = function() {
    tasksArray = loadTasks();
    renderTasks();
  };
  