// function Fun(namee = "Defaulter", age = 0) {
//     return `Name: ${namee} and ages: ${2023 - age}`;
// }

// for(let i=0; i<=1; i++)
// {
//     console.log(Fun(prompt("Enter name: "), prompt("Enter your birth date: ")));
// }


// function print() {
//     console.log("It's function!!! ");
// }

// console.log(print());


function argumentsFunction(){
    let sum = 0;
    for(let i=0; i<arguments.length; i++)
    {
        sum += arguments[i];
    }
    return sum;
}

console.log(argumentsFunction(1, 7, 5, 7, 3, 5, 90));