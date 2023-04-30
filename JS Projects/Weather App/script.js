// 1 -- we need variable to store the data.
// 2 -- we need variable to store the element. total 9 variable needed
// 3 -- function to get the data from weather app.
// 4 -- Manipulate the variable of already created element.

let data;

const inputBox = document.getElementById("inputBox");
const countryName = document.getElementById("countryName");
const stateName = document.getElementById("stateName");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const temprature = document.getElementById("temprature");
const logoImage = document.getElementById("logoImage");
const weatherStatus = document.getElementById("weatherStatus");

const getData = (event) => {
    event.preventDefault();
}