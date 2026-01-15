self.addEventListener('install', e => {
    e.waitUntil(
        caches.open('qr-scanner-v2').then(cache => {
            return cache.addAll([
                '/ftg-scanner',
                'https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js'
            ]);
        })
    );
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(response => response || fetch(e.request))
    );
});