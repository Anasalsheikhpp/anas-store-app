const CACHE_NAME = 'anas-store-v1';
const ASSETS = [
    './',
    'index.html',
    'manifest.json',
    'app_icon_192x192.png',
    'app_icon_512x512.png'
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
