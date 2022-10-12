/* eslint-disable import/prefer-default-export */
export const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0c1YpfazrDql64Q7vk4a/scores')
  .then((response) => response.json())
  .then((json) => json);
