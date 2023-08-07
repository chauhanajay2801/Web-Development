//Call method

let name ={
    firstName:"Ajay",
    lastName:"Chauhan",
    printFullName: function(){
        console.log(this.firstName + " " +this.lastName)
    }
}

name.printFullName();

let name2 ={
    firstName:"Vijay",
    lastName:"Yadav",
}

//Function  borrowing
name.printFullName.call(name2);

let printAllData = function (hometown,state,country) {
    console.log(this.firstName + " " +this.lastName + " " + hometown + " " + state+" "+country)
}

printAllData.call(name2, "Faridabad", "Haryana");

//apply method
printAllData.apply(name2, ["Faridabad", "Haryana"]);


//Bind method

let printMyData = printAllData.bind(name2,"Rampur","Up","India")
console.log(printMyData)
printMyData();