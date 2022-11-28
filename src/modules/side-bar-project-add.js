// render the projects icon on the side bar with project name

export default function renderSideBarProject(projectName) {

    const projectList = document.getElementById('project-list');

    const newProjectLink = document.createElement('div');
    newProjectLink.classList.add('project-bar-item');
    projectList.append(newProjectLink);

    const img = document.createElement('img');
    img.classList.add('icon', 'project-icon');
    img.setAttribute("src", "/src/img/project.png")
    img.setAttribute('alt', 'project icon');
    newProjectLink.append(img);

    const p = document.createElement('p');
    p.classList.add('item-tag');
    p.textContent = projectName;
    newProjectLink.append(p);
}