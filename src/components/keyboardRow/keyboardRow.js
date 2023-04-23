import './keyboardRow.scss';
import keyboardButton from '../keyboardButton/keyboardButton';

const keyboardRow = (keys) => {
  const row = document.createElement('div');
  row.classList.add('row');
  keys.forEach((key) => {
    const keyName = Object.keys(key)[0];
    const classes = key[keyName];
    row.append(keyboardButton(keyName, classes));
  });
  return row;
};

export default keyboardRow;
