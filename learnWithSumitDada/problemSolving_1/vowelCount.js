const vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "U", "u"];

let userInput = prompt("Enter your sentence or word:");

function vowelCount(sentence){
    let count = 0;
    const sentencesArray = Array.from(sentence);
    sentencesArray.forEach(function(value, index, array){
        if(vowel.includes(value)){
            count = count+1;
        }
    });

    return count;
}

document.getElementById("itspTagId").innerHTML = vowelCount(userInput);