// class Car{
//     constructor(brand){
//         this.carname = brand;
//     }
//     present(){
//         return"I have a " + this.carname;
//     }
// }

// class Model extends Car{
//     constructor(brand,mod){
//         super(brand);
//         this.model = mod;
//     }
//     show(){
//         return this.present() + ",it is a " + this.model;
//     }
// }

// let myCar = new Model("Ford","Mustang")
// console.log(myCar.show())


//getter and setter
class Bus{
    constructor(brand){
        this.busname = brand;
    }
    get bnam(){
        return this.busname; 
    }
}

let mybus = new Bus("Tata");
console.log(mybus.bnam);