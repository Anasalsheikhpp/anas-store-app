const CACHE_NAME = 'anas-store-v1';
const ASSETS = [
  '/anas-store-app/',
  '/anas-store-app/index.html',
  '/anas-store-app/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
