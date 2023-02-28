var loadDataButton = document.getElementById('loadData');
var clearDataButton = document.getElementById('clearData');
var userDataTable = document.getElementById('userData');

// Function to fetch user data from JSONPlaceholder using XHR
function loadUserData() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  xhr.responseType = 'json';
  xhr.onload = function() {
    if (xhr.status === 200) {
      var userData = xhr.response;
      // Clear any existing data from the table
      userDataTable.innerHTML = '<thead><tr><th>ID</th><th>Name</th><th>Username</th><th>Email</th><th>Phone</th><th>Website</th></tr></thead><tbody></tbody>';
      // Add the user data to the table
      for (var i = 0; i < userData.length; i++) {
        var row = '<tr><td>' + userData[i].id + '</td><td>' + userData[i].name + '</td><td>' + userData[i].username + '</td><td>' + userData[i].email + '</td><td>' + userData[i].phone + '</td><td>' + userData[i].website + '</td></tr>';
        userDataTable.innerHTML += row;
      }
    }
  };
  xhr.send();
}

// Function to clear user data from the table
function clearUserData() {
  userDataTable.innerHTML = '';
}

// Add event listeners to the buttons
loadDataButton.addEventListener('click', loadUserData);
clearDataButton.addEventListener('click', clearUserData);
