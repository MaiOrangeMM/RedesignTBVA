// FULLPAGE JS
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    anchors: ['home', 'about', 'portfolio', 'services', 'contact'],
    menu:'#menu',

    afterLoad: function(origin, destination, direction) {
        if (origin.index == 1) {
        } 
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