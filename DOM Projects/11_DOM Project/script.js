const btn = document.createElement("button");
btn.classList.add("btn");
btn.innerText = "Clear Screen";
document.body.appendChild(btn)

document.body.addEventListener("click", (e) => {
    const circle = document.createElement("div");
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
    circle.classList.add("circle")
    document.body.appendChild(circle)
    })

btn.addEventListener("mouseenter", () => {
    location.reload();
})