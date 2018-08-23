const burgerMenu = document.querySelector('.burger-menu');
const mobNav = document.querySelector('#mob-nav');
const up = document.querySelector('.up');
const navOverlay = document.querySelector('.nav-overlay');
const navBkg = document.querySelector('.nav-bkg');
const page = document.querySelector('.container');
const me = document.querySelector('.me');

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
	page.style.cssText = 'opacity: 1; transform: translateY(0);';
	me.style.cssText = 'transform: scale(1);';
}, 100);
