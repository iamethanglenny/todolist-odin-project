const todayToDo = () => {

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";

    const heroHeading = document.createElement("h1");
    heroHeading.classList.add("heroHeading");
    heroHeading.textContent = "Welcome to today's to-do list, Ethan"

    contentDiv.appendChild(heroHeading);

    const existingEntries = JSON.parse(localStorage.getItem("toDoList")) || [];
    const today = new Date().toISOString().split('T')[0]; // Get today's date

    const todaysEntries = existingEntries.filter(toDo => toDo.createdDate === today && !toDo.completed);

    if (todaysEntries.length === 0) {
        const noToDosMessage = document.createElement("p");
        noToDosMessage.textContent = "No to-dos found for today.";
        document.getElementById("content").appendChild(noToDosMessage);
        return;
    }

    todaysEntries.forEach(toDo => {
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

        const completeCheckbox = document.createElement("input");
        completeCheckbox.setAttribute("type", "checkbox");
        completeCheckbox.classList.add("to-do-complete-checkbox");
        completeCheckbox.checked = toDo.completed || false;
        completeCheckbox.addEventListener("change", () => {
            toDo.completed = completeCheckbox.checked;
            localStorage.setItem("toDoList", JSON.stringify(existingEntries));
            todayToDo(); // Refresh today's list after marking as complete
        });

        const completeLabel = document.createElement("label");
        completeLabel.textContent = "Mark as completed";
        completeLabel.appendChild(completeCheckbox);

        // Append the completed checkbox and entry to the container
        toDoEntry.appendChild(completeLabel);

        document.getElementById("content").appendChild(toDoEntry);
    });
};

export { todayToDo };