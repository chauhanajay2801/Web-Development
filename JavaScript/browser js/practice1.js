
let runAgain = true ;

const canDrive = (age) => {
    return age>=18?true:false
}

while (runAgain){
    let a = prompt("What is ur age")
a = Number.parseInt(a)


if (canDrive(a)){
    alert("you are eligible to drive")
}
else{
    alert("you are not eligible to drive")
}
runAgain = confirm("Do u want to go again");
}