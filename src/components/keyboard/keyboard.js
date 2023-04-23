import './keyboard.scss';
import keys from '../../keys';
import keyboardRow from '../keyboardRow/keyboardRow';
import textInput from '../textInput/textInput';

const keyboardInput = textInput();
let language = 'eng';

const keyboard = () => {
  const keyboardLayout = document.createElement('div');
  keyboardLayout.classList.add('keyboard');
  keyboardLayout.append(keyboardInput);
  keys.forEach((key) => {
    keyboardLayout.append(keyboardRow(key));
  });

  keyboardLayout.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('keyboard-button--symbol')) {
      keyboardInput.focus();
      event.target.classList.add('keyboard-button--pressed');
      keyboardInput.value += event.target.textContent;
    }
  });

  keyboardLayout.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('keyboard-button--symbol')) {
      event.target.classList.remove('keyboard-button--pressed');
    }
  });

  keyboardLayout.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('keyboard-button')) {
      event.target.classList.add('keyboard-button--active');
    }
  });

  keyboardLayout.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('keyboard-button')) {
      event.target.classList.remove('keyboard-button--active');
      event.target.classList.remove('keyboard-button--pressed');
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey) {
      if (language === 'eng') {
        document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
          const currentKey = key;
          currentKey.textContent = key.dataset.ru;
        });
        language = 'ru';
      } else if (language === 'ru') {
        document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
          const currentKey = key;
          currentKey.textContent = key.dataset.eng;
        });
        language = 'eng';
      }
    }
  });

  document.body.addEventListener('keydown', (event) => {
    if (event.shiftKey) {
      document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
        const currentKey = key;
        currentKey.textContent = key.dataset[`${language}upper`];
      });
    }
  });

  document.body.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
      document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
        const currentKey = key;
        currentKey.textContent = key.dataset[language];
      });
    }
  });

  function keyboardKeyDown(e) {
    keyboardInput.focus();
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      if (e.keyCode === Number(key.dataset.keycode)) {
        e.preventDefault();
        key.classList.add('keyboard-button--pressed');
        keyboardInput.value += key.textContent;
      }
    });
  }

  document.body.addEventListener('keydown', (e) => keyboardKeyDown(e));

  document.body.addEventListener('keyup', (e) => {
    e.preventDefault();
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      if (e.keyCode === Number(key.dataset.keycode)) {
        key.classList.remove('keyboard-button--pressed');
      }
    });
  });

  document.body.addEventListener('keydown', (e) => {
    document.querySelectorAll('.keyboard-button--service').forEach((key) => {
      if (key.classList.contains(`keyboard-button--${e.code.toLowerCase()}`)) {
        e.preventDefault();
        document
          .querySelector(`.keyboard-button--${e.code.toLowerCase()}`)
          .classList.add('keyboard-button--pressed');
      }
    });
  });

  document.body.addEventListener('keyup', (e) => {
    document.querySelectorAll('.keyboard-button--service').forEach((key) => {
      if (key.classList.contains(`keyboard-button--${e.code.toLowerCase()}`)) {
        document
          .querySelector(`.keyboard-button--${e.code.toLowerCase()}`)
          .classList.remove('keyboard-button--pressed');
      }
    });
  });

  return keyboardLayout;
};

export default keyboard;
