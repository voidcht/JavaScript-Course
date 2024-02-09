//const todoList = [];

//For the second version of the app, let's have some default values for the array
const todoList = [
  "make dinner",
  "watch a film",
  "write journal"
];

let todoListHTML = '';

for(let i =0; i< todoList.length; i++){
  const todo = todoList[i];
  const html = `<p>${todo}</p>`;
  //accumulator string - to combine all the <p> items for to do list items
  todoListHTML += html;
}
//display accumulator result
console.log(todoListHTML);


document.querySelector('.js-todo-list').innerHTML = todoListHTML;


function addTodo(){
  const inputElement = document.querySelector('.js-todo-item');
  const name = inputElement.value;
  //console.log(name);

  todoList.push(name);

  console.log(todoList);

  inputElement.value = '';
}