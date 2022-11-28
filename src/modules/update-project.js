// function to load existing project into the project form for updating

export default function updateProject(myProject, e) {

    console.log(e.target.parentNode.parentNode);

    let myProjects = myProject;
    console.log(myProjects);

    /*

    
    const projectIconButtons = document.querySelectorAll(".project-icon");
    //let taskList = myProjects[Array.from(projectIconButtons).indexOf(e.target)].Tasks;

    let nameSlot = document.getElementsByClassName('new-project-input')[0];
    let descSlot = document.getElementsByClassName('new-project-input')[1];
    
    // replace the saved inpus with the new inputs
    myProjects[Array.from(projectIconButtons).indexOf(e.target)].Name = nameSlot.value;
    myProjects[Array.from(projectIconButtons).indexOf(e.target)].Description = descSlot.value;

    let tasks = document.querySelectorAll('.new-task');
    let taskIndex = 0;
    tasks.forEach(task => {

        taskList[taskIndex].status = task.children.status.checked
        taskList[taskIndex].taskName = task.children.taskName.value;
        taskList[taskIndex].taskDescription = task.children.taskDescription.value;
        taskList[taskIndex].priority = task.children.priority.value;
        taskList[taskIndex].dueDate = task.children.dueDate.value;

        taskIndex++;
    });

    console.log(myProjects);
    */
}