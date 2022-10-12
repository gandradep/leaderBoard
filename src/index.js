import './style.css';
import { addScore } from './modules/addScore.js';

import { getScores } from './modules/getScores.js';

import { display } from './modules/displayScore.js';

const submitForm = document.getElementById('submit');
const refresh = document.querySelector('button');
const score = document.getElementById('score');

getScores().then((response) => display(response.result));

submitForm.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = e.target.parentElement.firstElementChild;
  const score = name.nextElementSibling;
  await addScore(name.value, Number(score.value));
});

refresh.addEventListener('click', async () => {
  await getScores().then((response) => display(response.result));
});

/* firefox is buggy with input type number so we check with js */
score.addEventListener('keypress', (event) => {
  const aCode = event.key ? event.key : event.keyCode;
  if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;
  return true;
});
