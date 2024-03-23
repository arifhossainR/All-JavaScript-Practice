function historyLength(){
    const Length = window.history.length;
    document.getElementById("historyLength").innerHTML = "History length: " + Length;

    alert(window.history.length);
}