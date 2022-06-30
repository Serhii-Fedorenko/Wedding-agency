const track = document.querySelector('.faq__list');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.faq__corousel-button--right');
const prevBtn = document.querySelector('.faq__corousel-button--left');

const slideWidth = slides[0].getBoundingClientRect().width;


