const display = document.getElementById("display");
async function fetchAPI(){
    let myobj = await fetch("data.txt");
    let data = await myobj.text();
    display.innerText = data;
}