// steps of AJAX
// create a XMLHttprequest, onload callback function when response arrives, prepare request, send request

const display = document.getElementById("display");


function loadDataByAJAX(){
    // create a xml request
    const xhr = new XMLHttpRequest();

    // onload function when response arrives
    xhr.onload = function (){
        display.innerHTML = xhr.responseText;
    };

    // prepare request: GET, POST, DELETE, PUT, PATCH, OPTIONS
    xhr.open("GET", "./data.txt");

    // send request
    xhr.send();
}