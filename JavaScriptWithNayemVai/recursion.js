let sum = 0;
function sumFunc(n)
{
    if(n==0){
        return;
    }
    sum += n;
    sumFunc(n-1);
    return sum;
}
console.log(sumFunc(10));


// mutiply section
function multiply(n)
{
    if(n==1){
        return 1;
    }
    return n * multiply(n-1);
}
console.log(multiply(100));



// arr sum
const arr = [1, 6, 4, 3, 9];
function arrSum(arr, n)
{
    if(n==arr.length){
        return 0;
    }
    return arr[n] + arrSum(arr, n+1);
}
console.log(arrSum(arr, 0));