import Form from "./Form.js"

let tasks = [
{
	text: "Take out trash",
	date: "Tuesday",
	reminder: false
},
{
	text: "Do homework",
	date: "Friday",
	reminder: true
},
{
	text: "Do dishes",
	date: "Wednesday",
	reminder: false
}
];


const btnClicked = () => {
	let open = toggleFormButton.innerText === "Close";
	toggleFormButton.innerText = open ? "Add" : "Close";
	toggleFormButton.style.background = open ? "lime" : "red";

	let form = document.getElementById("task-form");
	form.style.display = open ? "none" : "initial";
}

const toggleReminder = (id) => {
	tasks[id].reminder = !tasks[id].reminder;
	let list = document.getElementById("task-list");
	if(tasks[id].reminder === true) {
		if(list.childNodes[id].classList.contains("reminder") !== true) {
			list.childNodes[id].classList.add("reminder");
		}
	} else {
		if(list.childNodes[id].classList.contains("reminder") === true) {
			list.childNodes[id].classList.remove("reminder");
		}
	}
}

const deleteTask = (id) => {
	tasks.splice(id, 1);
	updateTasks(appContainer);
}


let appContainer = document.createElement("div");
appContainer.classList.add("root");

let header = document.createElement("div");
header.classList.add("header");

let title = document.createElement("h1");
let toggleFormButton = document.createElement("button");

toggleFormButton.classList.add("btn");
toggleFormButton.style.background= "lime";
title.innerText = "Task Tracker";
toggleFormButton.innerText = "Add";
toggleFormButton.onclick = btnClicked;


const updateTasks = (container) => {
let taskList = document.createElement("div");
taskList.id = "task-list";
for(let i = 0; i < tasks.length; i++) { // add each task to the list
	let newTask = document.createElement("div");
	let taskTitle = document.createElement("h3");
	let taskDate = document.createElement("p");
	let deleteButton = document.createElement("span");

	taskTitle.innerText = tasks[i].text;
	taskDate.innerText = tasks[i].date;
	deleteButton.innerText = "X";

	newTask.classList.add("task-element");
	if(tasks[i].reminder === true) {
		newTask.classList.add("reminder");
	}

	newTask.ondblclick = () => {toggleReminder(i)};
	deleteButton.onclick = () => {deleteTask(i)};

	taskTitle.appendChild(deleteButton);

	newTask.appendChild(taskTitle);
	newTask.appendChild(taskDate);
	
	taskList.appendChild(newTask);
}
if(tasks.length === 0) { // No Tasks to show
	let message = document.createElement("p");
	message.innerText = "No Tasks";
	taskList.appendChild(message);
}
let listElement = document.getElementById("task-list");
if(listElement !== null) container.removeChild(listElement);
container.appendChild(taskList);
}




header.appendChild(title);
header.appendChild(toggleFormButton);

appContainer.appendChild(header);
appContainer.appendChild(Form());
updateTasks(appContainer);

document.body.appendChild(appContainer);