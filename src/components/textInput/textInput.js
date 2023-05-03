import './textInput.scss';

class TextInput {
  constructor(className) {
    this.textarea = document.createElement('textarea');
    this.textarea.className = className;
    this.value = this.textarea.value;
  }
}

const textInput = new TextInput('keyboard-input');

export default textInput;
