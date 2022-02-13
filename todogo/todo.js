const button = document.querySelector(".add-todo");
button.addEventListener("click", addToDo);

const todoList = document.querySelector(".todo-list");

function addToDo(event){
  event.preventDefault();
  const li = document.createElement("li");
  li.innerHTML = "새로운 할 일<span>❌</span>"
  todoList.appendChild(li);
}
