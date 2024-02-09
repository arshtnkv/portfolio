const headerFixed = () => {
  const menu = document.querySelector('.header');

  if (!menu) {
    return;
  }

  const removeClass = 'hidden';
  const browserHeight = document.documentElement.clientHeight;

  function addClass() {
    let scrollDistance = window.scrollY;

    if (scrollDistance >= browserHeight) {
      menu.classList.remove(removeClass);
    } else {
      menu.classList.add(removeClass);
    }
  }

  window.addEventListener('scroll', addClass);

};

export {headerFixed};
