const animeTitle = () => {
  // Intersection Observer API
  // настройки
  let options = {
    root: null,
    rootMargin: '1px',
  };

  // функция обратного вызова
  let callback = function (entries, observer) {
    entries.forEach((entry) => {
      // усли эл является наблюдателем
      if (entry.isIntersecting) {
        // console.log('fild', entry);
        // добавляем класс active к нему
        entry.target.classList.add('active');
        // отпишемся от наблюдения
        observer.unobserve(entry.target);
      }
    });
  };

  // наблюдатель
  let observer = new IntersectionObserver(callback, options);

  // определяет элементы, за которыми за которыми наблюдаем
  let targets = document.querySelectorAll('.anime');
  targets.forEach((target) => {
    observer.observe(target);
  });
};

export {animeTitle};
