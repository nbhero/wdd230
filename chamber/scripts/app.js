const modeIcon = document.querySelector('#mode');
modeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>';

const menuButton = document.querySelector('#hamburguer-menu');
const navMenu = document.querySelector(".nav-menu");

const visitsDisplay = document.querySelector(".visits");
let numberOfVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

const membersCont = document.querySelector('.members-container');
const url = '../chamber/data/members.json';

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

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

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

// Trying the function
function getVisitMessage() {
    const lastVisit = localStorage.getItem("lastVisit");
    const msToDays = 84600000;
    if (!lastVisit) {
        return "Welcome";
    }

    const lastVisitDate = new Date(lastVisit);
    const now = new Date();
    const deltaDays = Math.floor((now - lastVisitDate) / msToDays);
    console.log(deltaDays)

    if (deltaDays === 0) {
        return "Back so soon? Awesome!";
    }
    else {
        const message = `You last visited ${deltaDays} day${deltaDays > 1 ? 's' : ''}`;
        return message;
    }
}

function setLastVisit() {
    localStorage.setItem("lastVisit", new Date().toISOString());
}
const visitMessage = document.querySelector("#visit-message");
visitMessage.textContent = getVisitMessage();
setLastVisit();
// End of Code
if (numberOfVisits !== 0) {
    visitsDisplay.textContent = numberOfVisits;
}
else {
    visitsDisplay.textContent = `Welcome to California's Chamber of Commerce!`;
}

numberOfVisits++;
localStorage.setItem('numVisits-ls', numberOfVisits);

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
    menuButton.classList.toggle('open');
})

