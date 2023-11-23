const person = {
    firstName: "Arif ",
    lastName: "Hossain",
    age: 23,
    height: 1.64,
    fullName: function(){
        return (this.firstName + this.lastName);
    },
    getFullName: function(){
        return this.fullName();
    },
    console: function(){
        console.log(this.getFullName());
    }
}
person.console();