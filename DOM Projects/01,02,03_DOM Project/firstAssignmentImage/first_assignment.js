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