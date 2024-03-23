let arr = [1, 2, 3, 4, 5, 6];


// function customMap(arr){
//     let newArr = [];
//     for(let i=0; i<arr.length; i++){
//         let tmp = arr[i]*arr[i];
//         newArr.push(tmp);
//     }
//     return newArr;
// }
// console.log(customMap(arr));


function myMap(ar, callback){
    let emptyArr = [];
    for(let i=0; i<ar.length; i++){
        emptyArr.push(callback(ar[i], i, ar));
    }
    return emptyArr;
}

let newOneArr = myMap(arr, function(value, index, arr){
    return value * value;
})

console.log(newOneArr);