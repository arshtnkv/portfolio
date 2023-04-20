import LazyLoad from 'vanilla-lazyload';

const initLazyLoad = () => {
  let myLazyLoad = new LazyLoad();
  myLazyLoad.update();
};

export {initLazyLoad};
