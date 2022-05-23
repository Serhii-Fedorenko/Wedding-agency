function stopDefAction(evt) {
    evt.preventDefault();
}

const weddingButton = document.querySelector('.wedding__button');

weddingButton.addEventListener('click', stopDefAction);
