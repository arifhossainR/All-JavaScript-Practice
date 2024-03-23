document.getElementById('demo').innerHTML = "Arif Hossain";
document.getElementsByTagName('a')[0].innerHTML = "It is A Tag."
document.getElementById("itsTag").innerHTML = "h2 tag."
console.log(document.getElementById("itsTag"));

document.querySelector(".aClass");
document.querySelectorAll(".aClass");
document.getElementById("myimage").src = "./ArifScreenshot_20230911-225448.jpg";

let date = new Date();

const element = document.getElementById("demo2");
element.innerHTML = `Today is ${Date()}`;