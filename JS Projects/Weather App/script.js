// 1 -- we need variable to store the data.
// 2 -- we need variable to store the element. total 9 variable needed
// 3 -- function to get the data from weather app.
// 4 -- Manipulate the variable of already created element.

let data;

const inputBox = document.getElementById("inputBox");
const cityName = document.getElementById("cityName");
const humidity = document.getElementById("humidity");
const stateName = document.getElementById("stateName");
const windSpeed = document.getElementById("windSpeed");
const logoImage = document.getElementById("logoImage");
const temprature = document.getElementById("temprature");
const countryName = document.getElementById("countryName");
const weatherStatus = document.getElementById("weatherStatus");

const getData = async (event) => {
    event.preventDefault();
    if(!inputBox.value){
        alert("Please Enter the city name")
    }

    const city = inputBox.value;

    //Fetch Details   --- fetch data  is a variable name

    const fetchData = await fetch(`https://api.weatherapi.com/v1/current.json?key=e4e45c8e00b349ef994103355232304&q=${city}`);


    const orgData = await fetchData.json();
    data = orgData;
    console.log(data);

    //Displaying Data in Html
    
    countryName.innerText = data.location.country
    stateName.innerText = data.location.region
    cityName.innerText = data.location.name
    humidity.innerText = data.current.humidity
    windSpeed.innerText = data.current.wind_kph
    temprature.innerText = data.current. temp_c

    weatherStatus.innerText = data.current.condition.text;
    logoImage.src = data.current.condition.icon
   


}












