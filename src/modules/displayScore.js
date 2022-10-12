/* eslint-disable import/prefer-default-export */
export const display = (data) => {
  const table = document.getElementById('result');
  data.forEach((item) => {
    const row = document.createElement('tr');
    const td = document.createElement('td');
    console.log(item.user);
    // td.innerText = item.user;
    td.innerHTML = `${item.user}: ${item.score}`;
    row.appendChild(td);
    table.appendChild(row);

  });

}
