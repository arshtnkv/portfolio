import {timeline, stagger} from '../vendor/anime';

const initAnime = () => {
  const texts = document.querySelectorAll('.text');
  if (!texts) {
    return;
  }
  texts.forEach((text) => {
    text.innerHTML = text.textContent.replace(/\S/g, '<span>$&</span>');

    const animeTitle = timeline({
      targets: '.text span',
      easing: 'easeOutExpo',
    });

    animeTitle.add({
      translateX: [-1000, 0],
      scale: [10, 1],
      opacity: [0, 1],
      duration: 1500,
      delay: stagger(100),
    });
  });

  const animeIcon = timeline({
    targets: '#btn-github',
    easing: 'easeOutCirc',
  });

  animeIcon.add({
    translateY: [-3000, 0],
    scale: [10, 1],
    duration: 1000,
    delay: 4000,
  });

  const btnCV = timeline({
    targets: '#btn-cv',
    easing: 'easeOutCirc',
  });

  btnCV.add({
    translateX: [-4000, 0],
    scale: [10, 1],
    duration: 1000,
    delay: 2000,
  });

  const btnWork = timeline({
    targets: '#btn-work',
    easing: 'easeOutCirc',
  });

  btnWork.add({
    translateX: [-4000, 0],
    scale: [10, 1],
    duration: 1000,
    delay: 2500,
  });
};

export {initAnime};
