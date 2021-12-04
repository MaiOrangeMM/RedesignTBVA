// FULLPAGE JS
const start = document.querySelector(".startingline");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const line4 = document.querySelector(".line4");

new fullpage('#fullpage', {
	//options here
    licenseKey: 'YB6B09247-BFD74F6D-80FC8055-F23750CA',
	autoScrolling:true,
    anchors: ['home', 'about', 'portfolio', 'services', 'contact'],
    menu:'#menu',
    css3: true,
    fitToSection: true,

    afterLoad: function(origin, destination, direction) {
        //Home
        if (origin.index == 0) {
            start.classList.add('startinglineani');
        };

        //Services
        if (origin.index == 2) {
            line3.classList.add('lineani');
        };
    },
    onLeave: function(origin, destination, direction) {
        //Aboutme
        if (origin.index == 0) {
            line1.classList.add('lineani');
        };
        //Contact
        if (origin.index == 3) {
            console.log('hio')
            line4.classList.add('lineani');
        };
    }
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