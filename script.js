'use strict'


const login = document.querySelector('.login');
const forme = document.querySelector('.form');
const close = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')

const imgTarget = document.querySelectorAll('.image')



login.addEventListener('click', function () {
  forme.classList.remove('display');
  overlay.classList.remove('display')
})
close.addEventListener('click', function () {
  forme.classList.add('display');
  overlay.classList.add('display')
})

document.querySelector('.nav--bar').addEventListener('click', function (e) {
  e.preventDefault()

  if (e.target.classList.contains('nav--link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  };
});

//Menu fade animition
const takeHaver = function (e) {

  if (e.target.classList.contains('nav--link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav--link');
    const title = link.closest('.nav').querySelector('.title-nav');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    })
    title.style.opacity = this;

  }
};
//Passing argument into takeHaver
nav.addEventListener('mouseover', takeHaver.bind(0.5));

nav.addEventListener('mouseout', takeHaver.bind(1));

//Sticky naogaron

const maine = document.querySelector('.maine--section')
const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky')
  } else {
    nav.classList.remove('sticky')
  }
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: '-50px'
});
headerObserver.observe(header)

//Reveal section

const allSection = document.querySelectorAll('.section');

const scrollToSection = function (entries, observer) {
  const [targetSection] = entries
  if (!targetSection.isIntersecting) return
  targetSection.target.classList.remove('section--hidden')
  observer.unobserve(targetSection.target)
}

const sctionObserver = new IntersectionObserver(scrollToSection, {
  root: null,
  threshold: 0.17
});
allSection.forEach(function (section) {
  sctionObserver.observe(section)
  section.classList.add('section--hidden')
});

//lazy loading img
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return
  entry.target.classList.remove('lazy-img')
  observer.unobserve(entry.target)
}
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0
})

imgTarget.forEach(function (image) {
  imgObserver.observe(image)
  image.classList.add('lazy-img')
})

///// Slider
let active = 0;
const slideContent = document.querySelector('.slide-content');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

const btnSlider = function () {
  active = (active == slides.length - 1) ? 0 : active + 1;

  slides.forEach(slide => slide.classList.remove('active'));
  slides[active].classList.add('active')
};
btnLeft.addEventListener('click', function () {

  btnSlider()
});
btnRight.addEventListener('click', function () {
  btnSlider()
});
/////////////////////////////////










