import collapseMenu from './modules/collapse-menu';
import createProject from './modules/project-constructor';
import openProjectForm from './modules/project-form.js';
import renderSideBarProject from './modules/side-bar-project-add.js';

// Side Bar Menu Collapse Function
const collapseButton = document.getElementById('side-bar-toggle');
collapseButton.addEventListener('click',collapseMenu);

// Toggle Add Project screen
const addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click', function() {
    openProjectForm(true);
    addProjectButton.setAttribute("disabled", "disabled");
});

// Projects Array
let myProjects = [];

// Call function to ceate new Project object and push to myProjects
function pushProject(Name, Description, Status, Id, Tasks) {
    myProjects.push(createProject(Name, Description, Status, Id, Tasks));
}


function projectDetails () {
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

    pushProject(projectName.value, projectDescription.value, projectStatus, id, taskList);
    console.log(myProjects);
    renderSideBarProject(projectName.value);
}

// submit project button to get inputs and call pushProject on validation
document.addEventListener('click',function(e) {
    if(e.target && e.target.id == 'submit-project-button'){

        let breaker;
        document.getElementsByClassName('new-project-input')[0].reportValidity() == false ? breaker = false : ""; 

        document.querySelectorAll(".name").forEach(task => {
            task.reportValidity() == false ? breaker = false : "";
        }); 

        document.querySelectorAll(".date").forEach(task => {
            task.reportValidity() == false ? breaker = false : "";
        });
        
        if(breaker == false) {
            return
        } else {
            projectDetails();
            document.getElementById('content').innerHTML = "";
        }
    }

});
