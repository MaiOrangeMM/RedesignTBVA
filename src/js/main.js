// FULLPAGE JS
new fullpage('#fullpage', {
	//options here
    licenseKey: 'YB6B09247-BFD74F6D-80FC8055-F23750CA',
	autoScrolling:true,
    anchors: ['home', 'about', 'portfolio', 'services', 'contact'],
    menu:'#menu',
    css3: true,
    fitToSection: true,

    afterLoad: function(origin) {
        origin.item.classList.add('lineani');
    },
    onLeave: function(origin, destination, direction) {
        //Aboutme
        // if (origin.index == 0) {
        //     lines[origin.index].classList.add('lineani');
        // };
        // //Contact
        // if (origin.index == 3) {
        //     console.log('hio')
        //     lines[origin.index].classList.add('lineani');
        // };
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