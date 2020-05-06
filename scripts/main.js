'use strict';

const buyButton = document.querySelectorAll('.button--buy');
const shoppingModal = document.querySelector('.shopping');
const checkoutModal = document.querySelector('.checkout');
const thanksModal = document.querySelector('.thanks');
const overlay = document.querySelector('.overlay');
const sandwich = document.querySelector('.header__sandwich');
const mobileNavigation = document.querySelector('.mobile-nav');
const materialsSlide = document.querySelectorAll('.materials__slide');
const mainNavigationLink = document.querySelectorAll('.navigation__link');
const mobileNavigationLink = document.querySelectorAll('.mobile-nav__link');
const mobileBasket = document.querySelector('.mobile-nav__link--basket');
const buttonOrder = document.querySelector('.button--order');
// eslint-disable-next-line max-len
const closeMobileNavigation = document.querySelector('.mobile-nav__close-container');
const shoppingBag = document.querySelector('.header__basket-icon');
const closeButton = document.querySelectorAll('.shopping__close');
const checkoutButton = document.querySelector('.button--checkout');
const paymentButton = document.querySelector('.button--payment');
const upButton = document.querySelector('.button--up');

shoppingBag.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.add('show');
  shoppingModal.classList.add('show');
});

buyButton.forEach(button => {
  button.addEventListener('click', function() {
    overlay.classList.add('show');
    shoppingModal.classList.add('show');
  });
});

checkoutButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  shoppingModal.classList.remove('show');
  checkoutModal.classList.add('show');
});

paymentButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  shoppingModal.classList.remove('show');
  checkoutModal.classList.remove('show');
  thanksModal.classList.add('show');
});

closeButton.forEach(button => {
  button.addEventListener('click', function(evt) {
    evt.preventDefault();
    overlay.classList.remove('show');
    shoppingModal.classList.remove('show');
    checkoutModal.classList.remove('show');
    thanksModal.classList.remove('show');
  });
});

overlay.addEventListener('click', function(evt) {
  overlay.classList.remove('show');
  shoppingModal.classList.remove('show');
  checkoutModal.classList.remove('show');
  thanksModal.classList.remove('show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (overlay.classList.contains('show')) {
      evt.preventDefault();
      overlay.classList.remove('show');
      shoppingModal.classList.remove('show');
      checkoutModal.classList.remove('show');
      thanksModal.classList.remove('show');
    }
  }
});

sandwich.addEventListener('click', function(evt) {
  evt.preventDefault();
  mobileNavigation.classList.add('mobile-nav--active');
});

closeMobileNavigation.addEventListener('click', function(evt) {
  evt.preventDefault();
  mobileNavigation.classList.remove('mobile-nav--active');
});

materialsSlide.forEach(item => {
  item.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (item.classList.contains('materials__slide--show')) {
      item.classList.remove('materials__slide--show');
    } else {
      item.classList.add('materials__slide--show');
    }
  });
});

mainNavigationLink.forEach(link => {
  link.addEventListener('click', function(evt) {
    evt.preventDefault();

    const id = link.getAttribute('href').substr(1);

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

mobileNavigationLink.forEach(link => {
  link.addEventListener('click', function(evt) {
    evt.preventDefault();

    const id = link.getAttribute('href').substr(1);

    mobileNavigation.classList.remove('mobile-nav--active');

    document.getElementById(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  });
});

mobileBasket.addEventListener('click', function(evt) {
  evt.preventDefault();
  overlay.classList.add('show');
  shoppingModal.classList.add('show');
  mobileNavigation.classList.remove('mobile-nav--active');
});

buttonOrder.addEventListener('click', function(evt) {
  evt.preventDefault();

  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

window.onscroll = function() {
  if (window.pageYOffset > 1200) {
    upButton.classList.add('show');
  } else {
    upButton.classList.remove('show');
  }
};

upButton.addEventListener('click', function() {
  document.documentElement.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});
