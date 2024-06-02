// -------------------- Menu --------------------

const menuButton = document.querySelector('#hamburguer-menu');
const navMenu = document.querySelector(".nav-menu");

menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    navMenu.classList.toggle('open');
})


// -------------------- Weather App --------------------
const apiKey = "a209ea9d26b2c89a9c0c101eebef022c";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const weatherDescription = document.querySelector(".description");

const membersCont = document.querySelector('.members-container');
const url = '../chamber/data/members.json';

async function checkWeather(city) {    
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

    const weatherIcon = document.querySelector(".weather-icon")

    if (response.status == 404) {
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)} °C`;
        weatherDescription.innerHTML = data.weather[0].description;
        document.querySelector(".city").innerHTML = data.name;

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

checkWeather("California");

// -------------------- DarkMode --------------------
const modeButton = document.querySelector('#mode');
const body = document.querySelector('body')
const newsletter = document.querySelector('#newsletter-form form')
const newsletterLabel = document.querySelector('#newsletter-form')
const form = document.querySelector('form');

modeButton.addEventListener('click', () => {
    if (modeButton.textContent.includes('☀')) {
        body.style.background = '#14213D';
        body.style.color = 'white';
        
        modeButton.style.background = 'gray';
        modeButton.textContent = '🌑';
    }
    else {
        body.style.background = 'white';
        body.style.color = 'black';
        
        modeButton.style.background = '#00ABE7';
        modeButton.textContent = '☀';
    }
})

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    displayMembers(data.members);
}
getMemberData();

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".members-container");

gridbutton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}

function displayMembers(members) {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phoneNumber = document.createElement('p');
        var website = document.createElement('a');
        let image = document.createElement('img');
        let membershipLevel = document.createElement('h3');

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phoneNumber.textContent = `${member.phone}`;
        website.setAttribute('href', member.website);
        website.innerHTML = member.website;
        membershipLevel.textContent = `${member.membership_level}`;
        image.setAttribute('src', member.image);
        image.setAttribute('alt', member.name);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '150');
        image.setAttribute('height', '150');

        card.appendChild(image);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phoneNumber);
        card.appendChild(website);
        card.appendChild(membershipLevel);

        membersCont.appendChild(card);
    });
}



