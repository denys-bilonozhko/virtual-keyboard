import './keyboardButton.scss';

const keyboardButton = (name, classes) => {
  const button = document.createElement('div');
  button.classList.add('keyboard-button');
  if (classes) {
    button.classList.add(...classes);
  }
  button.innerText = name;
  return button;
};

export default keyboardButton;
