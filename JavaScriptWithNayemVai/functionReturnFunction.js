function first(variable1)
{
    function second(variable2)
    {
        return variable1 + ", " + variable2;
    }

    return second;
}
let firstReturn = first("I am");
let finalResult = firstReturn("Arif Hossain");
console.log(finalResult);




// another Practice
function base(base)
{
    function power(power)
    {
        let result = 1;
        for(let i=1; i<=power; i++)
        {
            result *= base;
        }
        return result;
    }
    return power;
}
let storePower = base(3);
let powerResult1 = storePower(4);
console.log(powerResult1);
let storePower2 = base(2);
let powerResult2 = storePower2(5);
console.log(powerResult2);