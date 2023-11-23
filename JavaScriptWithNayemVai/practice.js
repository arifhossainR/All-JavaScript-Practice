// for(let i=1; i<=50; i++)
// {
//     console.log(Math.round(Math.random()*50));
// }

// let date = new Date();


// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date.getMilliseconds());
// console.log(date.getMinutes());
// console.log(date.getMonth());
// console.log(date.getSeconds());
// console.log(date.getTime());

// for(; ;)
// {
//     let ran = Math.floor(Math.random()*10);
//     if(ran == 9){
//         console.log("Winner Winner Chicken Dinner");
//         break;
//     }else{
//         console.log(ran);
//     }
// }


// let st = "Arif Hossain";
// let leng=0;

// for(let i=0; st.charAt(i)!=''; i++)
// {
//     leng++;
// }

// console.log(leng);


// let ar = [7, 6, 8, 96, 3, 1, 9, 33];

// ar.splice(1, 2, 5);
// console.log(ar);



// let ar = [7, 6, 8, 96, 3, 1, 9, 33];

// let val = 1;
// let res=0;

// for(let i=0; i<ar.length; i++)
// {
//     if(ar[i]==val){
//         res = 1;
//     }
// }
// if(res==1){
//     console.log("Data is Found!!!");
// }else{
//     console.log("Not Found!!!");
// }



// let twoDarr = [
//     [10, 20, 30, 40], 
//     [50, 60, 70, 80],
//     [90, 100, 110, 120],
//     [130, 140, 150, 160]
// ]

// array traverse
// for(let i=0; i<twoDarr.length; i++)
// {
//     let store = '';
//     for(let j=0; j<twoDarr[i].length; j++)
//     {
//         store += " " + twoDarr[i][j];
//     }
//     console.log(store);
// }


// array traversing in reverse
// for(let i=twoDarr.length-1; i>=0; i--)
// {
//     let store = '';
//     for(let j=twoDarr[i].length-1; j>=0; j--)
//     {
//         store += twoDarr[i][j] + " ";
//     }
//     console.log(store);
// }

// let n = "Arif";


// console.log(n.charCodeAt(3));

let st = "Arif";
let str = "Hossain";

console.log(st.concat(" ",str));
let d = st.concat(" ", str).substr(5, 7);
console.log(d);