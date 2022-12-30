// let rating = 1;

// if (rating ==5){
//     console.log('5 starts');
// }if (rating ==4){
//     console.log('4 starts');
// }if (rating ==3){
//     console.log('3 starts');
// }if (rating ==2){
//     console.log('2 starts');
// }if (rating ==1){
//     console.log('1 starts');
// }

// Switch Case

// let user = "Adm";

// switch(user){
//     case "Admin":
//         console.log("Redirect to the admin page")
//         break;
//     case "Student":
//         console.log("Redirect to the student page")
//         break;
//     case "Visitor":
//         console.log("Redirect to the visitor page")
//         break;
//     default:
//         console.log("I am no one")
// }


let user = "0"; // strict comparison need the operand of the same types

switch(user){
    case 0: // wont take because it is string and the case is a number datatype
        console.log("Redirect to the admin page")
        break;
    case 1:
        console.log("Redirect to the student page")
        break;
    case 2:
        console.log("Redirect to the visitor page")
        break;
    default:
        console.log("I am no one")
}



// Ternary Operator/condition
// let ajay = false;

// ajay ? console.log("It is raining") : console.log("It is not raining")

