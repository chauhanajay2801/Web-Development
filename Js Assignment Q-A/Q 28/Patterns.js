// Write a program to print the given patterns using the loops-
// 	a. Print a triangle pattern, if the given input is 3 then the pattern should be similar to the given output
// 	   *
// 	   **
// 	   ***

let a = 5;
let string1 = "";
for (let i = 1; i <= a; i++) {
  for (let j = 0; j < i; j++) {
    string1 += "*";
  }
  string1 += "\n";
}
console.log(string1);


	
// 	b. Print a square pattern, if the input is 3 then the output should be similar to the given output
// 	   ***
// 	   ***
// 	   ***

let b = prompt("Enter the value");
let string2 = "";

for(let i = 0; i < b; i++) { 
  for(let j = 0; j < b; j++) { 
    string2 += "*";
  }
  string2 += "\n";
}
console.log(string2);



// 	c. Print a pyramid pattern, if the input is 3 then the output should be similar to the given output
// 	     *
// 	    ***
//     *****


let c = 5;
let string3 = "";
for (let i = 1; i <= c; i++) {
  for (let j = 1; j <= c - i; j++) {
    string3 += " ";
  }
  for (let k = 0; k < 2 * i - 1; k++) {
    string3 += "*";
  }
  string3 += "\n";
}
console.log(string3);
