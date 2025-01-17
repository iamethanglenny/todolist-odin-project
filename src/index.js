import { createToDo } from "./create-todo.js";
import { showAllToDos } from "./all-todo.js";
import { flaggedToDo } from "./flagged.js";
import { projects } from "./projects.js";
import { todayToDo } from "./today.js";
import "./styles.css";


// Might not need this here
function ToDo(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
}

document.addEventListener('DOMContentLoaded', () => {
    showAllToDos();
    all.classList.add("active");
});

const contentDiv = document.getElementById("content");

function clearContent() {
    contentDiv.innerHTML = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tag"); // Select all tabs with the 'tag' class

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove 'active' class from all tabs
            tabs.forEach((tab) => tab.classList.remove("active"));

            // Add 'active' class to the clicked tab
            tab.classList.add("active");
        });
    });
});

const allBtn = document.getElementById("all");
const todayBtn = document.getElementById("today");
const projectsBtn = document.getElementById("projects");
const flaggedBtn = document.getElementById("flagged");
const completedBtn = document.getElementById("completed");
const addToDoBtn = document.getElementById("addToDo");

allBtn.addEventListener("click", () => {
    clearContent();
    showAllToDos();
});

todayBtn.addEventListener("click", () => {
    clearContent();
    todayToDo();
});

projectsBtn.addEventListener("click", () => {
    clearContent();
    projects();
});

flaggedBtn.addEventListener("click", () => {
    clearContent();
    flaggedToDo();
});

addToDoBtn.addEventListener("click", () => {
    clearContent();
    createToDo();
});
