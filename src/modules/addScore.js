/* eslint-disable import/prefer-default-export */
export const addScore = (name, score) => fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/53cyDqO5JM4l6EFfiZKf/scores',
  {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(async(response) => {
    // return responseObj;
    const resPromise = await response.json();
    const responseObj = {
      status: response.status,
      ...resPromise,
    };
    return responseObj;
  });
