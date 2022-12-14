// generate dom elements for new project form

const content = document.getElementById('content');

export default function openProjectForm(isNewProject, numberOfTasks) {

    content.innerHTML = "";

    const newForm = document.createElement('div');
    newForm.classList.add('form-popup');
    newForm.setAttribute('id', 'myProjectForm');
    content.append(newForm);

    const formTitle = document.createElement('h1');
    if (isNewProject == true){
        formTitle.textContent = "Start A New Project";
    } else {
        formTitle.textContent = "Edit Project";
    }

    newForm.append(formTitle);
    const formContainer = document.createElement('form');
    formContainer.classList.add('form-container');
    newForm.appendChild(formContainer);

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = "Project Name";
    formContainer.append(nameLabel);

    const nameInput = document.createElement('input');
    nameInput.classList.add('new-project-input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Enter Project Name: Max 15 char');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('max-length', '15');
    nameInput.setAttribute('pattern', '.{0,15}');
    nameInput.setAttribute('required', '');
    formContainer.append(nameInput);

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = "Description";
    formContainer.append(descriptionLabel);

    const descriptionArea = document.createElement('textarea');
    descriptionArea.classList.add('new-project-input');
    descriptionArea.setAttribute('type', 'text');
    descriptionArea.setAttribute('placeholder', 'Enter Project Description');
    descriptionArea.setAttribute('name', 'description');
    formContainer.append(descriptionArea);

    const tasksLabel = document.createElement('label');
    tasksLabel.setAttribute('for', 'tasks');
    tasksLabel.textContent = "Tasks";
    formContainer.append(tasksLabel);

    const taskContainer = document.createElement('div');
    taskContainer.classList.add('new-project-tasks-container');
    formContainer.append(taskContainer);

    const taskAddWrap = document.createElement('div');
    taskAddWrap.classList.add('add-wrap');
    formContainer.append(taskAddWrap);

    const addTaskImg = document.createElement('img');
    addTaskImg.setAttribute('id', 'add-task-new-project');
    addTaskImg.classList.add('icon');
    addTaskImg.setAttribute('src', '/src/img/add-project.png');
    addTaskImg.setAttribute('alt', 'add button');
    taskAddWrap.append(addTaskImg);

    // function for adding new tasks
    addTaskImg.addEventListener('click', addTask); 
    
    function addTask() {

        const newTask = document.createElement('div');
        newTask.classList.add('new-task');
        taskContainer.append(newTask);

        const statusBox = document.createElement('input');
        statusBox.classList.add('task-inputs', 'status');
        statusBox.type = "checkbox";
        statusBox.setAttribute('name', 'status');
        statusBox.value = statusBox.checked;
        newTask.append(statusBox);

        const taskNameInput = document.createElement('input');
        taskNameInput.classList.add('task-inputs', 'name');
        taskNameInput.setAttribute('type', 'text');
        taskNameInput.setAttribute('placeholder', 'Enter Task*');
        taskNameInput.setAttribute('name', 'taskName');
        taskNameInput.setAttribute('required', '');
        newTask.append(taskNameInput);

        const taskDescriptionInput = document.createElement('textarea');
        taskDescriptionInput.classList.add('task-inputs', 'description');
        taskDescriptionInput.setAttribute('placeholder', 'Enter Description');
        taskDescriptionInput.setAttribute('name', 'taskDescription');
        newTask.append(taskDescriptionInput);

        const taskPrioritySelector = document.createElement('select');
        taskPrioritySelector.classList.add('task-inputs', 'priority');
        taskPrioritySelector.setAttribute('name', 'priority');
        newTask.append(taskPrioritySelector);

        const priorityOption0 = document.createElement('option');
        priorityOption0.setAttribute('value', '');
        priorityOption0.setAttribute('selected', '');
        priorityOption0.setAttribute('disabeled', '');
        priorityOption0.setAttribute('hidden', '');
        priorityOption0.textContent = "Priority Level";
        taskPrioritySelector.append(priorityOption0);

        const priorityOption1 = document.createElement('option');
        priorityOption1.setAttribute('value', '1');
        priorityOption1.textContent = "Low";
        taskPrioritySelector.append(priorityOption1);

        const priorityOption2 = document.createElement('option');
        priorityOption2.setAttribute('value', '2');
        priorityOption2.textContent = "medium";
        taskPrioritySelector.append(priorityOption2);

        const priorityOption3 = document.createElement('option');
        priorityOption3.setAttribute('value', '3');
        priorityOption3.textContent = "High";
        taskPrioritySelector.append(priorityOption3);

        const taskDateInput = document.createElement('input');
        taskDateInput.classList.add('task-inputs', 'date');
        taskDateInput.setAttribute('type', 'date');
        taskDateInput.setAttribute('name', 'dueDate');
        taskDateInput.setAttribute('required', '');
        newTask.append(taskDateInput);
    }
    // Add tasks inputs based on the number of tasks needed
    for (let i = 1; i <= numberOfTasks; i++) {
        addTask();
    }
    
    const addTaskTitle = document.createElement('p');
    addTaskTitle.textContent = "Add A New Task";
    taskAddWrap.append(addTaskTitle);

    const buttonWrap = document.createElement('div');
    buttonWrap .classList.add('button-wrap');
    formContainer.append(buttonWrap);

    const submitProjectButton = document.createElement('button');
    submitProjectButton.classList.add('btn');
    submitProjectButton.setAttribute('type', 'button');
    if (isNewProject == true){
        submitProjectButton.textContent = "Create Project";
        submitProjectButton.setAttribute('id', 'submit-project-button');
    } else {
        submitProjectButton.textContent = "Update Project";
        submitProjectButton.setAttribute('id', 'update-project-button');
    }
    buttonWrap.append(submitProjectButton);

    const closeFormButton = document.createElement('button');
    closeFormButton.classList.add('btn', 'cancel');
    closeFormButton.setAttribute('id', 'close-project-button');
    closeFormButton.textContent = "Close";
    buttonWrap.append(closeFormButton);
    // function for closing the form with "Close" button
    closeFormButton.addEventListener('click',function() {content.innerHTML = ""});

}

