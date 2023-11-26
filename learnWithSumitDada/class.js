// class and constructor create an object of it's class. So constructor is like class in JS.
class Myclass {
    constructor(name, year){
        this.amarName = name;
        this.amarBoyos = year;
    }
    itsMethod(variable){
        return (`My name is ${this.amarName} and i am ${this.amarBoyos} years old. My variable is ${variable} !!!`);
    }
}
const arif = new Myclass("Arif Hossain", 23);
console.log(arif.itsMethod("19CSE012"));
console.log(arif.amarName);
console.log(arif.amarBoyos);

const susmoy = new Myclass("Susmoy Malakar", 24);
console.log(susmoy.itsMethod("19CSE011"));
console.log(susmoy.amarName);
console.log(susmoy.amarBoyos);