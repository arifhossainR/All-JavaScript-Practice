let ar = [12, 3, 8, 9, 10, 45, 23, 51, 5, 8, 70, 100];

let element = 51;
let c = 0;
for(let i=0; i<ar.length; i++)
{
    if(ar[i]==element)
    {
        console.log("Founeded...");
        c = 1;
        break;
    }
}

if(c == 0){
    console.log("Not Found...");
}
