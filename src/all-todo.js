const showAllToDos = () => {
    // Clear existing content if any
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const heroHeading = document.createElement("h1");
    heroHeading.classList.add("heroHeading");
    heroHeading.textContent = "Welcome to your to-do list, Ethan"

    // Retrieve and parse stored data
    const storedData = JSON.parse(localStorage.getItem("toDoList"));
    if (!storedData || storedData.length === 0) {
        contentDiv.textContent = "No to-do entries found.";
        return;
    }



    // Create a container for entries
    const entriesContainer = document.createElement("div");
    entriesContainer.classList.add("entries-container");

    // Display each entry's data
    storedData.forEach(toDo => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("to-do-entry");

        const entryTitle = document.createElement("h3");
        entryTitle.classList.add("to-do-title");
        entryTitle.textContent = toDo.title || "Untitled";

        const entryDescription = document.createElement("p");
        entryDescription.classList.add("to-do-description");
        entryDescription.textContent = `Description: ${toDo.description || "N/A"}`;

        const entryDueDate = document.createElement("p");
        entryDueDate.classList.add("to-do-due-date");
        entryDueDate.textContent = `Due Date: ${toDo.dueDate || "N/A"}`;

        const entryPriority = document.createElement("p");
        entryPriority.classList.add("to-do-priority");
        entryPriority.textContent = `Priority: ${toDo.priority ? "High" : "Low"}`;

        const entryNotes = document.createElement("p");
        entryNotes.classList.add("to-do-notes");
        entryNotes.textContent = `Notes: ${toDo.notes || "N/A"}`;

        const entryChecklist = document.createElement("p");
        entryChecklist.classList.add("to-do-checklist");
        entryChecklist.textContent = `Checklist: ${toDo.checklist ? "Yes" : "No"}`;

    
        // Append all data to entry div
        entryDiv.appendChild(entryTitle);
        entryDiv.appendChild(entryDescription);
        entryDiv.appendChild(entryDueDate);
        entryDiv.appendChild(entryPriority);
        entryDiv.appendChild(entryNotes);
        entryDiv.appendChild(entryChecklist);

        // Append each entry to the container
        entriesContainer.appendChild(entryDiv);
    });

    // Append container to content div
    contentDiv.appendChild(heroHeading);
    contentDiv.appendChild(entriesContainer);
};

export { showAllToDos };