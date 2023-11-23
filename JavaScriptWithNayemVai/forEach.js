// let ar = [[3, 4, 5, 6, 8], [2, 1, 9], [7, 8, 1]]

let arr = [3, 4, 5, 6, 8]

// ar.forEach(function(element, ind, arr){
//     console.log(element, ind, arr);
// })

// ar.forEach((element, ind, arr) => {
//     console.log(element, ind, arr);
// })

// ar.map(function(element, ind, arr){
//     console.log(element, ind, arr);
// })

// ar.map((element, ind, arr) => {
//     console.log(element, ind, arr);
// })

arr.filter(function(value, index, array){
    let even=0
    if(value%2==0){
        even = value
    }
    console.log(even);
})

// console.log(newAr);