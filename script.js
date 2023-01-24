// menu 
const navbarNav = document.querySelector('.navbarNav');
const hamburger = document.querySelector('#menu');


hamburger.onclick = () => {
    navbarNav.classList.toggle('active');
};

// exit menu
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
