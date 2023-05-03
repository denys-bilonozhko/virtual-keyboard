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
  button.setAttribute('data-engUpper', engUpper || eng);
  button.setAttribute('data-ru', ru || eng);
  button.setAttribute('data-ruUpper', ruUpper || eng);
  button.setAttribute('data-keycode', keycode || eng);
  button.innerText = keyData[language] || eng;

  return button;
};

export default keyboardButton;
