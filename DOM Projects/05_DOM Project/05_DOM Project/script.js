//Navbar
const nav = document.getElementById("buttn")
let btn = document.createElement("a");
btn.classList.add("btn");
btn.textContent="Pro Subscription";
nav.append(btn)

// Adding chinese to the list
let rec= document.querySelector(".tags-container > div");
let a=document.createElement("a");
a.innerText='Chinese (7)';
rec.appendChild(a);

// 


