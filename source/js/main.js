import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {headerFixed} from './modules/header-fixed';
import {initPreloader} from './modules/preloader';
import {initMenu} from './modules/init-menu';
import {initBtnScrollUp} from './modules/init-btn-scroll-up';
import {initNavigationChanger} from './modules/init-navigation-changer';
import {initAnime} from './modules/init-anime';
import {initSphere} from './modules/init-sphere';
import {initHover3d} from './modules/init-hover3d';
import {initMapBlock} from './modules/init-map';
import {initParallax} from './modules/init-parallax';
// import {initLazyLoad} from './modules/init-lazy-loading';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  headerFixed();

  setTimeout(() => {
    initSphere();
  }, 3000);

  initHover3d();
  initMenu();
  initBtnScrollUp();
  initNavigationChanger();
  initAnime();
  initParallax();
  // initLazyLoad();

  window.addEventListener('load', () => {
    initPreloader();
    initMapBlock();
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
