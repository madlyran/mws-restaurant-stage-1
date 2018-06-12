
var cache_name = 'resteraunt v3';
var urlsToCache = [
	'/',
	'/restaurant.html',
	'/css/styles.css',
	'/js/restaurant_info.js',
	'/js/dbhelper.js',
	'/js/main.js',
	'/data/restaurants.json',
	'/js/sw.js',
	'/img/1.jpg',
	'/img/2.jpg',
	'/img/3.jpg',
	'/img/4.jpg',
	'/img/5.jpg',
	'/img/6.jpg',
	'/img/7.jpg',
	'/img/8.jpg',
	'/img/9.jpg',
	'/img/10.jpg',
	'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
	'https://fonts.gstatic.com/s/roboto/v18/KFOmCnqEu92Fr1Mu4mxK.woff2',
	'https://fonts.gstatic.com/s/roboto/v18/KFOlCnqEu92Fr1MmEU9fBBc4.woff2'
	];
self.addEventListener('install', function (event) {
	event.waitUntil(
		caches.open(cache_name).then(function (cache) {console.log('opened cache'); return cache.addAll(urlsToCache);})
	);
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
	caches.match(event.request).then(function(response) {
		if (response) {
			return response;
		}
		return fetch(event.request);
	})
  );
});
