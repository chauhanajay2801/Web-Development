const obb = {
    a:1,
    b:2,
    config:{
        name:'bete'
    }
}

obb.a = 111
obb["year"] = 2000

// 2nd way
const obb2 = new Object() //constructor
obb2.ajay = 27
obb2.pritam = 26

// 3rd way

const powers = {
    fly:true,
    cordinate:Math.random()+3
}
const obb3 = Object.create(powers) //throws into the prototype
// console.log(obb3);
// console.log(obb3.cordinate);
// console.log(Object.getPrototypeOf(obb3));

//4th way

const obb4 = Object.create({})
Object.defineProperty(obb4,'book',{
    // icon:"Oho"
    get: () => "Ajay",
    enumerable:true
})
// console.log(obb4);
// console.log(obb4.book);
// console.log(Object.getPrototypeOf(obb4));

for (i in obb4){
  //  console.log("value of i is",i);
}


//part 5
const obb5 = {
    comics:"marvels",
    pen:"",
    printcomic: function(){
        this.pen += "penne"
        console.log(this); 
        return this;    
    },

   // printacomic: ()=> {
        // this.pen += "penne" }
    //console.log(this);
    
} 

console.log(obb5.printcomic().printcomic().printcomic());
//console.log(obb5.printacomic());