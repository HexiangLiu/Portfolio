const static_files = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Galada&family=Lato:wght@300;400;700;900&family=Yellowtail&display=swap',
  'http://localhost:3000/static/js/bundle.js',
  'http://localhost:3000/static/js/0.chunk.js',
  'http://localhost:3000/static/js/main.chunk.js',
  'http://localhost:3000/static/media/Hexiang_Liu.d19d6de8.jpg',
  'http://localhost:3000/static/media/Hexiang_Liu-1.dba06394.jpg',
  'http://localhost:3000/manifest.json',
  '/logo192.png',
];

const static_cache = 'static_cache';

self.oninstall = (e) => {
  e.waitUntil(
    caches
      .open(static_cache)
      .then((cache) => cache.addAll(static_files))
      .then(() => self.skipWaiting())
  );
};

self.onactivate = (e) => {
  e.waitUntil(
    caches
      .keys()
      .then((keylist) =>
        Promise.all(
          keylist.map((key) => {
            if (key !== static_cache) {
              return caches.delete(key);
            }
          })
        )
      )
      .then(() => self.Clients.claim())
  );
};

self.onfetch = (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      if (res) {
        console.log('Found response in cache:', res);

        return res;
      }

      console.log('No response found in cache');

      return fetch(e.request)
        .then((res) => {
          console.log('Response from network is:', res);

          return res;
        })
        .catch((err) => {
          console.error('fetch failed', err);
          throw err;
        });
    })
  );
};
