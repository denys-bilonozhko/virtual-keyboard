import './keyboardButton.scss';

const keyboardButton = (keyObject, language) => {
  const button = document.createElement('div');
  button.classList.add('keyboard-button');
  if (keyObject.classes) {
    button.classList.add(...keyObject.classes);
  }
  button.setAttribute('data-eng', keyObject.eng);
  button.setAttribute('data-engUpper', keyObject.engUpper);
  button.setAttribute('data-ru', keyObject.ru);
  button.setAttribute('data-ruUpper', keyObject.ruUpper);
  button.setAttribute('data-keycode', keyObject.keycode);
  button.innerText = keyObject[language] || keyObject.eng;

  return button;
};

export default keyboardButton;
