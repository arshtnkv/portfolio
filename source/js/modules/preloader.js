import {animeTitle} from './init-anime';

const initPreloader = () => {
  const preloader = document.querySelector('#preloader');
  if (!preloader) {
    return;
  }
  preloader.classList.add('is-hide');

  setTimeout(function () {
    preloader.remove();
    animeTitle();
  }, 1000);

  setTimeout(() => {
    document.body.classList.remove('scroll-lock');
  }, 3000);
};

export {initPreloader};
