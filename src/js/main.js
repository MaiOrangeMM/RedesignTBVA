// FULLPAGE JS
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    anchors:['firstPage', 'secondPage'],
});


// MOBILE MENU BUTTON
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
    if(!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
})