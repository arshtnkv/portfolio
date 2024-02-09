import {animeIntro} from '../modules/init-anime';
const initPreloader = () => {
  const preloader = document.querySelector('#preloader');
  if (!preloader) {
    return;
  }
  preloader.classList.add('is-hide');
  animeIntro.play();
  setTimeout(function () {
    preloader.remove();
  }, 1000);
};

export {initPreloader};
