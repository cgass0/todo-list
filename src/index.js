import collapseMenu from './modules/collapse-menu';
import createProject from './modules/project-constructor';
import addNewProject from './modules/add-new-project.js';

// Side Bar Menu Collapse Function
const collapseButton = document.getElementById('side-bar-toggle');
collapseButton.addEventListener('click',collapseMenu);

// Display Add Project screen
const addProjectButton = document.getElementById('add-project-button');
addProjectButton.addEventListener('click',addNewProject);

// Projects Array
let myProjects = [];

// Call function to ceate new project and push to myProjects
function pushProject(Name, Description, Status, Id, Tasks) {
    myProjects.push(createProject(Name, Description, Status, Id, Tasks));
}









/*
pushProject("test", "2", 4, true, "fart");
pushProject(addProject("test2", "2", 4, true, "fart"));
console.log(myProjects);
console.log(myProjects[0]);
*/