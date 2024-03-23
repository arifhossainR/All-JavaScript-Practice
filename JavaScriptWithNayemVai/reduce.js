let arr = [1, 4, 6, 2, 9, 7, 8, 3];

let max = arr.reduce(function(previous, current){
    return Math.max(previous, current);
}, 100)

let sum = arr.reduce(function(previous, current){
    return (previous + current);
})

console.log(max, sum);