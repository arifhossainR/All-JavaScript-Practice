let rollNumber = [89, 65, 6, 9, 17, 54, 2, 5];
function ascendingNumber(a, b)
{
    return a - b;
}

let newArray = rollNumber.sort(ascendingNumber);
console.log(newArray);