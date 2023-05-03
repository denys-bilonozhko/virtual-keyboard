import './keyboardRow.scss';
import keyboardButton from '../keyboardButton/keyboardButton';

const keyboardRow = (keys, language) => {
  const row = document.createElement('div');
  row.classList.add('keyboard-row');
  keys.forEach((key) => {
    const keyObject = key[Object.keys(key)];
    row.append(keyboardButton(keyObject, language));
  });
  return row;
};

export default keyboardRow;
