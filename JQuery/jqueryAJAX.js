
function loadUserData() {
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);

    xhr.responseType = 'json';

    xhr.onload = function () {

        if (xhr.status === 200) {

            var userData = xhr.response;

            $('#userData').DataTable().clear();

            for (var i = 0; i < userData.length; i++) {
                var rowData = [
                    userData[i].albumId,
                    userData[i].id,
                    userData[i].title,
                    userData[i].url,
                ];
                $('#userData').DataTable().row.add(rowData);
            }

            $('#userData').DataTable().draw();
        }
    };

    xhr.send();
}


function clearUserData() {

    $('#userData').DataTable().clear().draw();
}

$('#loadData').on('click', loadUserData);

$('#clearData').on('click', clearUserData);


$(document).ready(function () {
    $('#userData').DataTable();
});




