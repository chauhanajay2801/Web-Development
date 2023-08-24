//1
// console.log(!"Ajay"); //string ka ulta false hoga
// console.log(typeof"Ajay")

//2
// const string1 = `het there
// it is`
// console.log(string1)
// console.log`hey`
// console.log("hey")

// console.log(str1.length)
// console.log(str1[10])
// console.log(str1.charAt(4))

//Looping
// for (let i =0;i<str1.length;i++){
// console.log(str1[i])
// }

//Modifying
// const str1 = "Hey there i am studying Strings for interview";
// const str11 = "Strings for interview";
// const str12 = "      for interview            ";
// const str2 = str1.replace("Hey","Holla") // replace first instance of the particular character
// const str3 = str1.replaceAll("e","p") // replace all the instance of the particular character
// const str4 = str1.concat(" Ram Ram Ji")
// const str5 = str1.concat(str11)
// const str6 = str12.trim()

//Searching
// console.log(str1.indexOf("studying")) //both char and word
// console.log(str1.lastIndexOf("studying")) //last index
// console.log(str1.startsWith("He")) 
// console.log(str1.endsWith("ing")) 

//Extracting Strings
// console.log(str1.substring(4,9))
// console.log(str1.slice(4,-10))

//Converting Case
// const str1 = "Hey there i am studying Strings for interview and studying";
// const toBeConverted = 1
// console.log(typeof(toBeConverted))
// const converted = String(toBeConverted) // convert number in string
// console.log(typeof(converted))
// const obj  = {name:"Ajay Chauhan"}
// const converted = JSON.stringify(obj)
// console.log(typeof(converted))
// console.log(converted)
// const repeat = JSON.parse(converted)
// console.log(repeat)
// console.log(typeof(repeat))
// const upper = str1.toUpperCase()
// const lowerer = str1.toLowerCase()
// console.log(str1.charCodeAt(2)); // gives ascii value
// console.log(String.fromCharCode(65));//gives the value for the ascii code

const str1 = "Hey there"
const str2 = "Holla thaire"