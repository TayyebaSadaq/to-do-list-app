const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const checkbox = li.querySelector("input");
const editButton = li.querySelector(".edit-button");
const taskSpan = li.querySelector("span");
const deleteButton = li.querySelector(".delete-button");


function addTask(){
    const task = inputBox.value.trim();
    if (!task) {
        alert("Please write your task!");
        return;
    }
    const li = document.createElement("li");

    li.innerHTML = `
    <label>
        <input type = "checkbox">
        <span>${task}</span>
    </label>
    <span class = "edit-button">Edit</span>
    <span class = "delete-button">Delete</span>
    `;

    listContainer.appendChild(li);
    inputBox.value = "";
}

