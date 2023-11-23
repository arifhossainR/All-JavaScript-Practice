let arr = [1, 4, 2, 8, 9, 4, 89, 54, 32];

let newArr = arr.filter(function(value, index, arr){
    return value>10;
})
console.log(newArr,arr);
