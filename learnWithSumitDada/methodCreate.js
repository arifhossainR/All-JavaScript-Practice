const myMath = {
    pow: function(base, power){
        let result = 1;
        for(let i=1; i<=power; i++){
            result *= base;
        }
        return result;
    }
};

console.log(myMath.pow(2, 5));