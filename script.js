var taskInput = document.getElementById('task-input');
var taskList = document.getElementById('task-list');
var completeTaskList = document.getElementById('completed-task-list')


function addTask() {
    var newTask = document.createElement('div');
    var Task = document.createElement('h2');
    var removeBtn = document.createElement('button');
    var completeBtn = document.createElement('input');

    completeBtn.setAttribute("type","checkbox",)
    completeBtn.id = "checkbox"

    Task.innerHTML = taskInput.value;
    taskInput.value = '';

    //CSS
    newTask.classList.add('taskList');
    Task.classList.add('taskList-h2');
    completeBtn.classList.add('checklist-button');

    newTask.append(removeBtn);
    newTask.append(Task);
    newTask.append(completeBtn);

    removeBtn.innerHTML = "Del";
    removeBtn.onclick = removeTask;

    completeBtn.onclick = completeTask;
    taskList.append(newTask);
    
}

function removeTask() {
    console.log('its working');
    console.log(this.parentNode);
    var Parent = this.parentNode;
    // taskList.removeChild(Parent);
    Parent.remove();
}

function completeTask() {
    console.log('its working');
    console.log(this.parentNode);
    

    var checkbox = document.getElementById('checkbox');
    console.log(checkbox);
    if (checkbox.checked == 1) {
        completeTaskList.append(this.parentNode);
    } else {
        taskList.append(this.parentNode);
    }
    


}
