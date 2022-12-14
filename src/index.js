import './style.css';
import { addScore } from './modules/addScore.js';

import { getScores } from './modules/getScores.js';

import { display } from './modules/displayScore.js';

const submitForm = document.getElementById('submit');
const refresh = document.querySelector('button');
const failed = document.getElementById('failed');
const added = document.getElementById('added');

getScores().then((response) => display(response.result));

submitForm.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = e.target.parentElement.firstElementChild;
  const score = name.nextElementSibling;
  const result = await addScore(name.value, Number(score.value));

  if (result.status === 400) {
    added.innerText = '';
    failed.innerText = 'Score was not added successfully.';
  } else {
    error.innerText = '';
    added.innerText = 'Score was added successfully!!';
  }
  name.value = '';
  score.value = '';
});

refresh.addEventListener('click', async () => {
  added.innerText = '';
  error.innerText = '';
  await getScores().then((response) => display(response.result));
});
