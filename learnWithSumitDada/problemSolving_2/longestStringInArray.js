// find the longest string from an array of string and find it's index.



// method 1
const arr = ["String", "Arif Hossain", "susmoy", "learn with sumit"];
let length = -1;
let newArr = "";
let index = -1;
for(let i=0; i<arr.length; i++){
    if(arr[i].length>length){
        length = arr[i].length;
        newArr = arr[i];
        index = i;
    }
}
console.log(newArr, length, index, "\n");


// method 2
function longestString(arr){
    let finalLength = -1;
    let longString = "";
    let finalIndex = -1;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>finalLength){
            finalLength = arr[i].length;
            longString = arr[i];
            finalIndex = i;
        }
    }
    return [longString, finalLength, finalIndex];
}
console.log(longestString(arr));