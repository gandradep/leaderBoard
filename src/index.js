import './style.css';
import { addScore } from './modules/addScore.js';

const submitForm = document.getElementById('submit');

submitForm.addEventListener('click', (e) => {
  e.preventDefault();
  const name = e.target.parentElement.firstElementChild;
  const score = name.nextElementSibling;
  console.log(name.value);
  console.log(score.value);
  addScore(name.value, score.value);
});
