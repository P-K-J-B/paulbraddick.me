const burgerMenu = document.querySelector('.burger-menu');
const mobNav = document.querySelector('#mob-nav');
const up = document.querySelector('.up');
const navOverlay = document.querySelector('.nav-overlay');
const navBkg = document.querySelector('.nav-bkg');
const page = document.querySelector('.container');
const footer = document.querySelector('#footer');
const hero = document.querySelector('.hero');
const heroLink = document.querySelector('.hero-link');
const heroDesc = document.querySelector('.hero-desc');
const slide1 = document.querySelector('.slide1');
const slide2 = document.querySelector('.slide2');
const ftCarousel = document.querySelector('.featured-work');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
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

const ftArray = [ft1, ft2, ft3, ft4, ft5];

let isMob = false;

let heroInt = 0;
let count = 0;
let ftInt = 0;

let heroImages = [
"./img/dyd-hero.jpg",
"./img/mtw-hero.jpg"
];

let mobileHeroImages = [
"./img/dyd-hero-mob.jpg",
"./img/mtw-hero-mob.jpg"
];

let heroImageDesc = [
`<h3>Dare Ye Delve?</h3>
<p class="desc-text">Classic arcade game clone (Frogger). Project submission for Udacity's front-end developer course.</p>`,
`<h3>Match The Weapons</h3>
<p class="desc-text">Memory matching game. Project submission for Udacity's front-end developer course. 
Background artwork by <a href="https://www.sareltheron.com/">Sarel Theron</a>.</p>`
];

function changeHero() {
	if (isMob) {
		hero.style.cssText = `background-image: url(${mobileHeroImages[heroInt]});`;
	} else {
		hero.style.cssText = `background-image: url(${heroImages[heroInt]});`;
	}

	if (heroInt == 0) {
		heroLink.href = 'pages/Dare-ye-Delve/index.html';
		slide1.style.cssText = 'opacity: 1';
		slide2.style.cssText = 'opacity: 0.3';
	} else {
		heroLink.href = 'pages/memory-game/index.html';
		slide1.style.cssText = 'opacity: 0.3';
		slide2.style.cssText = 'opacity: 1';
	}

	heroDesc.innerHTML = heroImageDesc[heroInt];
};

function ftOpacity(item) {
	if (item.classList.contains('pos2')) {
		item.style.cssText = 'opacity: 1; pointer-events: auto';
	} else if (item.classList.contains('pos3')) {
		item.style.cssText = 'opacity: 1; pointer-events: auto';
	} else if (item.classList.contains('pos4')) {
		item.style.cssText = 'opacity: 1; pointer-events: auto';
	} else {
		item.style.cssText = 'opacity: 0; pointer-events: none';
	}
};

function carouselLeft() {
	let p = 1;
	for (let i of ftArray) {	
		i.classList.remove(i.classList[1]);
		i.classList.add(`pos${p}`)
		p++
		if (p > ftArray.length) {
			p = 1;
		}
		ftOpacity(i);
	};

	ftArray.push(ftArray[0]);
	ftArray.splice(0, 1, );
}

function carouselRight() {
	let p = 3;
	for (let i of ftArray) {	
		i.classList.remove(i.classList[1]);
		i.classList.add(`pos${p}`)
		p++
		if (p > ftArray.length) {
			p = 1;
		}
		ftOpacity(i);
	};

	ftArray.splice(0, 0, ftArray[4]);
	ftArray.pop();
}

ft2.addEventListener('click', function() {
	const wellbeing = '<div class="popup-video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/DCira0vgmoM?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
	overlay.style.cssText = 'visibility: visible; opacity: 1; pointer-events: auto;'
	overlay.insertAdjacentHTML('beforeEnd', wellbeing);
	overlay.lastElementChild.style.cssText = 'width: 535px'
	document.body.style.cssText = 'overflow: hidden';
});

ft3.addEventListener('click', function() {
	const julie = '<div class="popup-img"><img src="img/ft_3.jpg" alt=""></div>'
	overlay.style.cssText = 'visibility: visible; opacity: 1; pointer-events: auto;'
	overlay.insertAdjacentHTML('beforeEnd', julie);
	document.body.style.cssText = 'overflow: hidden';
})

ft5.addEventListener('click', function() {
	const energyBurst = '<div class="popup-video"><iframe width="100%" height="100%" src="https://www.youtube.com/embed/kFSOwNh0tMA?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>';
	overlay.style.cssText = 'visibility: visible; opacity: 1; pointer-events: auto;'
	overlay.insertAdjacentHTML('beforeEnd', energyBurst);
	overlay.lastElementChild.style.cssText = 'width: 535px'
	document.body.style.cssText = 'overflow: hidden';
});

window.addEventListener('load', function() {
	if (hero.offsetWidth <= 640) {
		isMob = true;
		document.querySelector('.pos1').style.cssText = 'opacity: 1'
		document.querySelector('.pos5').style.cssText = 'opacity: 1'
	} else {
		isMob = false;
		document.querySelector('.pos1').style.cssText = 'opacity: 0; pointer-events: none'
		document.querySelector('.pos5').style.cssText = 'opacity: 0; pointer-events: none'
	}

	changeHero();
});

window.addEventListener('resize', function() {
	if (hero.offsetWidth <= 640) {
		isMob = true;
		document.querySelector('.pos1').style.cssText = 'opacity: 1'
		document.querySelector('.pos5').style.cssText = 'opacity: 1'
	} else {
		isMob = false;
		document.querySelector('.pos1').style.cssText = 'opacity: 0; pointer-events: none'
		document.querySelector('.pos5').style.cssText = 'opacity: 0; pointer-events: none'
	}

	changeHero();
});

leftArrow.addEventListener('click', function() {
	if (isMob === false) {
		carouselRight();
		ftInt = 0;
	}
});

rightArrow.addEventListener('click', function() {
	if (isMob === false) {
		carouselLeft();
		ftInt = 0;
	}
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

slide1.addEventListener('click', function() {
	heroInt = 0;
	changeHero();
	count = 0;
});

slide2.addEventListener('click', function() {
	heroInt = 1;
	changeHero();
	count = 0;
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

setInterval(function() {
	if (count >= 8) {
		heroInt++;
		if (heroInt > 1) {
			heroInt = 0
		};
		changeHero();
		count = 0;
	}
	count++;
}, 1000);

setInterval(function() {
	if (isMob === false && ftInt >= 8) {
		carouselLeft();
		ftInt = 0;
	}
	ftInt++;
}, 1000);

setTimeout(function() {
	page.style.cssText = 'opacity: 1; transform: translateY(0);'
}, 100);