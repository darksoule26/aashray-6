fetch('GOOGLE-SHEET-ACCESS-URL')
  .then(response => response.json())
  .then(data => {
    const tableBody = document.querySelector('#data-table tbody');

    data.data.forEach(item => {
      const row = document.createElement('tr');

      Object.values(item).forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  })
  .catch(error => console.error(error));
