// //Create a human readable time format using the Date time object
// - YYYY-MM-DD HH:mm
// - DD-MM-YYYY HH:mm
// - DD/MM/YYYY HH:mm

const date = new Date();

const year = date.getFullYear();

let month = date.getMonth()+1;
month = needzero(month);

let todaydate = date.getDate();
todaydate = needzero(todaydate);

let hours = date.getHours();
hours = needzero(hours);

let mins = date.getMinutes();
mins = needzero(mins);

function needzero(a){
    if (a<10){
        a = "0" + a;
        return a;
    }
        return a;
}



const Format1 = `${year}-${month}-${todaydate} ${hours}:${mins}`;
console.log(Format1)

const Format2 = `${todaydate}-${month}-${year} ${hours}:${mins}`;
console.log(Format2)


const Format3 = `${todaydate}/${month}/${year} ${hours}:${mins}`;
console.log(Format3)


