function stopDefAction(evt) {
    evt.preventDefault();
}

const weddingButton = document.querySelector('.wedding__button');

weddingButton.addEventListener('click', stopDefAction);

const heroList = document.querySelector('.hero__list');
const heroItems = Array.from(heroList.children);

