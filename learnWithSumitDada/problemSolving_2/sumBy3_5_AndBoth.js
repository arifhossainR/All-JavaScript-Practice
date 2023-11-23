// find those values that are divisible by 3, 5 and both

function myFunction(){
    const arr = [];
    for(let i=1; i<=100; i++){
        if(i%3==0 || i%5==0 || (i%3==0 && i%5==0)){
            arr.push(i);
        }
    }
    return arr;
}
console.log(myFunction());