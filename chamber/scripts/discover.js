const visitsDisplay = document.querySelector(".visits");
let numberOfVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;

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