function main(){
    let count = 0;
    function forClosure(){
        count += 5;
        return count;
    }
    return forClosure;
}
let storeClosure_byMain = main();
console.log(storeClosure_byMain());
console.log(storeClosure_byMain());
console.log(storeClosure_byMain());