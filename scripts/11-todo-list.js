const todoList = [];

function addTodo(){
  const inputElement = document.querySelector('.js-todo-item');
  const name = inputElement.value;
  //console.log(name);

  todoList.push(name);

  console.log(todoList);

  inputElement.value = '';
}