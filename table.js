 function generateTable() {
      const start = parseInt(document.getElementById('start').value);
      const end = parseInt(document.getElementById('end').value);

      if (start < 2 || start > 10 || end > 10 || end < 2) {
        alert("Please enter numbers between 2 and 10");
        return;
      }

      const start2 = Math.min(start, end);
      const end2 = Math.max(start, end);

      const container = document.getElementById("tableContainer");
      container.innerHTML = ''; // Clear previous table

      const table = document.createElement("table");

   
      const headerRow = document.createElement("tr");
      const emptyCell = document.createElement("th");
      headerRow.appendChild(emptyCell);

      for (let i = 1; i <= end2; i++) {
        const th = document.createElement("th");
        th.textContent = i;
        headerRow.appendChild(th);
      }

      table.appendChild(headerRow);
   
      for (let i = 1; i <= start2; i++) {
        const row = document.createElement("tr");

        const rowHeader = document.createElement("th");
        rowHeader.textContent = i;
        row.appendChild(rowHeader);

        for (let j = 1; j <= end2; j++) {
          const cell = document.createElement("td");
          cell.textContent = i * j;
          row.appendChild(cell);
        }

        table.appendChild(row);
      }

      container.appendChild(table);
    }