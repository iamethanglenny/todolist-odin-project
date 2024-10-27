const createToDo =() => {

    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";


    function handleFormSubmit(event) {
        event.preventDefault();

        const toDoData = {
            title: document.getElementById("title").value,
            description: document.getElementById("description").value,
            dueDate: document.getElementById("dueDate").value,
            priorityType: document.getElementById("priority").value,
            notes: document.getElementById("notes").value,
            projectType: document.getElementById("projectType").value,
            createdDate: new Date().toISOString().split('T')[0],
        };

        const existingEntries = JSON.parse(localStorage.getItem("toDoList")) || [];

        existingEntries.push(toDoData);

        localStorage.setItem("toDoList", JSON.stringify(existingEntries));

        alert("To-Do saved locally!");
    }

    const toDoForm = document.createElement("form");
    toDoForm.setAttribute("id", "toDoForm");
    toDoForm.addEventListener("submit", handleFormSubmit);
    toDoForm.classList.add("toDoForm");

    const inputTypes = [
        { label: "Title", type: "text", name: "title" },
        { label: "Description", type: "text", name: "description" },
        { label: "Due Date", type: "date", name: "dueDate" },
        { label: "Priority", type: "select", name: "priority", options: ["Low", "Medium", "High"] },
        { label: "Project Type", type: "select", name: "projectType", options: ["Lame", "Boring", "Fun", "Challenging", "Exciting"] },
        { label: "Notes", type: "text", name: "notes" },
    ];

    inputTypes.forEach(inputData => {

        const label = document.createElement("label");
        label.textContent = inputData.label;
        label.setAttribute("for", inputData.name);
        label.classList.add("form-label");

        if (inputData.type === "select") {
            const select = document.createElement("select");
            select.setAttribute("name", inputData.name);
            select.setAttribute("id", inputData.name);

            // Create options for the select element
            inputData.options.forEach(option => {
                const opt = document.createElement("option");
                opt.value = option; // Sets the value of the option
                opt.textContent = option; // Sets the displayed text of the option
                select.appendChild(opt); // Append the option to the select
            });

            toDoForm.appendChild(label);
            toDoForm.appendChild(select);
        } else {

            const input = document.createElement("input");
            input.setAttribute("type", inputData.type);
            input.setAttribute("name", inputData.name);
            input.setAttribute("id", inputData.name);
            input.classList.add("form-input");

            toDoForm.appendChild(label);
            toDoForm.appendChild(input);
        }

        toDoForm.appendChild(document.createElement("br"));
    });

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Add To List";
    toDoForm.appendChild(submitBtn);

    document.getElementById("content").appendChild(toDoForm);
}

export { createToDo };