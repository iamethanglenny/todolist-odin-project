const completedToDo = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const heroHeading = document.createElement("h1");
    heroHeading.classList.add("heroHeading");
    heroHeading.textContent = "Welcome to your completed to-do's, Ethan";

    contentDiv.appendChild(heroHeading);

    const toDoList = JSON.parse(localStorage.getItem("toDoList")) || [];
    const completedItems = toDoList.filter((item) => item.completed);

    if (completedItems.length === 0) {
        const noCompletedMessage = document.createElement("p");
        noCompletedMessage.textContent = "No completed to-do items found.";
        contentDiv.appendChild(noCompletedMessage);
        return;
    }

    const entriesContainer = document.createElement("div");
    entriesContainer.classList.add("entries-container");

    completedItems.forEach((item) => {
        const toDoEntry = document.createElement("div");
        toDoEntry.classList.add("to-do-entry");

        toDoEntry.innerHTML = `
            <h3 class="to-do-title">${item.title}</h3>
            <p class="to-do-description">${item.description}</p>
            <p class="to-do-due-date">Due Date: ${item.dueDate}</p>
            <p class="to-do-priority">Priority: ${item.priority}</p>
            <p class="to-do-notes">Notes: ${item.notes}</p>
        `;

        entriesContainer.appendChild(toDoEntry);
    });

    contentDiv.appendChild(entriesContainer);
};

// Event listener for "Completed" tab
document.getElementById("completed").addEventListener("click", completedToDo);

export { completedToDo };