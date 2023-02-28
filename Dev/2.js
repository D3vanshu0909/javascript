function createTable() {
    // Get a reference to the container element and the number of columns
    const container = document.getElementById("table-container");
    const numCols = document.getElementById("num-cols").value;
  
    // Check if the number of columns is valid (between 1 and 10)
    if (numCols < 1 || numCols > 10) {
      // If not, display a warning message and return without creating the table
      const warningMessage = document.getElementById("warning-message");
      warningMessage.style.display = "block";
      return;
    }
  
    // Clear any existing table from the container
    container.innerHTML = "";
  
    // Initialize an empty array for the column headings
    const headings = [];
  
    // Prompt the user to enter a heading for each column
    for (let i = 0; i < numCols; i++) {
      let heading = "";
      // Keep prompting until a non-empty string is entered
      while (heading.trim() === "") {
        heading = prompt(`Enter the heading for column ${i + 1}:`);
        if (heading.trim() === "") {
          alert("Please provide a heading for the column.");
        }
      }
      // Add the heading to the array
      headings.push(heading);
    }
  
    // Create the table, thead, and tbody elements
    const table = document.createElement("table");
    const tableHead = document.createElement("thead");
    const tableBody = document.createElement("tbody");
  
    // Create a row for the column headings
    const headRow = document.createElement("tr");
    // Create a th element for each heading and add it to the row
    headings.forEach((heading) => {
      const th = document.createElement("th");
      th.textContent = heading;
      headRow.appendChild(th);
    });
    // Add the row to the table head
    tableHead.appendChild(headRow);
  
    // Create a row for the data cells
    const dataRow = document.createElement("tr");
    // Create a td element for each column and add it to the row
    for (let j = 0; j < numCols; j++) {
      const td = document.createElement("td");
      td.textContent = "Data";
      dataRow.appendChild(td);
    }
    // Add the row to the table body
    tableBody.appendChild(dataRow);
  
    // Add the head and body to the table
    table.appendChild(tableHead);
    table.appendChild(tableBody);
    // Add the table to the container
    container.appendChild(table);
  }
  