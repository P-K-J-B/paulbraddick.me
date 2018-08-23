const header = document.querySelector('.header');
const burgerMenu = document.querySelector('.burger-menu');
const mobNav = document.querySelector('#mob-nav');
const up = document.querySelector('.up');
const navOverlay = document.querySelector('.nav-overlay');
const navBkg = document.querySelector('.nav-bkg');
const footer = document.querySelector('#footer');
const overlay = document.querySelector('.overlay');
const bkg = document.querySelector('.overlay-bkg');
const popup = document.querySelector('.popup');
const prevImg = document.querySelector('.left-arrow');
const nextImg = document.querySelector('.right-arrow');
const prevPage = document.querySelector('.page-left');
const nextPage = document.querySelector('.page-right');
const cross = document.querySelector('.cross');
const container = document.querySelector('.gallery');

/*
The pages array contains a set of 'child arrays' which themselves each contain 
a list of file pathnames in the form of strings.

To create a new gallery page, simply add a new 'child array' to the pages array 
with UP TO 9 file pathnames. A single gallery page MUST NOT contain more than 9 items.
*/
const pages = [
['img/em1.jpg',
'img/em2.jpg',
'img/em3.jpg',
'img/em4.jpg',
'img/em5.jpg',
'img/em6.jpg',
'img/em7.jpg',
'img/em8.jpg',
'img/em9.jpg']
];

let count = 100;

let currentPage = 1;

let viewIndex = 0;

let content = pages[0];

function reveal(item) {
	setTimeout(function() {
		item.style.cssText = 'opacity: 1; transform: translateY(0);';
	}, count);
};

function generatePages() {
	for (let i = pages.length; i > 0; i--) {
		let pageNo = `<span class="page-no">${i}</span>`;
		prevPage.insertAdjacentHTML('afterend', pageNo);
	}

	pageNumbers = Array.prototype.slice.call(document.querySelectorAll('.page-no'));

	for (const number of pageNumbers) {
		number.addEventListener('click', function() {
			if (currentPage == this.innerText) {
				return false;
			} else {
				currentPage = this.innerText;
				content = pages[currentPage-1];
				header.scrollIntoView({behavior: 'smooth'});
				loadPage();	
			} 
		});
	};
}

function loadPage() {
	container.innerHTML = '';

	for (let i = 0; i < content.length; i++) {
		let cell = `<div class="grid-cell"><div class="img"></div></div>`;
		container.insertAdjacentHTML('afterBegin', cell);
	}

	gridCells = Array.prototype.slice.call(document.querySelectorAll('.grid-cell'));

	for (const cell of gridCells) {
		cell.style.cssText = 'opacity: 0; visibility: hidden; transform: translateY(20px);';
		cell.classList.add('disabled');
	}

	for (let i = 0; i < content.length; i++) {
		gridCells[i].firstElementChild.style.backgroundImage = `url('../${content[i]}')`;
		gridCells[i].addEventListener('click', function view() {
			popup.innerHTML = `<img src="../${content[i]}" alt="">`;
			popup.style.cssText = 'width: 600px;'
			popup.scrollTop = 0;
			overlay.style.cssText = 'visibility: visible; opacity: 1';
			document.body.style.cssText = 'overflow: hidden';
			viewIndex = i;
		});
		reveal(gridCells[i]);
		count += 100;	
	}

	count = 100;

	setTimeout(function() {
		for (const cell of gridCells) {
			cell.classList.remove('disabled');
		}
	}, 1300);

	for (const number of pageNumbers) {
		number.style.cssText = 'opacity: 1';
		number.classList.remove('disabled');
	}

	pageNumbers[currentPage-1].style.cssText = 'opacity: 0.3';
	pageNumbers[currentPage-1].classList.add('disabled');

	prevPage.classList.remove('disabled');
	nextPage.classList.remove('disabled');

	if (currentPage == 1) {
		prevPage.classList.add('disabled');
	} else if (currentPage == pageNumbers.length) {
		nextPage.classList.add('disabled');
	}

	if (pageNumbers.length == 1) {
		prevPage.classList.add('disabled');
		nextPage.classList.add('disabled');
	}
}

setTimeout(function() {
	footer.style.cssText = 'opacity: 1; transform: translateY(0);';
}, 100);

bkg.addEventListener('click', function() {
	overlay.style.cssText = 'visibility: hidden; opacity: 0;';
	document.body.style.cssText = 'overflow: auto';
});

cross.addEventListener('click', function() {
	overlay.style.cssText = 'visibility: hidden; opacity: 0;';
	document.body.style.cssText = 'overflow: auto';
});

nextImg.addEventListener('click', function() {
	viewIndex += 1;
	if (viewIndex === content.length) {
		viewIndex = 0;
	}
	popup.innerHTML = `<img src="../${content[viewIndex]}" alt="">`;
	popup.scrollTop = 0;
});

prevImg.addEventListener('click', function() {
	viewIndex -= 1;
	if (viewIndex <= -1) {
		viewIndex = content.length-1;
	}
	popup.innerHTML = `<img src="../${content[viewIndex]}" alt="">`;
	popup.scrollTop = 0;
});

popup.addEventListener('click', function() {
	viewIndex += 1;
	if (viewIndex === content.length) {
		viewIndex = 0;
	}
	popup.innerHTML = `<img src="../${content[viewIndex]}" alt="">`;
	popup.scrollTop = 0;
});

nextPage.addEventListener('click', function() {
	if (currentPage < pages.length) {
		currentPage++
		content = pages[currentPage-1];
		header.scrollIntoView({behavior: 'smooth'});
		loadPage();
	}
});

prevPage.addEventListener('click', function() {
	if (currentPage > 1) {
		currentPage--
		content = pages[currentPage-1];
		header.scrollIntoView({behavior: 'smooth'});
		loadPage();
	}
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

generatePages();
loadPage();