let timeoutReference;
let intervalReference;
function startTimeOut(){
    timeoutReference = setTimeout(function(){
        document.getElementById("timeOut").innerHTML = "2 Second over";
    }, 2000)
}
function stopTimeOut(){
    clearTimeout(timeoutReference);
}
function startInterval(){
    intervalReference = setInterval(function(){
        document.getElementById("interval").innerHTML = new Date().toLocaleTimeString();
    }, 1000)
}
function stopInterval(){
    clearInterval(intervalReference);
}