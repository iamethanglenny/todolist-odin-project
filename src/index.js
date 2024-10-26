import { createToDo } from "./create-todo.js";
import { showAllToDos } from "./all-todo.js";


// Might not need this here
function ToDo(title, description, dueDate, priority, notes, checklist) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.checklist = checklist;
}

/* document.addEventListener('DOMContentLoaded', () => {
    allContent();
}); */

const contentDiv = document.getElementById("content");

function clearContent() {
    contentDiv.innerHTML = "";
}

const allBtn = document.getElementById("all");
const todayBtn = document.getElementById("today");
const scheduledBtn = document.getElementById("scheduled");
const flaggedBtn = document.getElementById("flagged");
const completedBtn = document.getElementById("completed");
const addToDoBtn = document.getElementById("addToDo");

allBtn.addEventListener("click", () => {
    clearContent();
    showAllToDos();
});

todayBtn.addEventListener("click", () => {
    clearContent();
    
});

scheduledBtn.addEventListener("click", () => {
    clearContent();
    
});

flaggedBtn.addEventListener("click", () => {
    clearContent();
    
});

completedBtn.addEventListener("click", () => {
    clearContent();
    
});

addToDoBtn.addEventListener("click", () => {
    clearContent();
    createToDo();
});
