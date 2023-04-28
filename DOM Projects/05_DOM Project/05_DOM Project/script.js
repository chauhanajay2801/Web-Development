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


let aa= document.querySelector(".recipe-gallery");     
let ab= document.createElement("div");
let ac=document.createElement("h4");
ab.classList.add("card");
ac.innerText='add 6th card here';
ab.append(ac);
aa.appendChild(ab);

// adding the third dish
// let a= document.querySelector(".recipe-gallery");
// let dis = document.createElement("div");
// let diss = document.createElement("h5");
// let disss = document.createElement("p");
// dis.classList.add("card");
// diss.classList.add("recipe-name")
// diss.innerText = ("Paneer Tikka")
// disss.classList.add("recipe-disp")
// disss.innerText = ("Prep : 30min | Cook: 30min")
// console.log(dis)
// console.log(diss)
// console.log(disss)



{/* <div class="card">
                    <a href="#" class="recipe-text">
                        <img src="./img/recipe-1.jpeg" class="recipe-img" />
                        <h5 class="recipe-name">Chicken</h5>
                        <p class="recipe-disp">Prep : 15min | Cook : 30min</p>
                    </a>
                </div> */}


                