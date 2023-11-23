function mainFunction(a, b, callBackFunction) {
    let c = a + b;
    let d = a - b;
    return callBackFunction(c, d);
}

let result = mainFunction(8, 5, function(c, d){
    return c*d;
})
console.log(result);