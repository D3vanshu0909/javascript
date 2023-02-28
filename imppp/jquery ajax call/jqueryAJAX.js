// Function to fetch user data from JSONPlaceholder using XHR
function loadUserData() {
    // Create a new XHR object
    var xhr = new XMLHttpRequest();
    // Open a GET request to the specified URL
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
    // Set the response type to JSON
    xhr.responseType = 'json';
    // When the response is loaded, execute this function
    xhr.onload = function () {
        // If the response was successful (status code 200)
        if (xhr.status === 200) {
            // Get the parsed JSON data from the response
            var userData = xhr.response;
            // Clear any existing data from the table
            $('#userData').DataTable().clear();
            // Add the user data to the table row by row
            for (var i = 0; i < userData.length; i++) {
                var rowData = [
                    userData[i].albumId,
                    userData[i].id,
                    userData[i].title,
                    userData[i].url,
                ];
                $('#userData').DataTable().row.add(rowData);
            }
            // Update the table with the new data
            $('#userData').DataTable().draw();
        }
    };
    // Send the request
    xhr.send();
}

// Function to clear user data from the table
function clearUserData() {
    // Clear the data from the DataTable
    $('#userData').DataTable().clear().draw();
}

// Add event listeners to the buttons
// When the 'loadData' button is clicked, call the 'loadUserData' function
$('#loadData').on('click', loadUserData);
// When the 'clearData' button is clicked, call the 'clearUserData' function
$('#clearData').on('click', clearUserData);

// Initialize the DataTable
$(document).ready(function () {
    $('#userData').DataTable();
});
