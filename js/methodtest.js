const dateInput = document.getElementById('date');
const currentDate = new Date();
dateInput.value = currentDate.toString();

function postData() {
    const currentDate = new Date();
    dateInput.value = currentDate.toString();

    const form = document.getElementById('form');
    const data = new FormData(form);

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById('response');
      output.innerHTML = "";
    // Create a table element
    const table = document.createElement('table');
        // Iterate over each property of the JSON object
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              // Create a table row for the property
              const row = document.createElement('tr');
              
              // Create a table cell for the property name
              const nameCell = document.createElement('td');
              nameCell.textContent = key;
              
              // Create a table cell for the property value
              const valueCell = document.createElement('td');
              valueCell.textContent = JSON.stringify(data[key]);
              
              // Add the name and value cells to the row
              row.appendChild(nameCell);
              row.appendChild(valueCell);
              
              // Add the row to the table
              table.appendChild(row);
            }
          }
          
          // Add the table to the output div
          output.appendChild(table);
    })
    .catch(error => console.error(error));
  }

  function getData() {
    // Fetch the data from the API endpoint
    fetch('https://httpbin.org/get', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('response');
        output.innerHTML = "";
        // Create a table element
    const table = document.createElement('table');
    // Iterate over each property of the JSON object
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          // Create a table row for the property
          const row = document.createElement('tr');
          
          // Create a table cell for the property name
          const nameCell = document.createElement('td');
          nameCell.textContent = key;
          
          // Create a table cell for the property value
          const valueCell = document.createElement('td');
          valueCell.textContent = JSON.stringify(data[key]);
          
          // Add the name and value cells to the row
          row.appendChild(nameCell);
          row.appendChild(valueCell);
          
          // Add the row to the table
          table.appendChild(row);
        }
      }
      
      // Add the table to the output div
      output.appendChild(table);
    })
    .catch(error => console.error(error));
  }

function putData() {
    const currentDate = new Date();
    dateInput.value = currentDate.toString();

    const form = document.getElementById('form');
    const data = new FormData(form);

    fetch('https://httpbin.org/put', {
      method: 'PUT',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      const output = document.getElementById('response');
      output.innerHTML = "";
    // Create a table element
    const table = document.createElement('table');
        // Iterate over each property of the JSON object
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              // Create a table row for the property
              const row = document.createElement('tr');
              
              // Create a table cell for the property name
              const nameCell = document.createElement('td');
              nameCell.textContent = key;
              
              // Create a table cell for the property value
              const valueCell = document.createElement('td');
              valueCell.textContent = JSON.stringify(data[key]);
              
              // Add the name and value cells to the row
              row.appendChild(nameCell);
              row.appendChild(valueCell);
              
              // Add the row to the table
              table.appendChild(row);
            }
          }
          
          // Add the table to the output div
          output.appendChild(table);
    })
    .catch(error => console.error(error));
}

function deleteData() {
    // Fetch the data from the API endpoint
    fetch('https://httpbin.org/delete', {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        const output = document.getElementById('response');
        output.innerHTML = "";
        // Create a table element
    const table = document.createElement('table');
    // Iterate over each property of the JSON object
    for (const key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          // Create a table row for the property
          const row = document.createElement('tr');
          
          // Create a table cell for the property name
          const nameCell = document.createElement('td');
          nameCell.textContent = key;
          
          // Create a table cell for the property value
          const valueCell = document.createElement('td');
          valueCell.textContent = JSON.stringify(data[key]);
          
          // Add the name and value cells to the row
          row.appendChild(nameCell);
          row.appendChild(valueCell);
          
          // Add the row to the table
          table.appendChild(row);
        }
      }
      
      // Add the table to the output div
      output.appendChild(table);
    })
    .catch(error => console.error(error));
}