self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('mantra-counter-v1').then((cache) => {
            return cache.addAll([
                '/',
                '/index.html',
                '/app.js',
                '/manifest.json',
                '/icons/icon-192x192.png',
                '/icons/icon-512x512.png',
                '/done.mp3'
            ]);
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
