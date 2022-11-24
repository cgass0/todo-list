(()=>{"use strict";const t=document.getElementById("content");document.getElementById("side-bar-toggle").addEventListener("click",(function(){document.getElementById("side-bar-toggle").classList.contains("collapse")?(document.getElementById("side-bar-toggle").classList.remove("collapse"),document.getElementById("page-container").classList.remove("collapse"),document.getElementById("add-project").classList.remove("collapse"),document.getElementById("project-list").classList.remove("collapse"),document.getElementById("project-add-container").classList.remove("collapse"),document.getElementById("project-bar-container").classList.remove("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((t=>{t.classList.remove("collapse")}))):(document.getElementById("side-bar-toggle").classList.add("collapse"),document.getElementById("page-container").classList.add("collapse"),document.getElementById("add-project").classList.add("collapse"),document.getElementById("project-list").classList.add("collapse"),document.getElementById("project-add-container").classList.add("collapse"),document.getElementById("project-bar-container").classList.add("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((t=>{t.classList.add("collapse")})))})),document.getElementById("add-project-button").addEventListener("click",(function(){!function(e){const n=document.createElement("div");n.classList.add("form-popup"),n.setAttribute("id","myProjectForm"),t.append(n);const s=document.createElement("h1");s.textContent="Start A New Project",n.append(s);const c=document.createElement("div");c.classList.add("form-container"),n.append(c);const a=document.createElement("label");a.setAttribute("for","name"),a.textContent="Project Name",c.append(a);const o=document.createElement("input");o.classList.add("new-project-input"),o.setAttribute("type","text"),o.setAttribute("placeholder","Enter Project Name"),o.setAttribute("name","name"),o.setAttribute("required",""),c.append(o);const d=document.createElement("label");d.setAttribute("for","description"),d.textContent="Description",c.append(d);const i=document.createElement("textarea");i.classList.add("new-project-input"),i.setAttribute("type","text"),i.setAttribute("placeholder","Enter Project Description"),i.setAttribute("name","description"),c.append(i);const r=document.createElement("label");r.setAttribute("for","tasks"),r.textContent="Tasks",c.append(r);const l=document.createElement("div");l.classList.add("new-project-tasks-container"),c.append(l);const u=document.createElement("div");u.classList.add("add-wrap"),c.append(u);const p=document.createElement("img");function m(){const t=document.createElement("div");t.classList.add("new-task"),l.append(t);const e=document.createElement("input");e.classList.add("task-inputs","status"),e.type="checkbox",e.setAttribute("name","status"),e.value=e.checked,t.append(e);const n=document.createElement("input");n.classList.add("task-inputs","name"),n.setAttribute("type","text"),n.setAttribute("placeholder","Enter Task*"),n.setAttribute("name","taskName"),n.setAttribute("required",""),t.append(n);const s=document.createElement("textarea");s.classList.add("task-inputs","description"),s.setAttribute("placeholder","Enter Description"),s.setAttribute("name","taskDescription"),t.append(s);const c=document.createElement("select");c.classList.add("task-inputs","priority"),c.setAttribute("name","priority"),t.append(c);const a=document.createElement("option");a.setAttribute("value",""),a.setAttribute("selected",""),a.setAttribute("disabeled",""),a.setAttribute("hidden",""),a.textContent="Priority Level",c.append(a);const o=document.createElement("option");o.setAttribute("value","1"),o.textContent="Low",c.append(o);const d=document.createElement("option");d.setAttribute("value","2"),d.textContent="medium",c.append(d);const i=document.createElement("option");i.setAttribute("value","3"),i.textContent="High",c.append(i);const r=document.createElement("input");r.classList.add("task-inputs","date"),r.setAttribute("type","date"),r.setAttribute("name","dueDate"),r.setAttribute("required",""),t.append(r)}p.setAttribute("id","add-task-new-project"),p.classList.add("icon"),p.setAttribute("src","/src/img/add-project.png"),p.setAttribute("alt","add button"),u.append(p),p.addEventListener("click",m),m();const b=document.createElement("p");b.textContent="Add A New Task",u.append(b);const E=document.createElement("div");E.classList.add("button-wrap"),c.append(E);const A=document.createElement("button");A.classList.add("btn"),A.setAttribute("type","submit"),A.setAttribute("id","submit-project-button"),A.textContent="Create Project",E.append(A);const L=document.createElement("button");L.classList.add("btn","cancel"),L.setAttribute("id","close-project-button"),L.textContent="Close",E.append(L),L.addEventListener("click",(function(){t.innerHTML=""}))}()}));let e=[];document.addEventListener("click",(function(t){t.target&&"submit-project-button"==t.target.id&&(function(){let t,n=document.getElementsByClassName("new-project-input")[0],s=document.getElementsByClassName("new-project-input")[1],c=e.length,a=[];var o,d,i,r,l;document.querySelectorAll(".new-task").forEach((t=>{let e={};t.querySelectorAll(".task-inputs").forEach((t=>e[t.name]=t.checked||t.value||"")),a.push(e)})),a.some((e=>{1!=e.status&&(t=!1),null==t&&(t=!0)})),o=n.value,d=s.value,i=t,r=c,l=a,e.push(function(t,e,n,s,c){let a=new function(t,e,n,s,c){this.Name=t,this.Description=e,this.Status=n,this.Id=s,this.Tasks=c}(t,e,n,s,c);return a}(o,d,i,r,l)),console.log(e)}(),document.getElementById("content").innerHTML="")}))})();