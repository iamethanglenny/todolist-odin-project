const flaggedToDo = () => {

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const heroHeading = document.createElement("h1");
    heroHeading.classList.add("heroHeading");
    heroHeading.textContent = "Welcome to your flagged to-do's, Ethan"

    contentDiv.appendChild(heroHeading);

    const flaggedDiv = document.createElement("div");
    flaggedDiv.setAttribute("id", "flaggedDiv");

    const priorityTypes = ["Low", "Medium", "High"];

    priorityTypes.forEach((priorityType) => {
        const priorityDiv = document.createElement("div");
        priorityDiv.classList.add("priorityType");
        priorityDiv.textContent = priorityType;

        priorityDiv.addEventListener("click", () => {
                displayToDosByPriority(priorityType);
        });

        flaggedDiv.appendChild(priorityDiv);
    });

    contentDiv.appendChild(flaggedDiv);
};

const displayToDosByPriority = (priorityType) => {
    document.getElementById("content").innerHTML = "";

    const heroHeading = document.createElement("h2");
    heroHeading.classList.add("heroHeading");
    heroHeading.textContent = `Flagged To-Dos with ${priorityType} Priority`;
    contentDiv.appendChild(heroHeading);

    const backButton = document.createElement("button");
    backButton.textContent = "Back to Flagged To-Dos";
    backButton.addEventListener("click", flaggedToDo);
    contentDiv.appendChild(backButton);


    const existingEntries = JSON.parse(localStorage.getItem("toDoList")) || [];
    const filteredEntries = existingEntries.filter(toDo => toDo.priorityType === priorityType && !toDo.completed);

    if (filteredEntries.length === 0) {
        const noToDosMessage = document.createElement("p");
        noToDosMessage.textContent = `No to-dos found for project priority ${priorityType}.`;
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

export { flaggedToDo };