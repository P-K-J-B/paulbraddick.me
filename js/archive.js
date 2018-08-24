const burgerMenu = document.querySelector('.burger-menu');
const mobNav = document.querySelector('#mob-nav');
const up = document.querySelector('.hide-menu');
const navOverlay = document.querySelector('.nav-overlay');
const navBkg = document.querySelector('.nav-bkg');
const page = document.querySelector('.container');
const footer = document.querySelector('#footer');
const cross = document.querySelector('.cross');
const overlay = document.querySelector('.overlay');
const popupVid = document.querySelector('.popup-video');
const popupImg = document.querySelector('.popup-img');
const bkg = document.querySelector('.overlay-bkg');
const ft1 = document.querySelector('.featured1');
const ft2 = document.querySelector('.featured2');
const ft3 = document.querySelector('.featured3');
const ft4 = document.querySelector('.featured4');
const ft5 = document.querySelector('.featured5');
const ft6 = document.querySelector('.featured6');
const ft7 = document.querySelector('.featured7');

ft4.addEventListener('click', function() {
	const wellbeing = '<div class="popup-video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/DCira0vgmoM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
	overlay.style.cssText = 'visibility: visible; opacity: 1; pointer-events: auto;'
	overlay.insertAdjacentHTML('beforeEnd', wellbeing);
	overlay.lastElementChild.style.cssText = 'width: 535px'
	document.body.style.cssText = 'overflow: hidden';
});

ft5.addEventListener('click', function() {
	const julie = '<div class="popup-img"><img src="../img/ft_3.jpg" alt=""></div>'
	overlay.style.cssText = 'visibility: visible; opacity: 1; pointer-events: auto;'
	overlay.insertAdjacentHTML('beforeEnd', julie);
	document.body.style.cssText = 'overflow: hidden';
})

ft7.addEventListener('click', function() {
	const energyBurst = '<div class="popup-video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/kFSOwNh0tMA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
	overlay.style.cssText = 'visibility: visible; opacity: 1; pointer-events: auto;'
	overlay.insertAdjacentHTML('beforeEnd', energyBurst);
	overlay.lastElementChild.style.cssText = 'width: 535px'
	document.body.style.cssText = 'overflow: hidden';
});

bkg.addEventListener('click', function() {
	overlay.style.cssText = 'visibility: hidden; opacity: 0; pointer-events: none;';
	overlay.lastElementChild.remove();
	document.body.style.cssText = 'overflow: auto';
});

cross.addEventListener('click', function() {
	overlay.style.cssText = 'visibility: hidden; opacity: 0; pointer-events: none;';
	overlay.lastElementChild.remove();
	document.body.style.cssText = 'overflow: auto';
});

burgerMenu.addEventListener('click', function() {
	if (mobNav.classList.contains('hide')) {
		mobNav.classList.remove('hide');
		document.body.style.cssText = 'overflow: hidden';
		navOverlay.style.cssText = 'visibility: visible';
		navBkg.style.cssText = 'visibility: visible; opacity: 1';
	} else {
		mobNav.classList.add('hide');
		document.body.style.cssText = 'overflow: auto';
		navOverlay.style.cssText = 'visibility: hidden';
		navBkg.style.cssText = 'visibility: hidden; opacity: 0';
	}
});

up.addEventListener('click', function() {
	mobNav.classList.add('hide');
	document.body.style.cssText = 'overflow: auto';
	navOverlay.style.cssText = 'visibility: hidden';
	navBkg.style.cssText = 'visibility: hidden; opacity: 0';
});

setTimeout(function() {
	page.style.cssText = 'opacity: 1; transform: translateY(0);'
}, 100);