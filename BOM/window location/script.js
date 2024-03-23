const href = document.querySelector("#href");
const hostname = document.querySelector("#hostname");
const pathname = document.querySelector("#pathname");
const protocol = document.querySelector("#protocol");
const port = document.querySelector("#port");

href.innerHTML = `href:-  ${location.href}`;
hostname.innerHTML = `hostname:-  ${location.hostname}`;
pathname.innerHTML = `pathname:-  ${location.pathname}`;
protocol.innerHTML = `protocol:-  ${location.protocol}`;
port.innerHTML = `port:-  ${location.port}`;

function assignURL(){

    // anyone below
    {
    location.assign("hello.html");
    // location.assign("https://w3schools.com");
    }
}