function createTable() {
  const container = document.getElementById("table-container");
  const numCols = document.getElementById("num-cols").value;

  if (numCols < 1 || numCols > 10) {
    const warningMessage = document.getElementById("warning-message");
    warningMessage.style.display = "block";
    return;
  }
  container.innerHTML = "";
  
  const headings = [];
  for (let i = 0; i < numCols; i++) {
    let heading = "";
    while (heading.trim() === "") {
      heading = prompt(`Enter the heading for column ${i + 1}:`);
      if (heading.trim() === "") {
        alert("Please provide a heading for the column.");
      }
    }
    headings.push(heading);
  } 
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const tableBody = document.createElement("tbody");

  const headRow = document.createElement("tr");
  headings.forEach((heading) => {
    const th = document.createElement("th");
    th.textContent = heading;
    headRow.appendChild(th);
  });
  tableHead.appendChild(headRow);

  const dataRow = document.createElement("tr");
  for (let j = 0; j < numCols; j++) {
    const td = document.createElement("td");
    td.textContent = "";
    dataRow.appendChild(td);
  }
  tableBody.appendChild(dataRow);
  table.appendChild(tableHead);
  table.appendChild(tableBody);
  container.appendChild(table);
}
