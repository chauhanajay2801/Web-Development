/**********************************TASK 1*******************************************/
//Adding li to ul
const ul = document.getElementsByTagName("ul")[0];
const hireMe = document.createElement("li");
hireMe.innerText = "Hire Me";
ul.appendChild(hireMe);

/**********************************TASK 2*******************************************/
//Adding search my prjects in the search bar
const sear = document.querySelector(".search-field > input");
sear.placeholder = "Search My Project";

/**********************************TASK 3*******************************************/
// Selecting the span and changing the text area 
const span = Array.from(document.querySelectorAll(".hero-left-section > p > span"));
span[1].innerText = "an Employee";
span[2].innerText = "iNeuron Intelligence Pvt. Ltd."