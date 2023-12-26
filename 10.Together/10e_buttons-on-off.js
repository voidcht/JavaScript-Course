function foc(selector) {
  const buttonElement = document.querySelector(selector);

  const isToggled = buttonElement.classList.contains('is-toggled');
  console.log(isToggled);

  if (!isToggled) {
    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}