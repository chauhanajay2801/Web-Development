// task 1 make the headding color to grey
let accordianHeadings = Array.from(document.querySelectorAll(".accordian > h3"));
accordianHeadings.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";})
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

// task 2 add a same heading at the end with new content

const accordianWrapper = document.querySelector(".accordian-wrapper");
const div = document.createElement("div");
div.classList.add("accordian")
const fifthAccordian = accordianWrapper.appendChild(div);
const skillHead = document.createElement("h3");
skillHead.innerText = "Skills";
const skills = fifthAccordian.appendChild(skillHead);
const skillPara = document.createElement("p");
skillPara.style.display = "block"
skillPara.innerText = "I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub";
fifthAccordian.appendChild(skillPara)
accordianHeadings = Array.from(document.querySelectorAll(".accordian > h3"));
accordianHeadings.forEach(h3 => {
    h3.style.backgroundColor = "#dadaf8";
    let para = h3.nextElementSibling;
    if (["Skills"].includes(h3.innerText)) {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
})






