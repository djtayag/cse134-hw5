let dateInput = document.getElementById('date');
let currentDate = new Date();
dateInput.value = currentDate.toString();

function postData() {
    let currentDate = new Date();
    dateInput.value = currentDate.toString();

    let form = document.getElementById('form');
    let data = new FormData(form);

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      let output = document.getElementById('response');
      output.innerHTML = "";
    // Create a table element
    let table = document.createElement('table');
        // Iterate over each property of the JSON object
        for (let key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              // Create a table row for the property
              let row = document.createElement('tr');
              
              // Create a table cell for the property name
              let nameCell = document.createElement('td');
              nameCell.textContent = key;
              
              // Create a table cell for the property value
              let valueCell = document.createElement('td');
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
        let output = document.getElementById('response');
        output.innerHTML = "";
        // Create a table element
    let table = document.createElement('table');
    // Iterate over each property of the JSON object
    for (let key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          // Create a table row for the property
          let row = document.createElement('tr');
          
          // Create a table cell for the property name
          let nameCell = document.createElement('td');
          nameCell.textContent = key;
          
          // Create a table cell for the property value
          let valueCell = document.createElement('td');
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
    let currentDate = new Date();
    dateInput.value = currentDate.toString();

    let form = document.getElementById('form');
    let data = new FormData(form);

    fetch('https://httpbin.org/put', {
      method: 'PUT',
      body: data
    })
    .then(response => response.json())
    .then(data => {
      let output = document.getElementById('response');
      output.innerHTML = "";
    // Create a table element
    let table = document.createElement('table');
        // Iterate over each property of the JSON object
        for (let key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
              // Create a table row for the property
              let row = document.createElement('tr');
              
              // Create a table cell for the property name
              let nameCell = document.createElement('td');
              nameCell.textContent = key;
              
              // Create a table cell for the property value
              let valueCell = document.createElement('td');
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
        let output = document.getElementById('response');
        output.innerHTML = "";
        // Create a table element
    let table = document.createElement('table');
    // Iterate over each property of the JSON object
    for (let key in data) {
        if (Object.hasOwnProperty.call(data, key)) {
          // Create a table row for the property
          let row = document.createElement('tr');
          
          // Create a table cell for the property name
          let nameCell = document.createElement('td');
          nameCell.textContent = key;
          
          // Create a table cell for the property value
          let valueCell = document.createElement('td');
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