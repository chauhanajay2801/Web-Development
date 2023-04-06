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


/**********************************TASK 4*******************************************/
// changing the image to hitesh chaudhary image
const pc = document.querySelector(".hero-right-section > img")
pc.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg"


/**********************************TASK 5*******************************************/
// adding a support me after chat with me

const btnn = document.querySelector('.hero-right-section-btns');
const Support = document.createElement("button");
Support.innerText = "Support Me";
btnn.appendChild(Support);