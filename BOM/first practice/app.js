var myWindow;
const width = document.querySelector("#width");
const height = document.querySelector("#height");

width.innerHTML = window.innerWidth;
height.innerHTML = window.innerHeight;

function openWindow(){
    myWindow = window.open("https://google.com");
}

function closeWindow(){
    myWindow.close();
}