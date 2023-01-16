let myHeroes = ["Thor","Hulk","Batman","Superman"]

let heropower = {
    Thor: "hammer",
    Hulk: "strength",
    Superman: "fly",
    getThorpower: function(){
    console.log(`Thor power is ${this.Thor}`);
}
}

Object.prototype.Ajay = function(){
    console.log(`Ajay is present in all object`);
}

Array.prototype.heyAjay = function(){
    console.log(`Ajay is not present everywhere`);
}

 

myHeroes.Ajay()
//inheritance or prototypal cgaining

const User = {
    name:"Ajay chauhan",
    email:"ajaychauhan@gmail.com"
}

const Teacher = {
    makevideo:true
}

const teachingsupport = {
    isavailable:false
}

const tsAssistent = {
    makeAssignment: "JS assignment",
    fullTime: true,
   // __proto__:teachingsupport     //old techniques to get data from other object

}

Teacher.__proto__ = User // to enter user value in teacher

//modern syntax

Object.setPrototypeOf(teachingsupport,Teacher) //teacher ka data ja raha hai teaching support mein


//goal is get true length
String.prototype.truelength = function(){
    console.log(`true length is: ${this.trim().length}`);
}

let mynname = "Ajay chauhan   "

