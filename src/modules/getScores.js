/* eslint-disable import/prefer-default-export */
export const getScores = () => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/53cyDqO5JM4l6EFfiZKf/scores')
  .then((response) => response.json())
  .then((json) => json);
