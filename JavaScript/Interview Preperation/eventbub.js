// // Event Bubbling --- goes from child to parent

// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click",()=>{
//     console.log('div')
// });

// button.addEventListener("click",()=>{
//     console.log('button')
// });

// // Event Capturing --- goes from parent to child

// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click",()=>{
//     console.log('div')
// },true);

// button.addEventListener("click",()=>{
//     console.log('button')
// },true);

//stop propogation --- jo kaam hai vo la rdo parent tak jane ki koi jaruray nahi hai

// var div = document.querySelector("div");
// var button = document.querySelector("button");

// div.addEventListener("click",()=>{
//     console.log('div')
// });

// button.addEventListener("click",(event)=>{
//     event.stopPropagation();
//     console.log('button')
// });


//Stop imeediate propogation -- bas vahi tak chale fir ruk jaye
//child matlab button p chalega aur div p jaane s phle humne imeediate propogation ko stop kr dia 
var div = document.querySelector("div");
var button = document.querySelector("button");

div.addEventListener("click",()=>{
    console.log('div')
});

button.addEventListener("click",(event)=>{
    console.log('button')
});

button.addEventListener("click",(event)=>{
    event.stopImmediatePropagation();
    console.log('button1')
});


//Prevent default

var a = document.querySelector("a");

a.addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("anchor clicked")
})
