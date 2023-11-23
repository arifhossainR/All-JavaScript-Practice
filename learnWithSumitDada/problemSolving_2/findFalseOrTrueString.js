const mixedArr = [
    "AH",
    undefined,
    "learn with sumit",
    false,
    "",
    "Apple",
    50,
    "Arif Hossain",
    true,
    "Thanks all",
    0,
    "NaN",
    "0",
    NaN
];

// falsy value filtered
const falseString = mixedArr.filter(function(value, index, array){
    if(value==false){
        return true;
    }else{
        return false;
    }
})
console.log(falseString);


// truthy value filtered
const truthyString = mixedArr.filter(function(value, index, array){
    if(value){
        return true;
    }else{
        return false;
    }
})
console.log(truthyString);
console.log(typeof(NaN));