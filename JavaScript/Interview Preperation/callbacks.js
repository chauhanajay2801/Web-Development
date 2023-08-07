// document.getElementById("click").addEventListener("click",function(abc) {
// console.log("Button Clicked");    
// });

//Closures with event listeners
//check how many times it is clicked

// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("click").addEventListener("click",function(abc) {
//         console.log("Button Clicked");    
//         });
// }

// attachEventListeners();

setTimeout(function(){
    console.log("five second timer completed")
    },5000);

    console.log("a");
    function a(val1,val2){
    result = val1+val2;
    return result;
    }
    
    console.log(a(2,5));