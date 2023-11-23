let name = prompt("Enter your name: ");
let roll = prompt("Enter your roll number: ");

let obj = {}
obj.bn = prompt("Bangla: ");
obj.eng = prompt("English: ");
obj.math = prompt("Mathematics: ");
obj.phy = prompt("Physics: ");
obj.chem = prompt("Chemistry: ");
obj.bio = prompt("Biology: ");
obj.highM = prompt("Higher Mathematics: ");


console.log(`

        Name: ${name}
        Roll: ${roll}


    Subjects        GPA            Grade
    -----------------------------------------------------------------------

    ${obj.bn}               ${fun(obj.bn)}              ${funGrade(obj.bn)}
    ${obj.eng}              ${fun(obj.eng)}             ${funGrade(obj.eng)}
    ${obj.math}             ${fun(obj.math)}            ${funGrade(obj.math)}
    ${obj.phy}              ${fun(obj.phy)}             ${funGrade(obj.phy)}
    ${obj.chem}             ${fun(obj.chem)}            ${funGrade(obj.chem)}
    ${obj.bio}              ${fun(obj.bio)}             ${funGrade(obj.bio)}
    ${obj.highM}            ${fun(obj.highM)}           ${funGrade(obj.highM)}
    ----------------------------------------------------------------------------
                ${parseFloat((fun(obj.eng) + fun(obj.bn) + fun(obj.math) + fun(obj.phy) +fun(obj.chem) + fun(obj.bio) + ((fun(obj.highM)>=3.0)? fun(obj.highM)-2 : fun(obj.highM) ) )/6)}       ${finalRes(fun(obj.bn), fun(obj.eng), fun(obj.math), fun(obj.phy), fun(obj.chem), fun(obj.bio), fun(obj.highM))}


`);