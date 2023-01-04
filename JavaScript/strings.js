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



//Local compare

// let t1 = "you have to beleive the power of compound effect";
// let t2 = "have";
// let t3 = "you have to beleive the power of compound effect";

// let result = t1.localeCompare(t2);
// let result1 = t1.localeCompare(t3);
// console.log(result);
// console.log(result1);

//normalize

// var f  = '\u0041\u006d\u00e9\u006c\u0069\u0065';
// let b = f.normalize('NFC')
// console.log(b);

//raw
// let filePath = String.raw`C:\Development\fsjs2\strings`;

// console.log(`The file was uploaded from: ${filePath}`);

// let text = "It is a whole new day";
// let result = text.repeat(4);
// console.log(result);

//local upper and local lower case
// let firstst = "once in a lifetime";
// let secondst = "Hello World!";
// let result = firstst.toLocaleUpperCase();
// let result1 = secondst.toLocaleLowerCase();
// console.log(result);
// console.log(result1);


//match and match all

// const paragraph = 'We all grow at a different pace and thats totally ok';
// const regex = /[x-z]/i;

// const dekho = paragraph.match(regex);
// console.log(dekho);
