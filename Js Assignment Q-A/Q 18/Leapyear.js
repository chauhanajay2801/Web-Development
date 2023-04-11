// Write a program which tells the number of days in a month, now consider leap year.

function DaysInMonths(year, month) {
    const countt = new Date(year, month, 0).getDate();
   

    return countt;
}

console.log(DaysInMonths(2004, 2))
console.log(DaysInMonths(2012, 2))