
var listHolder = document.getElementById('list-holder');

var taskInput = document.getElementById('task-input');


function addTasks() {
    var taskList = document.createElement('div');
    var taskTitle = document.createElement('h1');
    taskTitle.innerHTML = taskInput.value;

    var taskBtn = document.createElement('button');
    taskBtn.innerHTML = 'Done';
    taskBtn.onclick = checkTask;

    taskList.append(taskTitle);
    taskList.append(taskBtn);

    listHolder.append(taskList);

    

    
    taskInput.value = '';

    
}

function checkTask() {
    console.log(this.parentNode);
    var parentDiv = this.parentNode;
}