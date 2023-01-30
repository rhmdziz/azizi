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

// https://script.google.com/macros/s/AKfycbx6ILYSitaBfUQTikV0rG7gsU8MUJLwdH5BPAEqi-vPwnrhNAmJDQ9adM5LBh_RVyN2/exec


const scriptURL = 'https://script.google.com/macros/s/AKfycbx6ILYSitaBfUQTikV0rG7gsU8MUJLwdH5BPAEqi-vPwnrhNAmJDQ9adM5LBh_RVyN2/exec'
const form = document.forms['submit-to-google-sheet']
const btnSubmit = document.querySelector('.buttonSubmit');
const thanks = document.querySelector('.thanks');
const xClick = document.querySelector('.xButton');


form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
        console.log('Success!', response);
        form.reset();
        thanks.classList.toggle('dNone');
    })
    .catch(error => console.error('Error!', error.message))
});

// xClick.onclick = () => {
//     thanks.classList.toogle('dNone');
//     console.log('Wkwkw');
// };








