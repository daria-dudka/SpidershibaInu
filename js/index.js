//swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 52,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    1023: {
      slidesPerView: 4,
      spaceBetween: 52,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    350: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    310: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

//navmenu

const burgerBtn = document.querySelector('.burger-btn');
const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav');
const body = document.querySelector('body');

function bodyOverflow() {
  if (burgerBtn.classList.contains('--active')) {
    body.style.overflowY = 'hidden';
    body.style.height = `${navMenu.scrollHeight}px`;
  } else {
    body.style.overflowY = 'auto';
    body.style.height = '100%';
  }
}

function toggleMenu() {
  burgerBtn.classList.toggle('--active');
  header.classList.toggle('--active');
  bodyOverflow();
}

function closeMenu(event) {
  if (event.target.classList.contains('nav__link')) {
    burgerBtn.classList.remove('--active');
    header.classList.remove('--active');
    bodyOverflow();
  }
}

burgerBtn.addEventListener('click', toggleMenu);
navMenu.addEventListener('click', closeMenu);

//roadmap section
const roadmapCards = document.querySelectorAll('.roadmap__card');
const roadmapCardsChecked = document.querySelectorAll(
  '.roadmap__card.--checked'
);
const styleElem = document.head.appendChild(document.createElement('style'));

function setRowPosition() {
  roadmapCards.forEach((element, index) => {
    element.style.gridRow = `${index + 1}`;
  });
}

function stylePseudoElements() {
  const lineTop = roadmapCards[0].offsetHeight / 2;
  const lastElementChecked =
    roadmapCardsChecked[roadmapCardsChecked.length - 1];
  const redLineBottom =
    lastElementChecked.offsetTop + lastElementChecked.offsetHeight / 2 - 5;

  styleElem.innerHTML = `#roadmap-cards:before {top: ${lineTop}px;height: calc(100% - ${lineTop}px + 130px);}`;

  styleElem.innerHTML += `#roadmap-cards:after {top: ${lineTop}px;height: ${
    redLineBottom - lineTop
  }px;}`;
}

window.addEventListener('scroll', () => {
  roadmapCards.forEach(function (element, index) {
    if (element.getBoundingClientRect().top < 700) {
      element.style.transform = 'translateX(0)';
    }
  });
});

setRowPosition();
stylePseudoElements();

//faq section
const faqItems = document.querySelector('.faq__items');

faqItems.addEventListener('click', (event) => {
  if (event.target.classList.contains('faq__item')) {
    event.target.classList.toggle('--open');
  }
});
