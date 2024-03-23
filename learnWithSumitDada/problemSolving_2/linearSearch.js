// input linear search ['a', 'b', 'c', 'd', 'e'], 'd'
// output index of d value or not found  implement by a function


// method one for problem solving
let arr = ['a', 'b', 'c', 'd', 'e', 'f'];
function linearSearch(array, searchValue){
    for(i of array){
        if(i===searchValue){
            return array.indexOf(i);
        }
    }
    return "not found";
}
console.log(linearSearch(arr, 'd'));



// method two for problem solving
arr.forEach(function(value, index, arr){
    if(value == 'd'){
        console.log(index);
    }
})