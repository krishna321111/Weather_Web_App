const iconElement = document.querySelector(".icon");
const tempElement = document.querySelector(".temperature");
const descElement = document.querySelector(".temperature-desc");
const locationElement = document.querySelector(".location");
const notificationElement = document.querySelector(".notification");
const humidityElement = document.querySelector(".humidity");

const weather = {};

weather.temperature = {
    unit : "celsius"
}

const KELVIN = 273 ;

const key = "82005d27a116c2880c8f0fcb866998a0";

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition,showError);
}else{
    notificationElement.getElementsByClassName.display = "block";
    notificationElement.innerHTML="<P><h3>Browser doesn't support Geolocation</h3></p>";
}

function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude,longitude);
}

function showError(error){
    notificationElement.getElementsByClassName.display="block";
    notificationElement.innerHTML=`<p> ${error.message} </p> `;
}

//  Getting Weather from API
function getWeather(latitude,longitude){
    let API = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
    
    fetch(API)
        .then(function(response){
            let data = response.json();
            return data;
        })

        .then(function(data){
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = data.weather[0].description;
            weather.icon = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
            weather.humidity =data.main.humidity
        })

        .then(function(){
            displayWeather();
        })

}

// DISPLAY WEATHER FUNCTION

function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.icon}.png">)`;
    tempElement.innerHTML = `${weather.temperature.value}<span>° <span>C</span></span>`;
    descElement.innerHTML = `${weather.description}`;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
    humidityElement.innerHTML = `${weather.humidity}`;
}


const card = document.querySelector(".card");
card.addEventListener("click",change_img);
function change_img(){
    var current_img = document.getElementById("back-img") ;
    if (current_img.src.match("icons/b1.jpg")){
        current_img.src= "icons/b2.jpg";
        // current_img.src = "icons/d-n.jpg";
    }

    // else if (current_img.src.match("icons/b2.jpg")){
    //     current_img.src= "icons/d-n.jpg";
    //     // current_img.src = "icons/d-n.jpg";
    // }

    else{
        current_img.src= "icons/b1.jpg";
    }
    
}