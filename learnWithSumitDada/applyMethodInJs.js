const person = {
    fullName: function (city, country, others){
        return (this.firstName + " " + this.lastName + " " + city + " " + country + " " + others);
    }
}
const person1 = {
    firstName: "Arif",
    lastName: "Hossain"
}
const person2 = {
    firstName: "Susmoy",
    lastName: "Malakar"
}

// apply method can pass array
console.log(person.fullName.apply(person1, ["Sirajganj", "Bangladesh", "Ghurka"]));
console.log(person.fullName.apply(person2, ["Khulna", "Bangladesh", "Rupsha"]));

// find maximum number by apply method that's power is passing array
console.log(Math.max.apply(null, [2, 5, 7, 8, 3, 9, 4]));