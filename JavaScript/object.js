let a = {
firstname:"Ajay", 
lastname:"Chauhan",
Rollno:12013080001,
fullName: function() {
    return this.firstname+ " "+ this.lastname;
 }
};

v = a.fullName;
console.log(a.fullName());
console.log(v);


