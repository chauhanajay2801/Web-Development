// Write a program which can give grades to students according to theirs scores:
//     - 90-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


let a = prompt("Enter your marks");
if (a>=90){
    alert("u got a");
}
else if(a>69 && a<90){
    alert("you got b");
}
else if(a>59 && a<70){
    alert("you got c");
}
else if(a>49 && a<60){
    alert("you got d");
}
else{
    alert("you got f");
}



