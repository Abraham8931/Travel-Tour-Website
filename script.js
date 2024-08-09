// script for the show/hide card on mobile
const showCardBtn = document.getElementById('show-card-btn');
const hiddenCard = document.getElementById('hidden-card');

showCardBtn.addEventListener('click', () => {
    if (hiddenCard.style.display === 'none') {
      hiddenCard.style.display = 'block';
    } else {
      hiddenCard.style.display = 'none';
    }
});
//end of script to show card on mobile


//script to collapse the navbar when it is toggled
const  navbarLinks = document.querySelectorAll('.navbar-collapse a');
navbarLinks.forEach(link => {
  link.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    navbar.classList.remove('show');
  });
});