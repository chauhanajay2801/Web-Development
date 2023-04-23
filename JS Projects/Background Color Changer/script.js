const target = document.getElementById("but");
target.addEventListener("click",changeColor);



const randomColor = () => {
    let val = "0123456789ABCDEF"
    let cons = "#";
    for (let i=0; i<6; i++){
        cons = cons+val[Math.floor(Math.random()*16)];
    }
    return cons;
};


function changeColor(){
    document.body.style.backgroundColor = randomColor();
}