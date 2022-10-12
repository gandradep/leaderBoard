/* eslint-disable import/prefer-default-export */
export const addScore = (name, score) => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zeKfA7DX1DjtG4Ukhfvj/scores', {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score: score
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((response) => response.json())
  .then((json) => console.log(json));
}
