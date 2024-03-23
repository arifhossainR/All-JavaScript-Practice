let arr = [4, 6, 9, 1, 3, 0, 5, 8, -4];

let result = arr.every(function(value){
    return value%2==0;
})
console.log(result);