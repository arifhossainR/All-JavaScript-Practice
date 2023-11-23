let text = "learn with SuMit";

console.log(text.replace(/sumit/i, "Arif Hossain"));
console.log(text.replace(/([lw]|[rs])/ig, "replace"));

// match method
let text2 = "arif hossain kharan";
console.log(text2.match(/ar+/g)); // match anyString that contains at least one n
console.log(text2.match(/\bAr*/ig)); // match anyString that contains zero or more occurrences of n

// text method
let another = /ar/ig;
console.log(another.test("Arif Hossain arif"));