const CACHE_NAME = 'anas-store-app-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'app_icon_192x192.png',
  'app_icon_512x512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
