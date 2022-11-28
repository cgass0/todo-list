import collapseMenu from './modules/collapse-menu';
import createProject from './modules/project-constructor';
import openProjectForm from './modules/project-form.js';
import renderSideBarProject from './modules/side-bar-project-add.js';
import inputValidation from './modules/project-input-validation';
import loadProject from './modules/load-project-form';
import updateProject from './modules/update-project';


// Projects Array and Content element
let myProjects = [];
const content = document.getElementById('content');

// Side Bar Menu Collapse Function
const collapseButton = document.getElementById('side-bar-toggle');
collapseButton.addEventListener('click',collapseMenu);

// Toggle Add Project screen
const addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', function() {
    if (content.childNodes.length == 0) {
        openProjectForm(true, 1);
    } else {
        const response = confirm("This action will cause your current form to close and unsaved information will be lost. Do you wish to close the tab?");
        response == true ? openProjectForm(true, 1) : "";
    }
});

// retrieve inputs from project Form 
function projectDetails(isNewProject) {
    let projectName = document.getElementsByClassName('new-project-input')[0];
    let projectDescription = document.getElementsByClassName('new-project-input')[1];
    let id = myProjects.length;

    let taskList = [];
    let tasks = document.querySelectorAll('.new-task');
    tasks.forEach(task => {
        let obj = {};
        task.querySelectorAll(".task-inputs").forEach(ele => obj[ele.name] = ele.checked || ele.value || "");
        taskList.push(obj);
    });

    let projectStatus;
    taskList.some(task => {
        task.status == true ? "" : projectStatus = false;
        projectStatus == undefined ? projectStatus = true : "";
    });

    // if a new project, push to array and render side bar link
    if (isNewProject == true) {
        myProjects.push(createProject(projectName.value, projectDescription.value, projectStatus, id, taskList));
        renderSideBarProject(projectName.value);
        content.innerHTML = "";
    }
}

// submit project button to get inputs and call pushProject on validation
document.addEventListener('click',function(e) {
    if(e.target && e.target.id == 'submit-project-button') {
        inputValidation() == true ? projectDetails(true) : "";
    }
});

// event for project icon open
document.addEventListener('click',function(e) {
    if(e.target && e.target.classList.contains('project-icon')) {
        const projectIconButtons = document.querySelectorAll(".project-icon");
        let numberOfTasks = myProjects[Array.from(projectIconButtons).indexOf(e.target)].Tasks.length;

        if (content.childNodes.length == 0) {
            openProjectForm(false, numberOfTasks);
            loadProject(myProjects, e);
        } else {
            const response = confirm("This action will cause your current form to close and unsaved information will be lost. Do you wish to close the tab?");
            if (response == true) {
                openProjectForm(false, numberOfTasks);
                loadProject(myProjects, e);
            } 
        }
    }
}); 







// dummy projects
let dummyTaskList = [{
    "status" : false,
    "taskName" : "Task 1",
    "taskDescription" : "Description of task",
    "priority" : "2",
    "dueDate" : "2022-11-09"
},{
    "status" : true,
    "taskName" : "Task 2",
    "taskDescription" : "Description of task",
    "priority" : "1",
    "dueDate" : "2022-11-11"
}];

myProjects.push(createProject("Project 1", "Desription 1", false, 0, dummyTaskList));
renderSideBarProject("Project 1");

myProjects.push(createProject("Project 2", "Desription 2", false, 1, dummyTaskList));
renderSideBarProject("Project 2");
