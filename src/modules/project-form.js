// generate dom elements for new project form

const content = document.getElementById('content');

export default function openProjectForm(isNewProject) {

        const newForm = document.createElement('div');
        newForm.classList.add('form-popup');
        newForm.setAttribute('id', 'myProjectForm');
        content.append(newForm);
        newForm.style.display = "flex";

        const formContainer = document.createElement('div');
        formContainer.classList.add('form-container');
        newForm.append(formContainer);

        const formTitle = document.createElement('h1');
        
        if (isNewProject == true){
            formTitle.textContent = "Start A New Project";
        } else {
            formTitle.textContent = "Edit Project";
        }
        formContainer.append(formTitle);

        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'name');
        nameLabel.textContent = "Project Name";
        formContainer.append(nameLabel);

        const nameInput = document.createElement('input');
        nameInput.classList.add('new-project-input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('placeholder', 'Enter Project Name');
        nameInput.setAttribute('name', 'name');
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

        const newTask = document.createElement('div');
        newTask.classList.add('new-task');
        taskContainer.append(newTask);

        const taskNameInput = document.createElement('input');
        taskNameInput.classList.add('task-inputs', 'name');
        taskNameInput.setAttribute('type', 'text');
        taskNameInput.setAttribute('placeholder', 'Enter Task*');
        taskNameInput.setAttribute('name', 'task');
        taskNameInput.setAttribute('required', '');
        newTask.append(taskNameInput);

        const taskDescriptionInput = document.createElement('textarea');
        taskDescriptionInput.classList.add('task-inputs', 'description');
        taskDescriptionInput.setAttribute('placeholder', 'Enter Description');
        taskDescriptionInput.setAttribute('name', 'task description');
        newTask.append(taskDescriptionInput);

        const taskPrioritySelector = document.createElement('select');
        taskPrioritySelector.classList.add('task-inputs', 'priority');
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
        taskDateInput.setAttribute('required', '');
        newTask.append(taskDateInput);

        const taskAddWrap = document.createElement('div');
        taskAddWrap.classList.add('add-wrap');
        formContainer.append(taskAddWrap);

        const addTaskImg = document.createElement('img');
        addTaskImg.setAttribute('id', 'add-task-new-project');
        addTaskImg.classList.add('icon');
        addTaskImg.setAttribute('src', '/src/img/add-project.png');
        addTaskImg.setAttribute('alt', 'add button');
        taskAddWrap.append(addTaskImg);

        const addTaskTitle = document.createElement('p');
        addTaskTitle.textContent = "Add A New Task";
        taskAddWrap.append(addTaskTitle);

        const buttonWrap = document.createElement('div');
        buttonWrap .classList.add('button-wrap');
        formContainer.append(buttonWrap);

        const submitProjectButton = document.createElement('button');
        submitProjectButton.classList.add('btn');
        submitProjectButton.setAttribute('type', 'submit');
        if (isNewProject == true){
            submitProjectButton.textContent = "Create Project";
        } else {
            submitProjectButton.textContent = "Update Project";
        }
        buttonWrap.append(submitProjectButton);

        const closeFormButton = document.createElement('button');
        closeFormButton.classList.add('btn', 'cancel');
        closeFormButton.setAttribute('id', 'close-project-button');
        closeFormButton.textContent = "Close";
        buttonWrap.append(closeFormButton);
        closeFormButton.addEventListener('click',function() {content.innerHTML = ""});
}

