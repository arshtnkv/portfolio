import {gsap} from '../vendor/gsap';
import {ScrollTrigger} from '../vendor/ScrollTrigger';
import {ScrollSmoother} from '../vendor/ScrollSmoother';

const initParallax = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  const btnsWorks = document.querySelectorAll('[data-btn="works"]');
  const btnContact = document.querySelector('[data-btn="contact"]');
  const leftItems = gsap.utils.toArray('.card--left');
  const rightItems = gsap.utils.toArray('.card--right');
  const centerItems = gsap.utils.toArray('.card--center');

  if (ScrollTrigger.isTouch !== 1) {
    ScrollTrigger.normalizeScroll();
    let smoother = ScrollSmoother.create({
      wrapper: '.app',
      content: '.wrapper',
      smooth: 5,
      effects: true,
    });

    if (btnsWorks && btnContact) {
      btnsWorks.forEach((btn) => {
        btn.addEventListener('click', () => {
          smoother.scrollTo('.works', true, 'top');
        });
      });

      btnContact.addEventListener('click', () => {
        smoother.scrollTo('.contact', true, 'top');
      });
    }

    gsap.fromTo('.header', {opacity: 1}, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.header',
        start: 'center',
        end: 'bottom',
        scrub: true,
      },
    });

    gsap.fromTo('.works', {opacity: 1}, {
      opacity: 0,
      scrollTrigger: {
        trigger: '.works',
        start: 'center',
        end: 'bottom',
        scrub: true,
      },
    });

    rightItems.forEach((item) => {
      gsap.fromTo(item, {x: 350}, {
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-1400',
          end: '-1000',
          scrub: true,
        },
      });
    });

    leftItems.forEach((item) => {
      gsap.fromTo(item, {x: -350}, {
        x: 0,
        scrollTrigger: {
          trigger: item,
          start: '-1400',
          end: '-1000',
          scrub: true,
        },
      });
    });

    centerItems.forEach((item) => {
      gsap.fromTo(item, {y: 350}, {
        y: 0,
        scrollTrigger: {
          trigger: item,
          start: '-2000',
          end: '-1000',
          scrub: true,
        },
      });
    });
  }
};

export {initParallax};
