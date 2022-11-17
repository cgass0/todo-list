// function to collapse/expand side bar menu on click
export default function collapseMenu() {
    
    if(document.getElementById('side-bar-toggle').classList.contains('collapse')) {
        
        document.getElementById('side-bar-toggle').classList.remove('collapse');
        document.getElementById('page-container').classList.remove('collapse');
        document.getElementById('add-project').classList.remove('collapse');
        document.getElementById('project-list').classList.remove('collapse');
        document.getElementById('project-add-container').classList.remove('collapse');
        document.getElementById('project-bar-container').classList.remove('collapse');

        let classItems = document.querySelectorAll('.item-tag, .side-bar-item, .project-bar-item');
        classItems.forEach(item => {
            item.classList.remove('collapse');
        });

    } else {
        
        document.getElementById('side-bar-toggle').classList.add('collapse');
        document.getElementById('page-container').classList.add('collapse');
        document.getElementById('add-project').classList.add('collapse');
        document.getElementById('project-list').classList.add('collapse');
        document.getElementById('project-add-container').classList.add('collapse');
        document.getElementById('project-bar-container').classList.add('collapse');

        let classItems = document.querySelectorAll('.item-tag, .side-bar-item, .project-bar-item');
        classItems.forEach(item => {
            item.classList.add('collapse');
        });
    };

}