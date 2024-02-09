const initMenu = () => {
  const menu = document.querySelector('.header');

  if (!menu || document.documentElement.clientWidth > 1024) {
    return;
  }

  const nav = menu.querySelector('.header__nav');
  const burger = nav.querySelector('.header__nav-toggle');
  const links = nav.querySelectorAll('.header__nav-item a');

  burger.addEventListener('click', toggleMenu);
  document.addEventListener('keydown', onPopupEscPress);
  window.addEventListener('resize', closeMenu);

  links.forEach((btn) => {
    btn.addEventListener('click', closeMenu);
  });

  function toggleMenu() {
    if (!menu.classList.contains('is-open')) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  function openMenu() {
    menu.classList.add('is-open');
    burger.classList.add('is-open');
    menu.classList.add('is-open');
    document.body.classList.add('scroll-lock');
  }

  function closeMenu() {
    menu.classList.remove('is-open');
    burger.classList.remove('is-open');
    menu.classList.remove('is-open');
    document.body.classList.remove('scroll-lock');
  }

  function onPopupEscPress(evt) {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      closeMenu();
    }
  }
};

export {initMenu};
