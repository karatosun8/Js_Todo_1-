//! selectors

const todoInput =document.querySelector(".todo-input")
const todoButton =document.querySelector(".todo-button")
const todoList =document.querySelector(".todo-list")
const todoFilter =document.querySelector(".filter-todo")

//?alerts
const alertWarning =document.querySelector(".alert-warning")
const alertSuccess =document.querySelector(".alert-success")

//! events

todoButton.addEventListener("click",addTodo)

//! function
function addTodo (e){
    e.preventDefault();

    //? create todo div
    const todoDiv= document.createElement("div")
    todoDiv.classList.add("todo");




    //? check mark button
     const completedButton = document.createElement("button")
    completedButton.innerHTML ="<i class='fas fa-check-circle'></i>"
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    
    //  console.log(completedButton);

    //? create todo li
    const newTodo =document.createElement("li")
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item")
    todoDiv.appendChild(newTodo)

    //? check trash button
    const trashButton =document.createElement("button")
    trashButton.innerHTML =' <i class="fa fa-minus-circle"></i>'
    trashButton.classList.add("trash-btn")
    todoDiv.appendChild(trashButton)
    // console.log(trashButton);
    // console.log(todoDiv);

    //? append to list
    todoList.appendChild(todoDiv)


}

