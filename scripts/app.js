const apiKey = "a209ea9d26b2c89a9c0c101eebef022c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const menuButton = document.querySelector("#menu")
const navMenu = document.querySelector(".nav-menu")

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
})

async function checkWeather(city) {    
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    const weatherIcon = document.querySelector(".weather-icon")

    if (response.status == 404) {
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)} °C`;
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".country").innerHTML = data.sys['country'];

        if(data.weather[0].main == "Clear") {
            weatherIcon.src = "images/sunny_white.png"
        }
        else if(data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloudy_white.png"
        }
        else if(data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rainny_white.png"
        }
        else if(data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist_white.png"
        }
        else if(data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle_white.png"
        }

        document.querySelector(".weather").style.display = "block";
    }
}

checkWeather("Franca")

let lastModif = document.lastModified
document.querySelector("#lastModified").innerHTML = `Last Modification: ${lastModif}`;
const year = new Date
document.querySelector(".year").innerHTML = year.getFullYear();