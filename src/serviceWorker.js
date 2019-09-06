const cacheName = 'pwa-card-match-game';

const urlsToCache = [
  '/#/',
  '/#/game/difficulty/choose',
  '/#/game/1',
  '/#/game/2',
  '/#/game/3',
  '/#/game/4',
  '/#/scoreboard',
  '/#/scoreboard/input',
  '/#/about'
];

const self = window.self;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => (cache.addAll(urlsToCache)))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhiteList = ['pwa-card-match-game'];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        // eslint-disable-next-line
        cacheNames.map((name) => {
          if (cacheWhiteList.indexOf(name) !== -1) {
            return caches.delete(name);
          }
        })
      );
    })
  );
});

export const register = () => {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('serviceWorker.js').then((registration) => {
        console.log('Worker registration successful', registration.scope);
      }, (err) => {
        console.log('Worker registration failed', err);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    console.log('Service Worker is not supported by browser.');
  }
};