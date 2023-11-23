let arr = [1, 3, 4, 6];

let newArr = arr.map(function(value, index, ar){
    return value*value;
})

console.log(newArr);