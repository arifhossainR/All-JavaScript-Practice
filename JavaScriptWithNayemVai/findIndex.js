let array = [2, 5, 7, 0, 4, 1, 8, 3, 9];

let val = array.findIndex(function(value, index){
    if (value==9) {
        return index;
    }
})
console.log(val);