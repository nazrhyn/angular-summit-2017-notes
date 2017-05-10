const STATIC_URLS = [
	'/',
	'styles.css'
];

self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open('VanillaCache')
			.then(function (cache) {
				cache.addAll(STATIC_URLS);
			})
	);
});

self.addEventListener('fetch', function (event) {
	event.respondWith(
		caches.match(event.request)
			.then(function (response) {
				return response || fetch(event.request);
			})
	);
});

self.addEventListener('push', function (event) {
	event.waitUntil(
		self.registration.showNotification({
			title: 'Title',
			body: 'Body'
		})
	);
});
