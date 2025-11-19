let todoList = [];

// Load saved data on start
window.onload = function () {
    const saved = localStorage.getItem("todoList");
    if (saved) {
        todoList = JSON.parse(saved);
    }
    showList();
};

// Add item
function addItem() {
    let input = document.getElementById("todoInput");
    let text = input.value.trim();

    if (text === "") return;

    todoList.push(text);
    input.value = "";
    saveList();
    showList();
}

// Show or update list
function showList() {
    const list = document.getElementById("todoList");
    list.innerHTML = "";

    todoList.forEach((item, index) => {
        list.innerHTML += `
            <li>
                ${item}
                <span>
                    <button onclick="editItem(${index})">Edit</button>
                    <button onclick="deleteItem(${index})">Delete</button>
                </span>
            </li>
        `;
    });
}

// Edit item
function editItem(index) {
    let newValue = prompt("Edit item:", todoList[index]);
    if (newValue !== null) {
        todoList[index] = newValue.trim();
        saveList();
        showList();
    }
}

// Delete item
function deleteItem(index) {
    todoList.splice(index, 1);
    saveList();
    showList();
}

// Save to localStorage
function saveList() {
    localStorage.setItem("todoList", JSON.stringify(todoList));
}