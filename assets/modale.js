const openModal = (e) => {
	e.preventDefault();
	const modal = document.querySelector(".modale");

	modal.classList.remove('hide');
	modal.style.display = 'flex';
	void modal.offsetWidth; 
	modal.classList.add('show');

	modal.removeAttribute('aria-hidden');
	modal.setAttribute('aria-modal', 'true');
	modal.addEventListener('click', closeModal);

	const imgSrc = e.target.getAttribute('src');
	const imgAlt = e.target.getAttribute('alt');
	const imgPlace = document.querySelector('.img-body');
	imgPlace.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;

    document.querySelectorAll('.img-body, .img-next, .img-prev').forEach(elem => {
        elem.addEventListener('click', stopPropagation);
    })
};

const closeModal = (e) => {
	const modal = document.querySelector(".modale");
	if (modal === null) return;
	e.preventDefault();

	modal.classList.remove('show');
	modal.classList.add('hide');

	modal.setAttribute('aria-hidden', 'true');
	modal.removeAttribute('aria-modal');
	modal.removeEventListener('click', closeModal);

	modal.addEventListener('animationend', () => {
		if (modal.classList.contains('hide')) {
			modal.style.display = 'none';
			modal.classList.remove('hide');
		}
	}, { once: true });

	if (modal.contains(document.activeElement)) {
		document.activeElement.blur();
	}
};

const stopPropagation = (e) => {
    e.stopPropagation();
}

const afficherPrecedent = (e) => {
	const imgPlace = document.querySelector('.img-body');
	const imgSrc = imgPlace.querySelector('img').getAttribute('src');
	const allImg = document.querySelectorAll(".gallery img");
	let currentIndex = Array.from(allImg).findIndex(img => img.getAttribute('src') === imgSrc);
    console.log(currentIndex);
	currentIndex = (currentIndex - 1 + allImg.length) % allImg.length;

	imgPlace.innerHTML = `<img src="${allImg[currentIndex].getAttribute('src')}" alt="${allImg[currentIndex].getAttribute('alt')}">`;
};

const afficherSuivant = (e) => {
	const imgPlace = document.querySelector('.img-body');
	const imgSrc = imgPlace.querySelector('img').getAttribute('src');
	const allImg = document.querySelectorAll(".gallery img");
	let currentIndex = Array.from(allImg).findIndex(img => img.getAttribute('src') === imgSrc);
    console.log(currentIndex);
	currentIndex = (currentIndex + 1) % allImg.length;

	imgPlace.innerHTML = `<img src="${allImg[currentIndex].getAttribute('src')}" alt="${allImg[currentIndex].getAttribute('alt')}">`;
};

document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', openModal);
});

document.querySelectorAll('.img-prev').forEach(a => {
    a.addEventListener('click', afficherPrecedent);
});

document.querySelectorAll('.img-next').forEach(a => {
    a.addEventListener('click', afficherSuivant);
});