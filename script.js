class Project{
    constructor(name,due,priority,description){
        this.name=name;
        this.priority=priority;
        this.description=description;
        this.due=due;
        this.tasks=[];
    }
    addTask(task){
        this.tasks.push(task);
    }
}
class ProjectList{
    constructor(){
        this.projects=[];
    }
    addProject(Project){
        this.projects.push(Project);
    }
}
function displayProject(Proj){
    const sideBar=document.querySelector("#sidebar");
    const Project=document.createElement("div");
    Project.textContent=Proj.name;
    Project.setAttribute("class","proj")
    sideBar.appendChild(Project)
    Project.addEventListener("click",()=>{
        const content=document.querySelector("#content");
        while(content.hasChildNodes()){
            content.removeChild(content.firstElementChild)
        }
        const Name=document.createElement("h1");
        Name.textContent=Proj.name;
        const Due=document.createElement("h1");
        Due.textContent=Proj.due;
        const Priority=document.createElement("h1");
        Priority.textContent=Proj.priority;
        const Des=document.createElement("h2");
        Des.textContent=Proj.description;
        content.appendChild(Name);
        content.appendChild(Due);
        content.appendChild(Priority);
        content.appendChild(Des);

    })
}
const btn=document.querySelector(".addProject");
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const due =  document.querySelector("#due").value;
    const description = document.querySelector("#description").value;
    const radioButtons =  document.querySelectorAll(".radio");
    let priority;
    for(let i=0;i<radioButtons.length;i++){
        if(radioButtons[i].checked){
            priority=radioButtons[i].value;

        }
    }
    Proj = new Project(name,due,priority,description);
    displayProject(Proj);

});










