let condition = false;
console.log("print something 1");
const promice = new Promise(function(resolve, reject){
    setTimeout(function(){
        if(condition){
            resolve("print something 2");
        } else {
            reject("Failed.");
        }
    }, 3000);
});
promice
    .then(function(value){
        console.log(value);
    })
    .catch(function(error){
        console.log(error);
    })
console.log("print something 3");