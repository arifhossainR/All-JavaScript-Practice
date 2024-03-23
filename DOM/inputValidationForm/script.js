function validityCheck() {
    // const form = document.forms["myForm"];
    // const val = form["fname"].value;
    if (document.forms["myForm"]["fname"].value == "") {
      alert("Name must be filled out");
      return false;
    }
}

function valide(){
    let x = document.getElementById("myNumber").value;
    if(isNaN(x)){
        document.getElementById("demo").innerHTML = `${x} is invalid number.`;
    }else{
        document.getElementById("demo").innerHTML = `${x} is valid number.`;
    }
}