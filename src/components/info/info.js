import './info.scss';

const info = () => {
  const div = document.createElement('div');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  div.className = 'info';
  p1.textContent = 'Windows OS';
  p2.textContent = 'To switch between keyboard layouts press Ctrl + Alt';
  p3.textContent = 'The Ctrl + A, Ctrl + X, Ctrl + C, and Ctrl + V combinations work as they should';
  div.append(p1, p2, p3);
  return div;
};

export default info;
