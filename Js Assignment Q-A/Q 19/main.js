//Create a countries.js file and store the countries name into this file, create a file web_techs.js and store the popular web technology names into this file. Access both file in a third file named main.js

const ancientIndia = require('./countries.js');
const webTechs = require('./web_techs.js');

console.log(ancientIndia);
console.log(webTechs);

// in Node.js, Js engine uses the commonJS environment which uses the require() function to import module