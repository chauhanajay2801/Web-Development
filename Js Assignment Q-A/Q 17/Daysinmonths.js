// Write a program which tells the number of days in a month.


function DaysInMonths(year, month) {
    const days = new Date(year, month, 0).getDate();


    return days;
}


console.log(DaysInMonths(2023, 10))

console.log(DaysInMonths(2022, 9))



