function createToDo() {

    const toDoForm = document.createElement("form");
    toDoForm.setAttribute("id", "toDoForm");

    const inputTypes = [
        { label: "Title", type: "text", name: "title" },
        { label: "Description", type: "text", name: "description" },
        { label: "Due Date", type: "number", name: "dueDate" },
        { label: "Priority", type: "checkbox", name: "priority" },
        { label: "Notes", type: "text", name: "notes" },
        { label: "Checklist", type: "checkbox", name: "checklist" },
    ];

    inputTypes.forEach(inputData => {

        const label = document.createElement("label");
        label.textContent = inputData.label;
        label.setAttribute("for", inputData.name);

        const input = document.createElement("input");
        input.setAttribute("type", inputData.type);
        input.setAttribute("name", inputData.name);
        input.setAttribute("id", inputData.name);

        toDoForm.appendChild(label);
        toDoForm.appendChild(input);
        toDoForm.appendChild(document.createElement("br"));
    });

    const submitBtn = document.createElement("button");
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Add ToDo";
    toDoForm.appendChild(submitBtn);

    document.getElementById("container").appendChild(toDoForm);
}

createToDo();

export { createToDo };