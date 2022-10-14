/* eslint-disable import/prefer-default-export */
export const display = (data) => {
  const table = document.getElementById('result');
  table.innerText = '';
  data.forEach((item) => {
    const row = document.createElement('tr');
    const td = document.createElement('td');
    const name = document.createElement('span');
    const score = document.createElement('span');
    name.innerHTML = `${item.user} :`;
    name.classList.add('bold');
    score.innerHTML = item.score;
    td.append(name, score);
    row.appendChild(td);
    table.appendChild(row);
  });
};
