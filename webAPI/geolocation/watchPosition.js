const display = document.getElementById("display");
function watchPosition(){
    if(navigator.geolocation){
        navigator.geolocation.watchPosition(showPosition, showError);
    }else{
        display.innerHTML = "This browser is not supported for geolocation !!!";
    }
}

function showPosition(instantPosition){
    display.innerHTML = "অক্ষ্যাংশ হলোঃ- " + instantPosition.coords.latitude + "<br>" + "দ্রাঘিমাংশ হলোঃ- " + instantPosition.coords.longitude;
}

function showError(Error){
    switch(Error.code)
    {
        case Error.PERMISSION_DENIED:
            display.innerHTML = "User denied the location permission.";
            break;
        case Error.POSITION_UNAVAILABLE:
            display.innerHTML = "location information is unavailable.";
            break;
        case Error.TIMEOUT:
            display.innerHTML = "The request to get user location timed out.";
            break;
        case Error.UNKNOWN_ERROR:
            display.innerHTML = "An unknown error occurred";
            break;
    }
}