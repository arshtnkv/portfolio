const initPreloader = () => {
  const preloader = document.querySelector('#preloader');
  preloader.classList.add('is-hide');
  setTimeout(function () {
    preloader.remove();
  }, 1000);
};

export {initPreloader};
