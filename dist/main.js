(()=>{"use strict";document.getElementById("side-bar-toggle").addEventListener("click",(function(){document.getElementById("side-bar-toggle").classList.contains("collapse")?(document.getElementById("side-bar-toggle").classList.remove("collapse"),document.getElementById("page-container").classList.remove("collapse"),document.getElementById("add-project").classList.remove("collapse"),document.getElementById("project-list").classList.remove("collapse"),document.getElementById("project-add-container").classList.remove("collapse"),document.getElementById("project-bar-container").classList.remove("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((e=>{e.classList.remove("collapse")}))):(document.getElementById("side-bar-toggle").classList.add("collapse"),document.getElementById("page-container").classList.add("collapse"),document.getElementById("add-project").classList.add("collapse"),document.getElementById("project-list").classList.add("collapse"),document.getElementById("project-add-container").classList.add("collapse"),document.getElementById("project-bar-container").classList.add("collapse"),document.querySelectorAll(".item-tag, .side-bar-item, .project-bar-item").forEach((e=>{e.classList.add("collapse")})))}))})();