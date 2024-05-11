const apiKey = "a209ea9d26b2c89a9c0c101eebef022c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const menuButton = document.querySelector("#menu")
const navMenu = document.querySelector(".nav-menu")

const visitsDisplay = document.querySelector('.visits');

let numberOfVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

if (numberOfVisits !== 0) {
    visitsDisplay.textContent = numberOfVisits;
}
else {
    visitsDisplay.textContent = `It's your first time here! Welcome to my website! 🥳`;
}

numberOfVisits++;

localStorage.setItem('numVisits-ls', numberOfVisits);

// Dark Mode
const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");
const weatherCard = document.querySelector(".weather");
const cardLinks = document.querySelector(".card");
const background = "#C4CBCA"
const darkColor1 = "#2A1E5C"
const darkColor2 = "#4E5283"


menuButton.addEventListener("click", () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
})

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🕶️")){
        body.style.background = background;
        body.style.color = "black";
        cardLinks.style.setProperty('--Fourth-Color', "#fff")
        weatherCard.style.setProperty('--Secondary-Color', darkColor2)
        modeButton.textContent = "🔆";
    }
    else {
        body.style.background = "#fff";
		body.style.color = "#000";
        cardLinks.style.setProperty('--Fourth-Color', "#EABA6B")
        weatherCard.style.setProperty('--Secondary-Color', "#4F5165")
        modeButton.textContent = "🕶️";
    }
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