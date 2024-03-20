let todoItems = [];

function addTodo() {
  let item = document.querySelector("#item-todo").value;
  let dateOfItem = document.querySelector("#item-date").value;
  // let timeOfItem = document.querySelector("#todotime").value;

  let todo = {
    item: item,
    date: dateOfItem,
    // time: timeOfItem,
  };

  todoItems.push(todo);
  updateLocalStorage(); // Save the updated todoItems array to local storage
  displayTodos();
}

function displayTodos() {
  let todoBody = document.querySelector("#todo-body");
  let htmlContent = "";

  for (let i = 0; i < todoItems.length; i++) {
    htmlContent += `
        <div id="item-div">
           📝 <span id="test">${todoItems[i].item}</span> 📅 <span>${todoItems[i].date}</span>
            
        </div>

        <div><button class="item6" onclick="deleteItem(${i})">Completed ✅</button><button class="item6" onclick="deleteItem(${i})">❌ Delete</button></div>`;
  }

  todoBody.innerHTML = htmlContent;
}

function deleteItem(index) {
  todoItems.splice(index, 1);
  updateLocalStorage(); // Save the updated todoItems array to local storage
  displayTodos();
}

function updateLocalStorage() {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

// Load todoItems from local storage on page load
function loadFromLocalStorage() {
  let storedTodos = localStorage.getItem("todoItems");
  todoItems = storedTodos ? JSON.parse(storedTodos) : [];
  displayTodos();
}

// Call the loadFromLocalStorage function on page load
loadFromLocalStorage();
