import './style.css';
function component() {
  const element = document.createElement('div');
  element.innerHTML = 'hello webpack';
  element.classList.add('hello');
  return element;
}

document.body.appendChild(component());
