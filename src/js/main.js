const lines = document.querySelectorAll(".line");
const social = document.querySelector("#socialtab");
// FULLPAGE JS
new fullpage('#fullpage', {
	//options here
    licenseKey: 'YB6B09247-BFD74F6D-80FC8055-F23750CA',
    autoScrolling: true,
    anchors: ['home', 'about', 'portfolio', 'services', 'contact'],
    menu:'#menu',
    scroll: true,
    fitToSection: true,
    css3: true,
    responsiveWidth: 1200,

    afterLoad: (origin, destination) => {
        if(destination.index >= lines.length) return;        
       
        if (origin.index > destination.index) {
          console.log('back');
          lines[destination.index].style.backgroundPosition ='top';
	        lines[destination.index].classList.add('lineaniback');
        } else {
           lines[destination.index].classList.add('lineani');

        }

        // Hide Socialtab
        if (destination.index === 2) {
            social.classList.add('d-md-none');
        } else {
            social.classList.remove('d-md-none');
        }    
    },

    onLeave: (origin, destination) => {
      if(origin.index >= lines.length) return;  
      lines[origin.index].classList.remove('lineani');
      lines[origin.index].classList.remove('lineaniback');
      lines[origin.index].style.backgroundPosition ='bottom';
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

/* CAROUSEL */
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const track = document.querySelector('.track');

let carouselWidth = document.querySelector('.carousel-container').offsetWidth;

window.addEventListener('resize', () => {
    carouselWidth = document.querySelector('.carousel-container').offsetWidth;
})

let index = 0;

next.addEventListener('click', () => {
  index++;
  prev.classList.add('show');
  track.style.transform = `translateX(-${index * 200}px)`;
  if (track.offsetWidth - (index * 200) < carouselWidth) {
    next.classList.add('hide');
  }
})

prev.addEventListener('click', () => {
  index--;
  next.classList.remove('hide');
  if (index === 0) {
    prev.classList.remove('show');
  }
  track.style.transform = `translateX(-${index * 200}px)`;
});


// LIGHTBOX
lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'fitImagesInViewport': true,
  'showImageNumberLabel': true,
  'albumLabel': "Image %1 of %2",
})