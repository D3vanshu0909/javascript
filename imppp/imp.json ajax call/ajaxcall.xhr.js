// Get references to the HTML elements with the IDs 'loadData', 'clearData', and 'userData'
var loadDataButton = document.getElementById('loadData');
var clearDataButton = document.getElementById('clearData');
var userDataTable = document.getElementById('userData');

// Function to fetch user data from JSONPlaceholder using XHR
function loadUserData() {
  // Create a new XHR object
  var xhr = new XMLHttpRequest();
  // Open a GET request to the specified URL
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  // Set the response type to JSON
  xhr.responseType = 'json';
  // When the response is loaded, execute this function
  xhr.onload = function() {
    // If the response was successful (status code 200)
    if (xhr.status === 200) {
      // Get the parsed JSON data from the response
      var userData = xhr.response;
      // Clear any existing data from the table and add the table header
      userDataTable.innerHTML = '<thead><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Website</th></tr></thead><tbody></tbody>';
      // Add the user data to the table row by row
      for (var i = 0; i < userData.length; i++) {
        var row = '<tr><td>' + userData[i].id + '</td><td>' + userData[i].name + '</td><td>' + userData[i].username + '</td><td>' + userData[i].email + '</td><td>' + userData[i].phone + '</td><td>' + userData[i].website + '</td></tr>';
        userDataTable.innerHTML += row;
      }
    }
  };
  // Send the request
  xhr.send();
}

// Function to clear user data from the table
function clearUserData() {
  // Set the contents of the table to an empty string
  userDataTable.innerHTML = '';
}

// Add event listeners to the buttons
// When the 'loadDataButton' is clicked, call the 'loadUserData' function
loadDataButton.addEventListener('click', loadUserData);
// When the 'clearDataButton' is clicked, call the 'clearUserData' function
clearDataButton.addEventListener('click', clearUserData);
