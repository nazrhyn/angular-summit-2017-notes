(function () {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.register("./sw.js")
			.then(function (swRegister) {
				console.log('sw reg');

				swRegister.pushManager.subscribe({
					applicationServerKey: new Uint8Array(), // has to be as a UInt8Array
					userVisibleOnly: true
				})
					.then(function (subscription) {
						console.log('subscribed');
					});
			});
	}
})();
