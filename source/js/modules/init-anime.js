import {timeline, stagger} from '../vendor/anime';

const animeIntro = timeline({
  easing: 'easeInOutCubic',
  autoplay: false,
})
    .add({
      targets: '.intro__github ',
      duration: 3000,
      // translateY: [-100, 0],
      translateX: [-3000, 0],
      rotate: [-3000, 0],
      opacity: [0, 1],
    }, '-=200')
    .add({
      targets: '.intro__links-item',
      duration: 500,
      translateX: [1000, 0],
      opacity: [0, 1],
      delay: stagger(500),
    })
    .add({
      targets: '.crushed-text span',
      easing: 'easeOutExpo',
      translateX: [-1000, 0],
      scale: [10, 1],
      opacity: [0, 1],
      duration: 700,
      delay: stagger(100),
    })
    .add({
      targets: '#sphere',
      duration: 2000,
      translateY: [-1500, 0],
      opacity: [0, 1],
    });

const animeElViewportScroll = () => {
  const blocks = document.querySelectorAll('[data-animate-block]');
  window.addEventListener('scroll', viewportAnimation);

  function viewportAnimation() {
    let scrollY = window.pageYOffset;

    blocks.forEach(function (current) {
      const viewportHeight = window.innerHeight;
      const triggerTop = (current.offsetTop + (viewportHeight * 0.2)) - viewportHeight;
      const blockHeight = current.offsetHeight;
      const blockSpace = triggerTop + blockHeight;
      const inView = scrollY > triggerTop && scrollY <= blockSpace;
      const isAnimated = current.classList.contains('ss-animated');

      if (inView && (!isAnimated)) {
        const animeUp = timeline({
          targets: current.querySelectorAll('[data-animate-el]'),
          duration: 2000,
          easing: 'easeInOutCubic',
        });

        animeUp.add({
          opacity: [0, 1],
          translateY: [500, 0],
          delay: stagger(400, {start: 200}),
          begin() {
            current.classList.add('ss-animated');
          },
        });
      }
    });
  }
};

export {animeIntro, animeElViewportScroll};
