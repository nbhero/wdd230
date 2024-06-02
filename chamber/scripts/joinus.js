// -------------------- Discover Page --------------------
// Benefits Menu
const mbMenu = document.querySelector('#mb-button');
const benefits = document.querySelector('.membership-benefits');

mbMenu.addEventListener('click', () => {
    mbMenu.classList.toggle('open');
    benefits.classList.toggle('show-benefits');
})