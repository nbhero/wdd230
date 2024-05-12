const modeIcon = document.querySelector('#mode');
modeIcon.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M448 256c0-106-86-192-192-192V448c106 0 192-86 192-192zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/></svg>';

const menuButton = document.querySelector('#hamburguer-menu');
const navMenu = document.querySelector(".nav-menu");

const visitsDisplay = document.querySelector(".visits");
let numberOfVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

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