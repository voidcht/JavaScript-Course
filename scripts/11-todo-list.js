//const todoList = [];

//For the second version of the app, let's have some default values for the array
const todoList = [
  { name: "make dinner",
    dueDate: '2022-12-22'},
  { name: "watch a film",
    dueDate: '2022-12-22'},
  { name: "write journal",
    dueDate: '2022-12-28'}
];

renderToDoList();

function renderToDoList(){
  //a string to accumulate the result
  let todoListHTML = '';

  for(let i =0; i< todoList.length; i++){
    //updating to do list item as an object instead of a string
    const todoObject = todoList[i];
    //const name = todoObject.name;
  //object restructuring can be used instead of above line
    const {name, dueDate} = todoObject; 
    //const dueDate = todoObject.dueDate;
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-button" onClick="
        todoList.splice(${i},1);
        renderToDoList();
      "> Delete </button> 
    `;

    //accumulator string - to combine all the <p> items for to do list items
    todoListHTML += html;
  }

  //display accumulator result
  console.log(todoListHTML);
  
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}



function addTodo(){
  const inputElement = document.querySelector('.js-todo-item');
  const name = inputElement.value;
  //console.log(name);

  //getting the due date inserted by the user
  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  
  //todoList.push(name);
//Now, instead of just a name, we have insert an object to the array
 todoList.push({
  //name: name,
  name,
  //dueDate: dueDate
  dueDate
 });


  console.log(todoList);

  inputElement.value = '';

  renderToDoList();
}