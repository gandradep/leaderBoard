import './style.css';
import { addScore } from './modules/addScore.js';

import { getScores } from './modules/getScores.js';

import { display } from './modules/displayScore.js'

const submitForm = document.getElementById('submit');
const refresh = document.querySelector('button');
const score = document.getElementById('score');
const message = document.getElementById('message');

submitForm.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = e.target.parentElement.firstElementChild;
  const score = name.nextElementSibling;
  await addScore(name.value, Number(score.value)).then(response => console.log(response));
});

refresh.addEventListener('click', async (e) => {
  let data = [];
  await getScores().then(response => data=response.result);
  display(data);
});

/* firefox is buggy with inut type number so we check with js */
score.addEventListener('keypress', (event) => {
  var aCode = event.key ? event.key : event.keyCode;
  if (aCode > 31 && (aCode < 48 || aCode > 57)) return false;
  return true;
});
