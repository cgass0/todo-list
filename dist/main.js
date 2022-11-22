(()=>{"use strict";const t=document.getElementById("content");document.getElementById("side-bar-toggle").addEventListener("click",(function(){document.getElementById("side-bar-toggle").classList.contains("collapse")?(document.getElementById("side-bar-toggle").classList.remove("collapse"),document.getElementById("page-container").classList.remove("collapse"),document.getElementById("add-project").classList.remove("collapse"),document.getElementById("project-list").classList.remove("collapse"),document.getElementById("project-add-container").classList.remove("collapse"),document.getElementById("project-bar-container").classList.remove("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((t=>{t.classList.remove("collapse")}))):(document.getElementById("side-bar-toggle").classList.add("collapse"),document.getElementById("page-container").classList.add("collapse"),document.getElementById("add-project").classList.add("collapse"),document.getElementById("project-list").classList.add("collapse"),document.getElementById("project-add-container").classList.add("collapse"),document.getElementById("project-bar-container").classList.add("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((t=>{t.classList.add("collapse")})))})),document.getElementById("add-project-button").addEventListener("click",(function(){!function(e){const n=document.createElement("div");n.classList.add("form-popup"),n.setAttribute("id","myProjectForm"),t.append(n),n.style.display="flex";const s=document.createElement("div");s.classList.add("form-container"),n.append(s);const c=document.createElement("h1");c.textContent="Start A New Project",s.append(c);const a=document.createElement("label");a.setAttribute("for","name"),a.textContent="Project Name",s.append(a);const d=document.createElement("input");d.classList.add("new-project-input"),d.setAttribute("type","text"),d.setAttribute("placeholder","Enter Project Name"),d.setAttribute("name","name"),d.setAttribute("required",""),s.append(d);const o=document.createElement("label");o.setAttribute("for","description"),o.textContent="Description",s.append(o);const r=document.createElement("textarea");r.classList.add("new-project-input"),r.setAttribute("type","text"),r.setAttribute("placeholder","Enter Project Description"),r.setAttribute("name","description"),s.append(r);const i=document.createElement("label");i.setAttribute("for","tasks"),i.textContent="Tasks",s.append(i);const l=document.createElement("div");l.classList.add("new-project-tasks-container"),s.append(l);const p=document.createElement("div");p.classList.add("new-task"),l.append(p);const m=document.createElement("input");m.classList.add("task-inputs","name"),m.setAttribute("type","text"),m.setAttribute("placeholder","Enter Task*"),m.setAttribute("name","task"),m.setAttribute("required",""),p.append(m);const u=document.createElement("textarea");u.classList.add("task-inputs","description"),u.setAttribute("placeholder","Enter Description"),u.setAttribute("name","task description"),p.append(u);const b=document.createElement("select");b.classList.add("task-inputs","priority"),p.append(b);const E=document.createElement("option");E.setAttribute("value",""),E.setAttribute("selected",""),E.setAttribute("disabeled",""),E.setAttribute("hidden",""),E.textContent="Priority Level",b.append(E);const A=document.createElement("option");A.setAttribute("value","1"),A.textContent="Low",b.append(A);const L=document.createElement("option");L.setAttribute("value","2"),L.textContent="medium",b.append(L);const g=document.createElement("option");g.setAttribute("value","3"),g.textContent="High",b.append(g);const y=document.createElement("input");y.classList.add("task-inputs","date"),y.setAttribute("type","date"),y.setAttribute("required",""),p.append(y);const j=document.createElement("div");j.classList.add("add-wrap"),s.append(j);const v=document.createElement("img");v.setAttribute("id","add-task-new-project"),v.classList.add("icon"),v.setAttribute("src","/src/img/add-project.png"),v.setAttribute("alt","add button"),j.append(v);const x=document.createElement("p");x.textContent="Add A New Task",j.append(x);const k=document.createElement("div");k.classList.add("button-wrap"),s.append(k);const B=document.createElement("button");B.classList.add("btn"),B.setAttribute("type","submit"),B.textContent="Create Project",k.append(B);const I=document.createElement("button");I.classList.add("btn","cancel"),I.setAttribute("id","close-project-button"),I.textContent="Close",k.append(I),I.addEventListener("click",(function(){t.innerHTML=""}))}()}))})();