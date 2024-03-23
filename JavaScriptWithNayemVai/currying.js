function first(a)
{
    function second(b)
    {
        function third(c)
        {
            return (a + b + c);
        }
        return third;
    }
    return second;
}
let result = first(1)(2)(3);
console.log(result);