const showAllToDos = () => {
    // Clear existing content if any
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    // Retrieve and parse stored data
    const storedData = localStorage.getItem("toDoData");
    if (!storedData) {
        contentDiv.textContent = "No to-do entries found.";
        return;
    }

    const toDoEntries = JSON.parse(storedData);

    // Create a container for entries
    const entriesContainer = document.createElement("div");
    entriesContainer.classList.add("entries-container");

    // Display each entry's data
    Object.keys(toDoEntries).forEach((key) => {
        const entryDiv = document.createElement("div");
        entryDiv.classList.add("to-do-entry");

        const entryTitle = document.createElement("h3");
        entryTitle.textContent = toDoEntries[key].title;

        const entryDescription = document.createElement("p");
        entryDescription.textContent = `Description: ${toDoEntries[key].description}`;

        const entryDueDate = document.createElement("p");
        entryDueDate.textContent = `Due Date: ${toDoEntries[key].dueDate}`;

        const entryPriority = document.createElement("p");
        entryPriority.textContent = `Priority: ${toDoEntries[key].priority ? "High" : "Low"}`;

        const entryNotes = document.createElement("p");
        entryNotes.textContent = `Notes: ${toDoEntries[key].notes}`;

        const entryChecklist = document.createElement("p");
        entryChecklist.textContent = `Checklist: ${toDoEntries[key].checklist ? "Yes" : "No"}`;

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
    contentDiv.appendChild(entriesContainer);
};

export { showAllToDos };