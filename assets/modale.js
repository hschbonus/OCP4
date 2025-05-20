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

const afficherPrecedent = (e) => {
    const imgPlace = document.querySelector('.img-body');
    const imgSrc = imgPlace.querySelector('img').getAttribute('src');
    const allImg = document.querySelectorAll(".gallery img");
    let currentIndex = Array.from(allImg).findIndex(img => img.getAttribute('src') === imgSrc);
    if (currentIndex > 0) {
        currentIndex--;
        imgPlace.innerHTML = `<img src="${allImg[currentIndex].getAttribute('src')}" alt="${allImg[currentIndex].getAttribute('alt')}">`;
    }
};  

const afficherSuivant = (e) => {
    const imgPlace = document.querySelector('.img-body');
    const imgSrc = imgPlace.querySelector('img').getAttribute('src');
    const allImg = document.querySelectorAll(".gallery img");
    let currentIndex = Array.from(allImg).findIndex(img => img.getAttribute('src') === imgSrc);
    if (currentIndex < allImg.length - 1) {
        currentIndex++;
        imgPlace.innerHTML = `<img src="${allImg[currentIndex].getAttribute('src')}" alt="${allImg[currentIndex].getAttribute('alt')}">`;
    }
};

document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', openModal);
});

const stopPropagation = (e) => {
    e.stopPropagation();
}

