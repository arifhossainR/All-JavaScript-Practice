a();
function a()
{
    console.log("Hello EveryOne");
}


/* error cause when hoisting b variable is undefined so 
function expression will not execute before declare */ 
let b = function c(){
    console.log("Hello C function");
}
b();