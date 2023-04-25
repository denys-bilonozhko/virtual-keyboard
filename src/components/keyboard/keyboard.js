import './keyboard.scss';
import keys from '../../keys';
import keyboardRow from '../keyboardRow/keyboardRow';
import textInput from '../textInput/textInput';

const keyboardInput = textInput();
let language = localStorage.getItem('language')
  ? JSON.parse(localStorage.getItem('language'))
  : localStorage.setItem('language', JSON.stringify('eng'));
let isCapsLock = false;

const keyboard = () => {
  const keyboardLayout = document.createElement('div');
  keyboardLayout.classList.add('keyboard');
  keyboardLayout.append(keyboardInput);

  function loadKeys(lang) {
    keys.forEach((key) => {
      keyboardLayout.append(keyboardRow(key, lang));
    });
  }

  loadKeys(language);

  function insertAtCaret(text) {
    keyboardInput.setRangeText(
      text,
      keyboardInput.selectionStart,
      keyboardInput.selectionEnd,
      'end',
    );
  }

  function keyboardKeyDown(e) {
    keyboardInput.focus();
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      if (
        e.keyCode === Number(key.dataset.keycode) ||
        e === key.dataset.keycode
      ) {
        if (e.keyCode) e.preventDefault();
        key.classList.add('keyboard-button--pressed');
        insertAtCaret(key.textContent);
      }
    });
  }

  keyboardLayout.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('keyboard-button--symbol')) {
      keyboardKeyDown(event.target.dataset.keycode);
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

  function changeLanguage(lang) {
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      const currentKey = key;
      currentKey.textContent = key.dataset[lang];
    });
  }

  document.body.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.altKey) {
      if (language === 'eng') {
        language = 'ru';
        localStorage.setItem('language', JSON.stringify(language));
      } else {
        language = 'eng';
        localStorage.setItem('language', JSON.stringify(language));
      }

      changeLanguage(language);
    }
  });

  document.body.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key === 'Shift') {
      if (event.repeat) return;

      if (isCapsLock) {
        language = language.replace('upper', '');
      } else {
        language = `${language}upper`;
      }

      changeLanguage(language);
    }
  });

  document.body.addEventListener('keyup', (event) => {
    if (event.key === 'Shift') {
      if (event.repeat) return;
      if (isCapsLock) {
        language = `${language}upper`;
      } else {
        language = language.replace('upper', '');
      }
      changeLanguage(language);
    }
  });

  document.body.addEventListener('keydown', (e) => keyboardKeyDown(e));

  document.body.addEventListener('keyup', (e) => {
    e.preventDefault();
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      if (e.keyCode === Number(key.dataset.keycode)) {
        key.classList.remove('keyboard-button--pressed');
      }
    });
  });

  function capsLockToggle() {
    isCapsLock = !isCapsLock;
    document
      .querySelector('.keyboard-button--capslock')
      .classList.toggle('keyboard-button--pressed');
    language = isCapsLock ? `${language}upper` : language.replace('upper', '');
    changeLanguage(language);
  }

  document.body.addEventListener('keydown', (e) => {
    if (e.code === 'Tab') {
      insertAtCaret('  ');
    }

    if (e.code === 'Space') {
      insertAtCaret(' ');
    }

    if (e.code === 'CapsLock') {
      if (e.repeat) return;
      capsLockToggle();
      return;
    }

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
    if (e.code === 'CapsLock') {
      return;
    }
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
