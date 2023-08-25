//Ques1: Truncate the text

//Input: str:"Hey there this is the first question", maxlength=9
//Output:"Hey there..."

// function truncate(str,maxlength){
//     if(str.length<maxlength){
//       return str  
//     }
//     else{
//         const str1 = str.slice(0,maxlength).concat("...")
//         return str1
//     }
// }

// let a = truncate("nveliuculiwbeilucbweliciuwebiuewniuwewu",12)
// console.log(a)

//Q2 Pallindrome number
//input a = 121 ---->>>>>>>> True

// function pallindrome(numb){
//     // +converts the string into a number if it is possible
//    return x < 0 ? false : numb === +numb.toString().split("").reverse().join("")
// }

// let pal = pallindrome(12)
// console.log(pal)

//Q3 Hamming Distance -- Which character of the strings are different?
// Input: x = "Hello" y ="Hellu"
//Output: 1 

// function hammingDistance(a,b){
//     if(a.length !== b.length){
//       throw new Error("Strings must be of same length")
//     }

//     let distance = 0;

//     for(let i=0;i<a.length;i++){
//         if(a[i]!==b[i]){
//             distance++
//         }
//     }
//     return distance
// }

// console.log(hammingDistance("hemmo","hello"))

// Hamming Distance 