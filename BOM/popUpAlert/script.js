//const confirmSelect = document.querySelector("#confirm");
//const promtSelect = document.querySelector("#promt");
function alertFunction(){
    window.alert("alert!!!");
    document.querySelector("#alert").innerHTML = "You pressed alert button !!!";
}
function confirmFunction(){
    let txt;
    if(window.confirm("are you ready?")){
        txt = "You pressed ok button";
    }else{
        txt = "You pressed cancelled button";
    }
    document.querySelector("#confirm").innerHTML = txt;
}
function promtFunction(){
    let txt;
    let value = window.prompt("Enter your name: ", "John Doe");
    if(value==null || value==""){
        txt = "user cancelled or filled is empty";
    }else{
        txt = `Hey, ${value}. What's up?`;
    }
    document.querySelector("#promt").innerHTML = txt;
}