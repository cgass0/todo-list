// function to load existing project into the project form for updating

export default function loadProject(myProject, e) {

    

    let myProjects = myProject;
    const projectIconButtons = document.querySelectorAll(".project-icon");
    let taskList = myProjects[Array.from(projectIconButtons).indexOf(e.target)].Tasks;

    let nameSlot = document.getElementsByClassName('new-project-input')[0];
    let descSlot = document.getElementsByClassName('new-project-input')[1];
    
    // replace form inputs with the value of the myProjects saved info
    nameSlot.value = myProjects[Array.from(projectIconButtons).indexOf(e.target)].Name;
    descSlot.value = myProjects[Array.from(projectIconButtons).indexOf(e.target)].Description;

    let tasks = document.querySelectorAll('.new-task');
    let taskIndex = 0;
    tasks.forEach(task => {

        task.children.status.checked = taskList[taskIndex].status;
        task.children.taskName.value = taskList[taskIndex].taskName;
        task.children.taskDescription.value = taskList[taskIndex].taskDescription;
        task.children.priority.value = taskList[taskIndex].priority;
        task.children.dueDate.value = taskList[taskIndex].dueDate;

        taskIndex++;
    });

    console.log(myProjects[Array.from(projectIconButtons).indexOf(e.target)]);
    // update the current open project and save into myProjects
    const updateButton = document.getElementById('update-project-button');
    updateButton.addEventListener('click', () => {
        // replace the saved inputs with the new inputs
        myProjects[Array.from(projectIconButtons).indexOf(e.target)].Name = nameSlot.value;
        myProjects[Array.from(projectIconButtons).indexOf(e.target)].Description = descSlot.value;

        let taskIndex = 0;
        tasks.forEach(task => {

            taskList[taskIndex].status = task.children.status.checked
            taskList[taskIndex].taskName = task.children.taskName.value;
            taskList[taskIndex].taskDescription = task.children.taskDescription.value;
            taskList[taskIndex].priority = task.children.priority.value;
            taskList[taskIndex].dueDate = task.children.dueDate.value;

            taskIndex++;
        });

        console.log(myProjects[Array.from(projectIconButtons).indexOf(e.target)]);
    });

}
