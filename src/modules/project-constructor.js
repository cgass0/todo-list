// add a new project
export default function createProject(Name, Description, Status, Id, Tasks) {

    // Object Constructor
    function Project(Name, Description, Status, Id, Tasks) {
        this.Name= Name;
        this.Description = Description;
        this.Status = Status;
        this.Id = Id;
        this.Tasks = Tasks;
    }

    let projectObject = new Project(Name, Description, Status, Id, Tasks);
    return projectObject;
}
