import './keyboard.scss';
import keys from '../../keys';
import keyboardRow from '../keyboardRow/keyboardRow';
import textInput from '../textInput/textInput';

const keyboardInput = textInput.textarea;
let language = localStorage.getItem('language')
  ? JSON.parse(localStorage.getItem('language'))
  : localStorage.setItem('language', JSON.stringify('eng'));
let isCapsLock = false;
let clipboard = '';

const keyboard = () => {
  const keyboardLayout = document.createElement('div');
  keyboardLayout.classList.add('keyboard');
  keyboardLayout.append(keyboardInput);

  const loadKeys = (lang) => {
    keys.forEach((key) => {
      keyboardLayout.append(keyboardRow(key, lang));
    });
  };

  loadKeys(language);

  const insertAtCaret = (text) => {
    keyboardInput.setRangeText(
      text,
      keyboardInput.selectionStart,
      keyboardInput.selectionEnd,
      'end',
    );
  };

  const backspace = () => {
    const start = keyboardInput.selectionStart;
    const end = keyboardInput.selectionEnd;

    if (!keyboardInput.setRangeText) {
      return;
    }
    if (start >= end) {
      if (start <= 0 || !keyboardInput.setSelectionRange) {
        return;
      }
      keyboardInput.setSelectionRange(start - 1, start);
    }

    keyboardInput.setRangeText('');
    const e = document.createEvent('HTMLEvents');
    e.initEvent('input', true, false);
    keyboardInput.dispatchEvent(e);
  };

  const changeLanguage = (lang) => {
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      const currentKey = key;
      currentKey.textContent = key.dataset[lang];
    });
  };

  const capsLockToggle = (e) => {
    isCapsLock = !isCapsLock;
    document
      .querySelector('.keyboard-button--capslock')
      .classList.toggle('keyboard-button--pressed');
    if (e.shiftKey) {
      language = isCapsLock
        ? language.replace('upper', '')
        : `${language}upper`;
    } else {
      language = isCapsLock
        ? `${language}upper`
        : language.replace('upper', '');
    }
    changeLanguage(language);
  };

  const keyboardKeyDown = (e) => {
    keyboardInput.focus();
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      if (e.keyCode === +key.dataset.keycode || e === key.dataset.keycode) {
        if (e.keyCode) e.preventDefault();
        key.classList.add('keyboard-button--pressed');

        if (e.keyCode === 65 && e.ctrlKey) {
          keyboardInput.select();
          return;
        }

        const startPos = keyboardInput.selectionStart;
        const endPos = keyboardInput.selectionEnd;
        const selectedText = keyboardInput.value.substring(startPos, endPos);

        if (e.keyCode === 88 && e.ctrlKey) {
          keyboardInput.value = keyboardInput.value.replace(selectedText, '');
          clipboard = selectedText;
          navigator.clipboard.writeText(selectedText);
          keyboardInput.selectionStart = startPos;
          keyboardInput.selectionEnd = startPos;
          return;
        }

        if (e.keyCode === 67 && e.ctrlKey) {
          clipboard = selectedText;
          navigator.clipboard.writeText(selectedText);
          return;
        }

        if (e.keyCode === 86 && e.ctrlKey) {
          insertAtCaret(clipboard);
          return;
        }

        if (key.dataset.keycode === 'language') {
          return;
        }

        insertAtCaret(key.textContent);
      }
    });
  };

  const keyboardKeyUp = (e) => {
    e.preventDefault();
    document.querySelectorAll('.keyboard-button--symbol').forEach((key) => {
      if (e.keyCode === Number(key.dataset.keycode)) {
        key.classList.remove('keyboard-button--pressed');
      }
    });
  };

  const keyboardServiceKeyDown = (code, e) => {
    keyboardInput.focus();
    e.preventDefault();
    if ((e.ctrlKey && e.altKey) || code === 'language') {
      if (e.shiftKey) return;
      if (language === 'eng' || language === 'engupper') {
        language = 'ru';
        localStorage.setItem('language', JSON.stringify(language));
      } else {
        language = 'eng';
        localStorage.setItem('language', JSON.stringify(language));
      }
      if (isCapsLock) language += 'upper';
      changeLanguage(language);
    }

    if (code === 'ShiftLeft' || code === 'ShiftRight') {
      if (e.repeat) return;
      if (!language) language = 'eng';
      if (isCapsLock) {
        language = language.replace('upper', '');
      } else {
        language = `${language}upper`;
      }

      changeLanguage(language);
    }

    if (code === 'Tab') {
      insertAtCaret('\t');
    }

    if (code === 'Space') {
      insertAtCaret(' ');
    }

    if (code === 'Enter') {
      insertAtCaret('\n');
    }

    if (code === 'CapsLock') {
      if (e.repeat) return;
      capsLockToggle(e);
      return;
    }

    if (code === 'Backspace') {
      backspace();
    }

    document.querySelectorAll('.keyboard-button--service').forEach((key) => {
      if (key.classList.contains(`keyboard-button--${code.toLowerCase()}`)) {
        document
          .querySelector(`.keyboard-button--${code.toLowerCase()}`)
          .classList.add('keyboard-button--pressed');
      }
    });
  };

  const keyboardServiceKeyUp = (code, e) => {
    if (e.key === 'Shift' || code === 'ShiftLeft') {
      if (e.repeat) return;
      if (isCapsLock) {
        language = `${language}upper`;
      } else {
        language = language.replace('upper', '');
      }
      changeLanguage(language);
    }

    if (code === 'CapsLock') {
      return;
    }

    document.querySelectorAll('.keyboard-button--service').forEach((key) => {
      if (key.classList.contains(`keyboard-button--${code.toLowerCase()}`)) {
        document
          .querySelector(`.keyboard-button--${code.toLowerCase()}`)
          .classList.remove('keyboard-button--pressed');
      }
    });
  };

  keyboardLayout.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('keyboard-button--symbol')) {
      keyboardKeyDown(event.target.dataset.keycode);
    }

    if (event.target.classList.contains('keyboard-button--service')) {
      keyboardServiceKeyDown(event.target.dataset.keycode, event);
    }
  });

  keyboardLayout.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('keyboard-button--symbol')) {
      event.target.classList.remove('keyboard-button--pressed');
    }

    if (event.target.classList.contains('keyboard-button--service')) {
      keyboardServiceKeyUp(event.target.dataset.keycode, event);
    }
  });

  keyboardLayout.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('keyboard-button')) {
      event.target.classList.add('keyboard-button--active');
    }
  });

  keyboardLayout.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('keyboard-button--capslock')) {
      event.target.classList.remove('keyboard-button--active');
      return;
    }

    if (event.target.classList.contains('keyboard-button')) {
      event.target.classList.remove('keyboard-button--active');
      event.target.classList.remove('keyboard-button--pressed');
    }
  });

  document.body.addEventListener('keydown', (e) => keyboardKeyDown(e));
  document.body.addEventListener('keydown', (e) => keyboardServiceKeyDown(e.code, e));
  document.body.addEventListener('keyup', (e) => keyboardKeyUp(e));
  document.body.addEventListener('keyup', (e) => keyboardServiceKeyUp(e.code, e));

  return keyboardLayout;
};

export default keyboard;
