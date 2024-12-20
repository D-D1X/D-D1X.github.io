let taskInput = document.getElementById("new-task"); // add new task
let addButton = document.getElementsByTagName("button")[0]; // first button
let incompleteTaskHolder = document.getElementById("incomplete-tasks"); // ul of incomplete tasks
let completedTaskHolder = document.getElementById("completed-tasks"); // completed tasks
let resetButton = document.getElementById("reset");

let createNewTaskElement = function (taskString) {
    let listItem = document.createElement("li");
    
    // input (checkbox)
    let checkBox = document.createElement("input");
    // label
    let label = document.createElement("label");
    // input (text)
    let editInput = document.createElement("input");
    // button.edit
    let editButton = document.createElement("button");
    // button.delete
    let deleteButton = document.createElement("button");
    
    label.innerText = taskString;
    
    // Each element needs appending
    checkBox.type = "checkbox";
    editInput.type = "text";
    
    // innerText encodes special characters, HTML does not.
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    
    // Append elements
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    return listItem;
}

let addTask = function () {
    let listItem = createNewTaskElement(taskInput.value);
    if (taskInput.value === "") {
        return;
    }
    // Append listItem to incompleteTaskHolder
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
    taskInput.value = "";
}

let taskCompleted = function () {
    // Append the task list item to the #completed-tasks
    let listItem = this.parentNode;
    completedTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

let taskIncomplete = function () {
    // Mark task as incomplete.
    // When the checkbox is unchecked
    // Append the task list item to the #incomplete-tasks.
    let listItem = this.parentNode;
    incompleteTaskHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

let bindTaskEvents = function (taskListItem, checkBoxEventHandler) {
    // select taskListItem's children
    let checkBox = taskListItem.querySelector("input[type=checkbox]");
    let editButton = taskListItem.querySelector("button.edit");
    let deleteButton = taskListItem.querySelector("button.delete");
    
    // bind editTask to edit button
    editButton.onclick = editTask;
    // bind deleteTask to delete button
    deleteButton.onclick = deleteTask;
    // bind checkBoxEventHandler to checkbox
    checkBox.onchange = checkBoxEventHandler;
}

let editTask = function () {
    let listItem = this.parentNode;
    let editInput = listItem.querySelector('input[type=text]');
    let label = listItem.querySelector("label");
    let containsClass = listItem.classList.contains("editMode");
    
    // If class of the parent is .editmode
    if (containsClass) {
        label.innerText = editInput.value;
    } else {
        editInput.value = label.innerText;
    }
    
    listItem.classList.toggle("editMode");
}

let deleteTask = function () {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    // Remove the parent list item from the ul.
    ul.removeChild(listItem);
}

addButton.addEventListener("click", addTask);
// addButton.addEventListener("click", ajaxRequest);

for (let i = 0; i < incompleteTaskHolder.children.length; i++) {
    bindTaskEvents(incompleteTaskHolder.children[i], taskIncomplete); // bind events to list items children
}

for (let i = 0; i < completedTaskHolder.children.length; i++) {
    bindTaskEvents(completedTaskHolder.children[i], taskCompleted); // bind events to list items children
}

resetButton.addEventListener("click", function() {
    taskInput.value = "";
    incompleteTaskHolder.innerHTML = "";
    completedTaskHolder.innerHTML = "";
});