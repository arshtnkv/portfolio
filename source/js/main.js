import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {headerFixed} from './modules/header-fixed';
import {initPreloader} from './modules/preloader';
import {initMenu} from './modules/init-menu';
import {initNavigationChanger} from './modules/init-navigation-changer';
// import {animeElViewportScroll} from './modules/init-anime';
import {initSphere} from './modules/init-sphere';
import {initHover3d} from './modules/init-hover3d';
import {initMapBlock} from './modules/init-map';
import {initMoreItemOnclick} from './modules/init-more-item-onclick';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  headerFixed();

  // setTimeout(() => {
  //   initSphere();
  // }, 3000);
  initSphere();
  initHover3d();
  initMenu();
  initNavigationChanger();
  // animeElViewportScroll();
  initMoreItemOnclick();

  window.addEventListener('load', () => {
    initPreloader();
    initMapBlock();
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });

  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
});
