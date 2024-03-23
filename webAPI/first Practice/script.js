function validation(){
    const inputFilled = document.getElementById("numberID");

    // this conditions set for custom message for error
    if(inputFilled.validity.rangeOverflow){
        inputFilled.setCustomValidity("number is over flow!");
    }else if(inputFilled.validity.rangeUnderflow){
        inputFilled.setCustomValidity("number is under flow!");
    }else if(inputFilled.validity.valueMissing){
        inputFilled.setCustomValidity("value missing!")
    }

    // this if condition is checked JS's built in validation
    if(!inputFilled.checkValidity()){
        document.getElementById("demo").innerHTML = inputFilled.validationMessage;
    }
}