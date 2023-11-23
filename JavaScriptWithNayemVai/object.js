let ob = {
    classes: 5, roll: 6, Name: "Arif Hossin", Section: "Science", GPA: 4.94
}
let arek = 'friend'
ob.friend = "19CSE011";
// console.log(ob[arek]);

// for(let i in ob)
// {
//     console.log(i);
//     console.log(ob[i]);
// }



// console.log(Object.keys(ob));
// console.log(Object.values(ob));
// console.log(Object.entries(ob));


let ob2 = Object.assign({}, ob);
ob.classes = 90

console.log(ob);
console.log(ob2);