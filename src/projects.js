const projects = () => {

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const heroHeading = document.createElement("h1");
    heroHeading.classList.add("heroHeading");
    heroHeading.textContent = "Welcome to your projects, Ethan";

    contentDiv.appendChild(heroHeading);

    const projectsDiv = document.createElement("div");
    projectsDiv.setAttribute("id", "projectsDiv");

    const projectTypes = ["Lame", "Boring", "Fun", "Challenging", "Exciting"];

    projectTypes.forEach((projectType) => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project-type");
        projectDiv.textContent = projectType;

        projectDiv.addEventListener("click", () => {
                displayToDosByProject(projectType);
        });

        projectsDiv.appendChild(projectDiv);
    });

    contentDiv.appendChild(projectsDiv);
};

const displayToDosByProject = (projectType) => {
    document.getElementById("content").innerHTML = "";
    const existingEntries = JSON.parse(localStorage.getItem("toDoList")) || [];

    const filteredEntries = existingEntries.filter(toDo => toDo.projectType === projectType);

    if (filteredEntries.length === 0) {
        const noToDosMessage = document.createElement("p");
        noToDosMessage.textContent = `No to-dos found for ${projectType}.`;
        document.getElementById("content").appendChild(noToDosMessage);
        return;
    }

    filteredEntries.forEach(toDo => {
        const toDoEntry = document.createElement("div");
        toDoEntry.classList.add("to-do-entry");

        toDoEntry.innerHTML = `
            <h3 class="to-do-title">${toDo.title}</h3>
            <p class="to-do-description">${toDo.description}</p>
            <p class="to-do-due-date">Due Date: ${toDo.dueDate}</p>
            <p class="to-do-priority">Priority: ${toDo.priority}</p>
            <p class="to-do-notes">Notes: ${toDo.notes}</p>
            <p class="to-do-checklist">Checklist: ${toDo.checklist ? "Yes" : "No"}</p>
        `;

        document.getElementById("content").appendChild(toDoEntry);
    });
};

export { projects };