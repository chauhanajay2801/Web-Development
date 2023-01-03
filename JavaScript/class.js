class Shivalikcollege{ // it is not an object , is a template for js object.
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    years(x){
        return x-this.year;
    }
}

let batch1 = new Shivalikcollege("first",2018);
let batch2 = new Shivalikcollege("second",2019);
let batch3 = new Shivalikcollege("third",2020);
console.log("The passed out time is " + " " + batch1.years(2020));