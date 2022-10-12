/* eslint-disable import/prefer-default-export */
export const getScores = () => {
  return fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zeKfA7DX1DjtG4Ukhfvj/scores')
  .then((response) => response.json())
  .then((json) => {
    return json
  });
}
