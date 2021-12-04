// FULLPAGE JS
new fullpage('#fullpage', {
	//options here
	autoScrolling:true,
    anchors:['firstPage', 'secondPage'],

    afterLoad: function(anchorLink, index, direction) {
        if (index == 3) {
            $('#socialtab').hide();
        } 
    }
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