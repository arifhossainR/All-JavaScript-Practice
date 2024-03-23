class myclass{
    constructor(name){
        this.firstName = name;
    }
    static hello(r){
        return (`my name is ${r.firstName}. I am static. I am called by class name only.`);
    }
};
let obj = new myclass("Arif Hossain");
console.log(myclass.hello(obj));
console.log(obj.firstName);