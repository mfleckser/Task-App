const onSubmit = (form) => {
	let text = form.text.value;
	if(text === "") { // empty input
		alert("Please enter your task.");
		return
	}
	let date = form.date.value;
	let reminder = form.reminder.checked;

	tasks.push({
		text: text,
		date: date,
		reminder: reminder
	});
	updateTasks(appContainer);

	form.reset();
}

const Form = () => {
	let form = document.createElement("form");
	form.id = "task-form";
	form.style.display = "none";

	let textContainer = document.createElement("div");
	let dateContainer = document.createElement("div");
	let reminderContainer = document.createElement("div");

	textContainer.classList.add("form-container");
	dateContainer.classList.add("form-container");
	reminderContainer.classList.add("form-container");
	reminderContainer.classList.add("form-container-check");
	
	let textInput = document.createElement("input");
	let textLabel = document.createElement("label");
	let dateInput = document.createElement("input");
	let dateLabel = document.createElement("label");
	let reminderInput = document.createElement("input");
	let reminderLabel = document.createElement("label");
	let submitButton = document.createElement("input");

	submitButton.classList.add("btn");
	submitButton.classList.add("submit-button");

	textInput.type = "text";
	dateInput.type = "text";
	reminderInput.type = "checkbox";
	submitButton.type = "button";

	textLabel.innerText = "Task";
	dateLabel.innerText = "Date";
	reminderLabel.innerText = "Set Reminder";

	textInput.name = "text";
	dateInput.name = "date";
	reminderInput.name = "reminder";

	textInput.placeholder = "Add Task";
	dateInput.placeholder = "Add Date";

	submitButton.name = "submit";
	submitButton.value = "Save Task";
	submitButton.onclick = () => {onSubmit(form)};

	textContainer.appendChild(textLabel);
	textContainer.appendChild(textInput);
	dateContainer.appendChild(dateLabel);
	dateContainer.appendChild(dateInput);
	reminderContainer.appendChild(reminderLabel);
	reminderContainer.appendChild(reminderInput);

	form.appendChild(textContainer);
	form.appendChild(dateContainer);
	form.appendChild(reminderContainer);
	form.appendChild(submitButton);

	
	return form
}

export default Form