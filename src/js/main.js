const lines = document.querySelectorAll(".line");
const social = document.querySelector("#socialtab");
// FULLPAGE JS
new fullpage('#fullpage', {
	//options here
    licenseKey: 'YB6B09247-BFD74F6D-80FC8055-F23750CA',
	autoScrolling:true,
    anchors: ['home', 'about', 'portfolio', 'services', 'contact'],
    menu:'#menu',
    css3: true,
    fitToSection: true,

    afterLoad: (origin, destination) => {
        lines[destination.index].classList.add('lineani');

        if (destination.index === 2) {
            social.classList.add('d-md-none');
        } else {
            social.classList.remove('d-md-none');
        }
    },
});



// MOBILE MENU BUTTON
const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.menulinks');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
        menuList.classList.remove('d-none');
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        menuList.classList.add('d-none');
    }
})



// FORMULAR
let form = document.getElementById('signup-form');

let name = document.getElementById('inputName').value;