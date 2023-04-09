// Use the Date object to do the following activities
// -1  What is the year today?
// -2  What is the month today as a number?
// -3 What is the date today?
// -4 What is the day today as a number?
// -5 What is the hours now?
// -6 What is the minutes now?
// -7 Find out the numbers of seconds elapsed from January 1, 1970 to now.

let today = new Date();
console.log(today.getFullYear()) //1
console.log(today.getMonth()) //2
console.log(today); //3
console.log(today.getDay()) //4
console.log(today.getHours()) //5
console.log(today.getMinutes()) //6
console.log(Date.now()) //7

