let arr = [ 2, 4, 8, 9, 12 ];
let arr2 = [3, 4, 7, 1];
// console.log( (arr.reverse()).join(" | ") );
// console.log( (arr.reverse()).fill("Arif") );

// console.log(arr.concat(arr2));

// console.log(Array.isArray(arr2));

let arr3 = Array.from(arr);
arr3[4] = 10;

console.log(arr3);