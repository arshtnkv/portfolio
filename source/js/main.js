import {iosVhFix} from './utils/ios-vh-fix';
// import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {headerFixed} from './modules/header-fixed';
import {initPreloader} from './modules/preloader';
import {initMenu} from './modules/init-menu';
import {initNavigationChanger} from './modules/init-navigation-changer';
// import {initMapBlock} from './modules/init-map';
import {initMoreItemOnclick} from './modules/init-more-item-onclick';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  headerFixed();
  initMenu();
  initNavigationChanger();
  initMoreItemOnclick();

  window.addEventListener('load', () => {
    initPreloader();
    // initMapBlock();
    // initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });

  window.addEventListener('beforeunload', () => {
    window.scrollTo(0, 0);
  });
});
