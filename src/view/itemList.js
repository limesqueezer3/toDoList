import { addItem, addTimeStamp, getItems, getTimeStamps } from "../logic.js";
export {renderItems, renderForm, handleAddItem};


function renderItems() {
    const notesDiv = document.querySelector("#notes");

    const itemList = getItems();
    if (itemList.length > 0) {
        itemList.forEach((item, index) => {
            const itemDiv = document.createElement("div");
            itemDiv.id = `item-${index}`; 
            const properties = [item.topic, item.priority, item.deadline, item.hours];
            properties.forEach((property) => {
                const parameter = document.createElement("div");
                parameter.textContent = property;
                itemDiv.appendChild(parameter);
            });
            notesDiv.appendChild(itemDiv);
        });
    }
}

function renderForm() {
        // Create the form element
    const notesDiv = document.querySelector("#notes");
    const form = document.createElement("form");
    form.action = "/submit";
    form.method = "post";

    // Helper function to create labeled input fields
    const createInputField = (type, id, name, labelText, required = true) => {
        const label = document.createElement("label");
        label.htmlFor = id;
        label.textContent = labelText;

        const input = document.createElement("input");
        input.type = type;
        input.id = id;
        input.name = name;
        input.required = required;

        return [label, input];
    };

    // Create and append input fields
    const fields = [
        ["text", "topic", "topic", "Topic:"],
        ["number", "priority", "priority", "Priority Number:"],
        ["date", "due-date", "due-date", "Due Date:"],
        ["number", "hours-needed", "hours-needed", "Hours Needed:"],
    ];

    fields.forEach(([type, id, name, labelText]) => {
        const [label, input] = createInputField(type, id, name, labelText);
        form.appendChild(label);
        form.appendChild(document.createElement("br"));
        form.appendChild(input);
        form.appendChild(document.createElement("br"));
        form.appendChild(document.createElement("br"));
    });

    // Create and append the submit button
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    form.appendChild(submitButton);

    // Append the form to the document body or a specific container
    notesDiv.appendChild(form); // Or use a specific container like document.getElementById("container")
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the form from submitting the traditional way
    
        // Get the form values
        const topic = document.querySelector("#topic").value;
        const priority = document.querySelector("#priority").value;
        const dueDate = document.querySelector("#due-date").value;
        const hoursNeeded = document.querySelector("#hours-needed").value;
        handleAddItem(topic, priority, dueDate, hoursNeeded);
        form.reset();
    })
}

function resetView() {
    const notesDiv = document.querySelector("#notes");
    notesDiv.innerHTML = "";
}
function handleAddItem(topic, priority, deadline, hours) {
    addItem(topic, priority, deadline, hours);
    resetView();
    renderItems(); 
    renderForm();
}