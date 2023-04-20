const initBtnScrollUp = () => {
  const btn = document.querySelector('[data-btn-up]');

  if (!btn) {
    return;
  }

  window.addEventListener('scroll', trackScroll);
  btn.addEventListener('click', goTop);

  function trackScroll() {
    // вычисляем положение от верхушки страницы
    const scrolled = window.pageYOffset;
    // считаем высоту окна браузера
    const coords = document.documentElement.clientHeight;
    // если вышли за пределы первого окна
    if (scrolled > coords) {
      // кнопка появляется
      btn.classList.add('is-show');
    } else {
      // иначе исчезает
      btn.classList.remove('is-show');
    }
  }

  function goTop() {
    // пока не вернулись в начало страницы
    if (window.pageYOffset > 0) {
      // скроллим наверх
      window.scrollBy(0, -30); // второй аргумент - скорость
      setTimeout(goTop, 0); // входим в рекурсию
    }
  }
};

export {initBtnScrollUp};
