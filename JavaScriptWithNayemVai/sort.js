let objectArr = [
    {
        name: "Arif Hossain",
        age: 23
    },
    {
        name: "Susmoy Malakar",
        age: 22
    },
    {
        name: "Shahin SAheikh",
        age: 18
    },
    {
        name: "Obaidullah",
        age: 21
    }
];

let arr = [2, 8, 98, 54, 7, 5, 1, 34, 15, 21];

// sort number arr
arr.sort(function(a, b){
    if(a<b){
        return -1;
    }else if(a>b){
        return 1;
    }else{
        return 0;
    }
})
console.log(arr);


// object array sorting
objectArr.sort(function(a, b){
    if(a.age < b.age){
        return -1;
    }else if(a.age > b.age){
        return 1;
    }else{
        return 0;
    }
})

console.log(objectArr);