function foc(selector) {
  const buttonElement = document.querySelector(selector);

  const isToggled = buttonElement.classList.contains('is-toggled');
  console.log(isToggled);

  if (!isToggled) {
    turningOffPrevious();
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}

function turningOffPrevious(){
const previousButtonElement1 = document.querySelector('.is-toggled');
if(previousButtonElement1){
  previousButtonElement1.classList.remove('is-toggled');
}
}