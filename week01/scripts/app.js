// Select the HTML element to manipulate
const today1 = document.querySelector('#today1');
const today2 = document.querySelector('#today2');
const message = document.querySelector('aside');

// Varibles for activity use
let citynames = ["New York", "Sacramento", "Cleveland", "South Bend", "Tampa Bay", "Corpus Christi"];
let volume = 409;

function getCelsius(fahrenheit) {
    calc = (fahrenheit - 32) * (5 / 9);
    return Math.round(calc);
}

// Set up the Date format object parameter for toLocaleDateString method.
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};

// Question #4
today1.innerHTML = new Date().toLocaleDateString("en-UK", options);
// Question #5
today2.innerHTML = `<strong>Volume</strong>: ${volume} liters`;
// Question #6
let quantity = document.querySelector("#q").value;
// Question #7
document.querySelector('aside').innerHTML = "Welcome to <mark>our</mark> neighborhood!";
// Question #8
document.querySelector("#temp").value = getCelsius(33) + "°C";
// Question #9
document.querySelectorAll('div');
// Question #10
let filterC = citynames.filter(city => city.charAt(0) === "C");
document.querySelector("#c-names").innerHTML = filterC