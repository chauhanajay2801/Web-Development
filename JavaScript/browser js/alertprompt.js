alert("This is the working of prompt") // gives mini window
let a = prompt("enter the value of a here: ",232)//giving default value
let write = confirm("Do u want to write the value to page")
if (write){
document.write(a)}
else{
    document.write("Allow some writing function")
}
a = Number.parseInt(a)
alert("You entered a type of" + (typeof a))