import './textInput.scss';

const textInput = () => {
  const textarea = document.createElement('textarea');
  textarea.className = 'keyboard-input';
  textarea.value = 'hello';
  return textarea;
};

export default textInput;
