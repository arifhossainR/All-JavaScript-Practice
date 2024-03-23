const obj = {
    a: "Arif Hossain",
    b: "",
    c: "learn with sumit",
    d: "false",
    e: 0,
    f: "NaN",
    g: NaN,
    h: "thanks all",
    i: undefined,
    j: false,
    k: true
};

function truthyProperty(object){
    for(let i in object){
        if(!obj[i]){
            delete obj[i];
        }
    }
    return object;
}
console.log(truthyProperty(obj));