import './keyboardButton.scss';

const keyboardButton = (keyData, language) => {
  const button = document.createElement('div');
  button.classList.add('keyboard-button');

  const {
    classes, eng, ru, engUpper, ruUpper, keycode,
  } = keyData;

  if (classes) {
    button.classList.add(...classes);
  }
  button.setAttribute('data-eng', eng);
  button.setAttribute('data-engUpper', engUpper);
  button.setAttribute('data-ru', ru);
  button.setAttribute('data-ruUpper', ruUpper);
  button.setAttribute('data-keycode', keycode);
  button.innerText = keyData[language] || eng;

  return button;
};

export default keyboardButton;
