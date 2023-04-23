import './keyboard.scss';
import keys from '../../keys';
import keyboardRow from '../keyboardRow/keyboardRow';

const keyboard = () => {
  const keyboardLayout = document.createElement('div');
  keyboardLayout.classList.add('keyboard');
  keyboardLayout.append(keyboardRow(keys.firstRow));
  keyboardLayout.append(keyboardRow(keys.secondRow));
  keyboardLayout.append(keyboardRow(keys.thirdRow));
  keyboardLayout.append(keyboardRow(keys.fourthRow));
  keyboardLayout.append(keyboardRow(keys.fifthRow));

  keyboardLayout.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('keyboard-button')) {
      event.target.classList.add('keyboard-button--pressed');
    }
  });

  keyboardLayout.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('keyboard-button')) {
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
  return keyboardLayout;
};

export default keyboard;
