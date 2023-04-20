import '../inline/ui-kit';
import {NavigationChanger} from '../components/navigation-changer';

const initNavigationChanger = () => {
  const navigationChanger = new NavigationChanger();
  navigationChanger.init();
};

export {initNavigationChanger};
