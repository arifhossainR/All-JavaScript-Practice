function fun(marks)
{
    let gpa;
    if(marks >= 80 && marks <= 100){
        gpa = parseFloat(5);
    }else if(marks >= 70 && marks <= 79){
        gpa = parseFloat(4);
    }else if(marks >= 60 && marks <= 69){
        gpa = parseFloat(3.5);
    }else if(marks >= 50 && marks <= 59){
        gpa = parseFloat(3);
    }else if(marks >= 40 && marks <= 49){
        gpa = parseFloat(2);
    }else if(marks >= 33 && marks <= 39){
        gpa = parseFloat(1);
    }else{
        gpa = parseFloat(0);
    }

    return gpa;
}

function funGrade(marks)
{
    let grade;
    if(marks >= 80 && marks <= 100){
        grade = "A+";
    }else if(marks >= 70 && marks <= 79){
        grade = "A";
    }else if(marks >= 60 && marks <= 69){
        grade = "A-";
    }else if(marks >= 50 && marks <= 59){
        grade = "B";
    }else if(marks >= 40 && marks <= 49){
        grade = "C";
    }else if(marks >= 33 && marks <= 39){
        grade = "D";
    }else{
        grade = "F";
    }

    return grade;
}

function finalRes(a, b, c, d, e, f, g)
{
    if(a==0 || b==0 || c==0 || d==0 || e==0 || f==0){
        return "F";
    }else{
        return "Passed";
    }
}
