// for(let i=1; i<=1000; i++)
// {
//     if(i%2==0){
//         console.log(i);
//     }
// }

// for(let i=1; i<=1000; i++)
// {
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// for(let i=1; i>=1; i+=3)
// {
//     if(i%11==0){
//         console.log(i);
//         break;
//     }
// }

// for(let i=1; i<=500; i++)
// {
//     if(i%3==0 && i%4==0){
//         console.log(i);
//     }
// }
let count=0;
for(let i=10000; i>=10000; i++)
{
    if(count==50){
        break;
    }
    document.getElementById("demo").innerHTML = i;
    count++;
}