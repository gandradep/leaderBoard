/* eslint-disable import/prefer-default-export */
export const addScore = (name, score) => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0c1YpfazrDql64Q7vk4a/scores',
  {
    method: 'POST',
    body: JSON.stringify({ user: name, score: score }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => json);
