let obj1  = {
    name:"Shyamsundar",
    address : {
      street : "Akbar Road",
      city : "Delhi"
    },
    fame: function(){
        return this.name;
    }
}

// let obj2 = obj1; // Normal copy



// obj2 = Object.assign({},obj1); //Shallow coppy1
obj3 = {...obj1}; //Shallow coppy2

obj3 = {
    ...obj3,
    name: "Ram",
    address:{
        ...obj3.address,
        city: "Rampur"
    }
}

console.log(obj1);
console.log(obj3);


//Deep copy 

// obj3 = 
// obj3.name = "Ajay Chauhan";
// obj1.address.city = "Bangalore";
// console.log(obj3);
// console.log(obj1);