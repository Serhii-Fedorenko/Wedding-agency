function stopDefAction(evt) {
  evt.preventDefault();
}

const weddingButton = document.querySelector('.wedding__button');

weddingButton.addEventListener('click', stopDefAction);

const heroList = document.querySelector('.hero__list');
const heroItems = Array.from(heroList.children);

// --------------------MOBILE MENU-----------------------------

const menuBtnRef = document.querySelector('[data-menu-button]');
const mobileMenuRef = document.querySelector('[data-menu]');

menuBtnRef.addEventListener('click', () => {
//   const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

  // menuBtnRef.classList.toggle('is-open');
//   menuBtnRef.setAttribute('aria-expanded', !expanded);

  mobileMenuRef.classList.toggle('is-open');
});
