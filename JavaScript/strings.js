// let a = "hello this is to give\'s and it \'is\' a main thing to use \\ coz it is needed in the browsers. Ajay+Chauhan";
// let b = "ajay"+"chauhan";

// console.log(a);
// console.log(b);

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// let index = 5;

// console.log("The value at given index 5 is " + sentence.at(5) + " "+" it also works for negative value for -2 is " + sentence.at(-2));

// const data = "be aware"
// console.log(data.length);

// let st1 = "Dont forget to smile today";
// let st1_part = st1.slice(0,4);
// let st1_part1 = st1.slice(-11,-6);
// console.log(st1_part1);


// let st1 = "Dont forget to smile today";
// let st1_part = st1.substring(0,4);
// let st1_part1 = st1.substring(-11,-5);
// console.log(st1_part);
// console.log(st1_part1);
// let st1_part2 = st1.substr(-11);
// console.log(st1_part2);

// let st1 = "Dont forget to smile today";
// let st1_part = st1.substr(0,11);
// let st1_part1 = st1.substr(15);
// let st1_part2 = st1.substr(-11,-5);
// let st1_part3 = st1.substr(-11);
// console.log(st1_part);
// console.log(st1_part1);
// console.log(st1_part2);
// console.log(st1_part3);

// let st1 = "Dont forget to smile today";
// let st1_part = st1.replace("today","tommorow");
// console.log(st1_part);

// let st1_part2 = st1.replace("Today","tommorow");
// console.log(st1_part2);

// let st1_part3 = st1.replace(/Today/i,"tommorow");
// console.log(st1_part3);


// let st1 = "Dont forget to smile today";
// let st1_part1 = st1.replaceAll(/T/g,"d");
// console.log(st1_part1);

// let st1_part2 = st1.replaceAll(/o/g,"d");
// console.log(st1_part2);

// let st1 = "Dont forget to smile today";
// str2 = st1.toLowerCase()
// console.log(st1.toLowerCase());
// console.log(st1);

// let str1 = "Dont forget to ";
// let str2 = "smile today";
// let str3 = str1.concat(str2);
// console.log(str3);

// let str1 = " Dont forget to ";
// let str2 = str1.trim();
// let str3 = str1.trimStart();

// console.log(str2);
// console.log(str3);

// let str1 = "keep it simple";
// let accountnumber = "48899200006575"
// let str2 = str1.padStart(19,"x");
// let last4Digits =( accountnumber.slice(-4));
// const maskedNumber = last4Digits.padStart(accountnumber.length, '*');
// console.log(str2);
// console.log(maskedNumber);

// let str1 = "keep it simple";
// let str2 = str1.charAt(5);
// let str3 = str1.charCodeAt(5);
// console.log(str2);
// console.log(str3);



// let str1 = "keep it simple";
// let str2 = str1.split(" ");
// console.log(str2);


// let str1 = "the main reason of enjoying the small steps"
// console.log(str1.lastIndexOf("e",10));

// let str1 = "the main reason of enjoying The small steps"
// console.log(str1.search("e"));

// let str1 = "the main reason of enjoying The small steps"
// console.log(str1.includes("re",9));


// let str1 = "keep it simple";
// console.log(str1.startsWith("keep"));
// console.log(str1.startsWith("keep",2));


// let st1 = "Dont forget to smile today";
// const regex = /Dont/i;

// let st1_part = st1.replace(regex,"do");
// console.log(st1_part); 


///codePointAt()
// let str1 = "Dont forget to smile today";
// console.log(str1.codePointAt(3));



// console.log(String.fromCharCode(4));

// let a = 2;
// let b = "2";

// console.log(a===b);


//match and match all

const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[a-z]/i;
const rege = /[a-z]/g;

const found = paragraph.match(regex);
const found1 = paragraph.matchAll(rege);
console.log(found);
console.log(found1);

