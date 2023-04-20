const MAP_URL = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=5e855f52-3b66-497c-8633-552f90c58837';
let mapBlock;
let isLoaded = false;
let map;
let interval;

const initMap = () => {
  const lng = mapBlock.dataset.longitude || 55.713669;
  const lat = mapBlock.dataset.latitude || 37.573169;
  const zoom = mapBlock.dataset.zoom || 15;
  const pin = mapBlock.dataset.pin || 'img/svg/map-pin.svg';

  window.ymaps.ready(function () {
    map = new window.ymaps.Map(mapBlock, {
      center: [lng, lat],
      zoom,
    }, {
      searchControlProvider: 'yandex#search',
    });

    const placemark = new window.ymaps.Placemark([lng, lat], {}, {
      iconLayout: 'default#image',
      iconImageHref: pin,
      iconImageSize: [166, 91],
      iconImageOffset: [-(67 / 2), -91],
    });

    map.geoObjects.add(placemark);

    map.controls.remove('geolocationControl');
    map.controls.remove('routeEditor');
    map.controls.remove('searchControl');
    map.controls.remove('trafficControl');
    map.controls.remove('typeSelector');
    map.controls.remove('fullscreenControl');
    map.controls.remove('rulerControl');
    map.controls.remove('routeButtonControl');
    map.controls.remove('routePanelControl');
    map.behaviors.disable(['scrollZoom']);
  });
};

const loadMap = () => {
  if (isLoaded) {
    return;
  }

  isLoaded = true;
  const script = document.createElement('script');
  script.src = MAP_URL;
  document.body.appendChild(script);
  interval = setInterval(() => {
    if (window.ymaps) {
      initMap();
      clearInterval(interval);
    } else {
      return;
    }
  }, 100);
};

const initMapBlock = () => {
  mapBlock = document.querySelector('[data-map]');

  if (!mapBlock) {
    return;
  }

  loadMap();
};

export {initMapBlock};
