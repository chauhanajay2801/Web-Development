const btn = document.createElement("button"); //create button
btn.classList.add("btn"); //.classlist used to assign class to the button
btn.innerText = "Clear Screen"; // label = clear screen
document.body.appendChild(btn)

document.body.addEventListener("click", (e) => {
    const circle = document.createElement("div"); //creating a div 
    circle.style.left = `${e.clientX}px`; //taking x axis values
    circle.style.top = `${e.clientY}px`; // taking y axis values
    circle.classList.add("circle") 
    document.body.appendChild(circle) //appending circle
    })


btn.addEventListener("mouseenter", () => {
    location.reload(); // reload the current url
})