const CACHE_NAME = 'app-cache-v5';
const urlsToCache = [
  './',
  './index.html',
  '/src/assets/fonts/**',
  './src/serviceRegistration.ts',
  './public/assets/sunset.jpeg',
];

// Install event: Cache files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    }).catch(error => {
      console.error('Error during cache opening: ', error);
    })
  );
  // Skip waiting to activate the new service worker immediately
  self.skipWaiting();
});



self.addEventListener('fetch', event => {
  if (event.request.method === 'POST') {
    return; // Skip POST requests
  }

  if (event.request.url.startsWith('chrome-extension://')) {
    return; // Skip caching for Chrome extension requests
  }


  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        // Clone the network response to cache it
        const responseClone = networkResponse.clone();

        // Cache the cloned response
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseClone);
        });

        return networkResponse;
      })
      .catch(async () => {
        // Serve from cache or fallback page
        return event.respondWith(
          caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
          })
        );
        // return caches.match(event.request)
        //   .then(cachedResponse => {
        //     return cachedResponse
        //     // || caches.match('./offline.html');
        //   });
      })
  );
});



//This is just to test the cache is not updated
// self.addEventListener('fetch', event => {
//   event.respondWith(
//     caches.match(event.request).then(cachedResponse => {
//       if (cachedResponse) {
//         return cachedResponse; // Serve from cache
//       }
//       return fetch(event.request); // Fetch from network
//     })
//   );
// });

// Activate event: Cleanup old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  // Take control of the page immediately
  self.clients.claim();
});
