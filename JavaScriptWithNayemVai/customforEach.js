let arr = [2, 7, 8, 3, 4];

function customForEach(arr, callBack){
    for(let i=0; i < arr.length; i++){
        callBack(arr[i], i, arr);
    }
}

customForEach(arr, function(value, index, arr){
    console.log(value, index, arr);
})