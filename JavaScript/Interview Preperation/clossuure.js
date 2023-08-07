// function outer(){
//     function inner(){
//         console.log(a);
//     }
//     var a = 10;
//     return inner;
// }

// // outer()(); // for going for inner function

// var deb = outer(); // 2nd method
// deb();

// function outer(){
//     var b =90;
//     function tout(){
//         function inner(){
//             console.log(a,b);
//         }
//         return inner;
//     }
//     return tout;
// }

// let a = 10;
// var ty = outer()();
// ty();



//Data hiding using closures

function count(){
    let count = 0;
    function Ic(){
        count++;
        console.log(count);
    }
    return Ic
}

var c1 = count();
c1();
c1();


var c4 = count();
c4();
