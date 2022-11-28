(()=>{"use strict";function t(t,e,n,a,s){let c=new function(t,e,n,a,s){this.Name=t,this.Description=e,this.Status=n,this.Id=a,this.Tasks=s}(t,e,n,a,s);return c}const e=document.getElementById("content");function n(t,n){e.innerHTML="";const a=document.createElement("div");a.classList.add("form-popup"),a.setAttribute("id","myProjectForm"),e.append(a);const s=document.createElement("h1");s.textContent=1==t?"Start A New Project":"Edit Project",a.append(s);const c=document.createElement("form");c.classList.add("form-container"),a.appendChild(c);const o=document.createElement("label");o.setAttribute("for","name"),o.textContent="Project Name",c.append(o);const r=document.createElement("input");r.classList.add("new-project-input"),r.setAttribute("type","text"),r.setAttribute("placeholder","Enter Project Name: Max 15 char"),r.setAttribute("name","name"),r.setAttribute("max-length","15"),r.setAttribute("pattern",".{0,15}"),r.setAttribute("required",""),c.append(r);const i=document.createElement("label");i.setAttribute("for","description"),i.textContent="Description",c.append(i);const d=document.createElement("textarea");d.classList.add("new-project-input"),d.setAttribute("type","text"),d.setAttribute("placeholder","Enter Project Description"),d.setAttribute("name","description"),c.append(d);const l=document.createElement("label");l.setAttribute("for","tasks"),l.textContent="Tasks",c.append(l);const u=document.createElement("div");u.classList.add("new-project-tasks-container"),c.append(u);const m=document.createElement("div");m.classList.add("add-wrap"),c.append(m);const p=document.createElement("img");function b(){const t=document.createElement("div");t.classList.add("new-task"),u.append(t);const e=document.createElement("input");e.classList.add("task-inputs","status"),e.type="checkbox",e.setAttribute("name","status"),e.value=e.checked,t.append(e);const n=document.createElement("input");n.classList.add("task-inputs","name"),n.setAttribute("type","text"),n.setAttribute("placeholder","Enter Task*"),n.setAttribute("name","taskName"),n.setAttribute("required",""),t.append(n);const a=document.createElement("textarea");a.classList.add("task-inputs","description"),a.setAttribute("placeholder","Enter Description"),a.setAttribute("name","taskDescription"),t.append(a);const s=document.createElement("select");s.classList.add("task-inputs","priority"),s.setAttribute("name","priority"),t.append(s);const c=document.createElement("option");c.setAttribute("value",""),c.setAttribute("selected",""),c.setAttribute("disabeled",""),c.setAttribute("hidden",""),c.textContent="Priority Level",s.append(c);const o=document.createElement("option");o.setAttribute("value","1"),o.textContent="Low",s.append(o);const r=document.createElement("option");r.setAttribute("value","2"),r.textContent="medium",s.append(r);const i=document.createElement("option");i.setAttribute("value","3"),i.textContent="High",s.append(i);const d=document.createElement("input");d.classList.add("task-inputs","date"),d.setAttribute("type","date"),d.setAttribute("name","dueDate"),d.setAttribute("required",""),t.append(d)}p.setAttribute("id","add-task-new-project"),p.classList.add("icon"),p.setAttribute("src","/src/img/add-project.png"),p.setAttribute("alt","add button"),m.append(p),p.addEventListener("click",b);for(let t=1;t<=n;t++)b();const E=document.createElement("p");E.textContent="Add A New Task",m.append(E);const y=document.createElement("div");y.classList.add("button-wrap"),c.append(y);const g=document.createElement("button");g.classList.add("btn"),g.setAttribute("type","button"),1==t?(g.textContent="Create Project",g.setAttribute("id","submit-project-button")):(g.textContent="Update Project",g.setAttribute("id","update-project-button")),y.append(g);const A=document.createElement("button");A.classList.add("btn","cancel"),A.setAttribute("id","close-project-button"),A.textContent="Close",y.append(A),A.addEventListener("click",(function(){e.innerHTML=""}))}function a(t){const e=document.getElementById("project-list"),n=document.createElement("div");n.classList.add("project-bar-item"),e.append(n);const a=document.createElement("img");a.classList.add("icon","project-icon"),a.setAttribute("src","/src/img/project.png"),a.setAttribute("alt","project icon"),n.append(a);const s=document.createElement("p");s.classList.add("item-tag"),s.textContent=t,n.append(s)}function s(t,e){let n=t;const a=document.querySelectorAll(".project-icon");let s=n[Array.from(a).indexOf(e.target)].Tasks,c=document.getElementsByClassName("new-project-input")[0],o=document.getElementsByClassName("new-project-input")[1];c.value=n[Array.from(a).indexOf(e.target)].Name,o.value=n[Array.from(a).indexOf(e.target)].Description;let r=document.querySelectorAll(".new-task"),i=0;r.forEach((t=>{t.children.status.checked=s[i].status,t.children.taskName.value=s[i].taskName,t.children.taskDescription.value=s[i].taskDescription,t.children.priority.value=s[i].priority,t.children.dueDate.value=s[i].dueDate,i++})),console.log(n[Array.from(a).indexOf(e.target)]),document.getElementById("update-project-button").addEventListener("click",(()=>{n[Array.from(a).indexOf(e.target)].Name=c.value,n[Array.from(a).indexOf(e.target)].Description=o.value;let t=0;r.forEach((e=>{s[t].status=e.children.status.checked,s[t].taskName=e.children.taskName.value,s[t].taskDescription=e.children.taskDescription.value,s[t].priority=e.children.priority.value,s[t].dueDate=e.children.dueDate.value,t++})),console.log(n[Array.from(a).indexOf(e.target)])}))}let c=[];const o=document.getElementById("content");document.getElementById("side-bar-toggle").addEventListener("click",(function(){document.getElementById("side-bar-toggle").classList.contains("collapse")?(document.getElementById("side-bar-toggle").classList.remove("collapse"),document.getElementById("page-container").classList.remove("collapse"),document.getElementById("add-project").classList.remove("collapse"),document.getElementById("project-list").classList.remove("collapse"),document.getElementById("project-add-container").classList.remove("collapse"),document.getElementById("project-bar-container").classList.remove("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((t=>{t.classList.remove("collapse")}))):(document.getElementById("side-bar-toggle").classList.add("collapse"),document.getElementById("page-container").classList.add("collapse"),document.getElementById("add-project").classList.add("collapse"),document.getElementById("project-list").classList.add("collapse"),document.getElementById("project-add-container").classList.add("collapse"),document.getElementById("project-bar-container").classList.add("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((t=>{t.classList.add("collapse")})))})),document.getElementById("add-project-button").addEventListener("click",(function(){(0==o.childNodes.length||1==confirm("This action will cause your current form to close and unsaved information will be lost. Do you wish to close the tab?"))&&n(!0,1)})),document.addEventListener("click",(function(e){e.target&&"submit-project-button"==e.target.id&&1==function(){let t;return 0==document.getElementsByClassName("new-project-input")[0].reportValidity()&&(t=!1),document.querySelectorAll(".name").forEach((e=>{0==e.reportValidity()&&(t=!1)})),document.querySelectorAll(".date").forEach((e=>{0==e.reportValidity()&&(t=!1)})),0!=t}()&&function(e){let n,s=document.getElementsByClassName("new-project-input")[0],r=document.getElementsByClassName("new-project-input")[1],i=c.length,d=[];document.querySelectorAll(".new-task").forEach((t=>{let e={};t.querySelectorAll(".task-inputs").forEach((t=>e[t.name]=t.checked||t.value||"")),d.push(e)})),d.some((t=>{1!=t.status&&(n=!1),null==n&&(n=!0)})),c.push(t(s.value,r.value,n,i,d)),a(s.value),o.innerHTML=""}()})),document.addEventListener("click",(function(t){if(t.target&&t.target.classList.contains("project-icon")){const e=document.querySelectorAll(".project-icon");let a=c[Array.from(e).indexOf(t.target)].Tasks.length;(0==o.childNodes.length||1==confirm("This action will cause your current form to close and unsaved information will be lost. Do you wish to close the tab?"))&&(n(!1,a),s(c,t))}}));let r=[{status:!1,taskName:"Task 1",taskDescription:"Description of task",priority:"2",dueDate:"2022-11-09"},{status:!0,taskName:"Task 2",taskDescription:"Description of task",priority:"1",dueDate:"2022-11-11"}];c.push(t("Project 1","Desription 1",!1,0,r)),a("Project 1"),c.push(t("Project 2","Desription 2",!1,1,r)),a("Project 2")})();