// class and constructor create an object of it's class. So constructor is like class in JS.
function Myconstructor(first, last, age, color){
    this.firstName = first;
    this.lastName = last;
    this.hisAge = age;
    this.fullName = function(){
        return this.firstName + " " + this.lastName;
    }
    this.myFunction = function(a){
        return a;
    }
    this.hisColor = color;
}
const arif = new Myconstructor("Arif ", "Hossain", 23, "blue");
const jasim = new Myconstructor("jasim ", "uddin", 21, "red");
const susmoy = new Myconstructor("susmoy ", "malakar", 25, "black");
console.log(arif.myFunction(5));
console.log(jasim.myFunction(5));
console.log(susmoy.myFunction(5));
console.log(typeof Myconstructor);
console.dir(Myconstructor);