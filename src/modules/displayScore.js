/* eslint-disable import/prefer-default-export */
export const display = (data) => {
  const table = document.getElementById('result');
  table.innerText = '';
  data.forEach((item) => {
    const row = document.createElement('tr');
    const td = document.createElement('td');      
    td.innerHTML = `${item.user}: ${item.score}`;
    row.appendChild(td);
    table.appendChild(row);
  });
};
