self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('zohaib-v1').then(cache => {
      return cache.addAll(['/my-calculator/']);
    })
  );
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
