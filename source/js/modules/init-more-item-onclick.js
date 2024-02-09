const initMoreItemOnclick = () => {
  const work = document.querySelector('.works');

  if (!work) {
    return;
  }

  const MOBILE_WIDTH = window.matchMedia('(max-width:767px)');
  const DESCTOP_WIDTH = window.matchMedia('(min-width:768px)');
  const btnShowMore = work.querySelector('[data-btn="more"]');
  const cards = work.querySelectorAll('.card');
  let cardRange = 0;
  let item = 0;

  const breakpointChecker = () => {
    if (DESCTOP_WIDTH.matches) {
      cardRange = 6;
      toggleCards();
      showMore();
    }
    if (MOBILE_WIDTH.matches) {
      cardRange = 3;
      toggleCards();
      showMore();
    }
  };

  function toggleCards() {
    item += cardRange;
    cards.forEach((element, index) => {
      element.style.display = index >= item ? 'none' : '';
    });
  }

  function showMore() {
    btnShowMore.addEventListener('click', () => {
      toggleCards();
      if (item >= cards.length) {
        btnShowMore.style.display = 'none';
      }
    });
  }

  DESCTOP_WIDTH.addListener(breakpointChecker);
  MOBILE_WIDTH.addListener(breakpointChecker);
  breakpointChecker();
};

export {initMoreItemOnclick};
