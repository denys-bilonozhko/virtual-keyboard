import './keyboardRow.scss';
import keyboardButton from '../keyboardButton/keyboardButton';

const keyboardRow = (keys) => {
  const row = document.createElement('div');
  row.classList.add('row');
  keys.forEach((key) => {
    const keyObject = key[Object.keys(key)];
    row.append(keyboardButton(keyObject));
  });
  return row;
};

export default keyboardRow;
