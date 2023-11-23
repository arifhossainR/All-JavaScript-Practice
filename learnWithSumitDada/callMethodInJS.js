// main object is person
const person = {
    ForCallMethod: function (){
        return (this.firstName + " " + this.lastName);
    }
};


// but firstName and lastName will be from person1 or person2 object
const person1 = {
    firstName: "Arif",
    lastName: "Hossain"
};
const person2 = {
    firstName: "Susmoy",
    lastName: "Malakar"
};
console.log(person.ForCallMethod.call(person1));
console.log(person.ForCallMethod.call(person2));