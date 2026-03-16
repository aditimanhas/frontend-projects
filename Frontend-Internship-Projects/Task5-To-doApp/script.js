function addTask(){

let input = document.getElementById("taskInput");

let text = input.value.trim();

if(text === ""){

alert("Please enter a task");

return;

}

let li = document.createElement("li");

let span = document.createElement("span");

span.textContent = text;

span.onclick = function(){

span.classList.toggle("completed");

};

let btnDiv = document.createElement("div");

btnDiv.className = "task-buttons";

let editBtn = document.createElement("button");

editBtn.textContent = "Edit";

editBtn.onclick = function(){

let newTask = prompt("Edit task", span.textContent);

if(newTask){

span.textContent = newTask;

}

};

let deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.onclick = function(){

li.remove();

};

btnDiv.appendChild(editBtn);

btnDiv.appendChild(deleteBtn);

li.appendChild(span);

li.appendChild(btnDiv);

document.getElementById("taskList").appendChild(li);

input.value="";

}