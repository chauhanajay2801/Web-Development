// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let a = prompt("Enter your age");
if (a>=18){
    alert("eligible to drive");
}
else{
    alert("you need " + (18-a) + "  years more to drive");
}