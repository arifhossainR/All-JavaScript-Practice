
function ItsContructor(){

    this.name = "Arif Hossain"
    this.id = "19CSE012"
    this.registration = 1312747287

    this.subFunction1OfConstructor = function(){
        return `It's Sub Function 1`
    }

    this.subFunction2OfConstructor = function(){
        return `It's Sub Function 2`
    }

}
let variable = new ItsContructor();
console.log(variable.name, variable.id, variable.registration, variable.subFunction1OfConstructor(), variable.subFunction2OfConstructor());

console.log(variable);
