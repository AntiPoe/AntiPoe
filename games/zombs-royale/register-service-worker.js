if ("serviceWorker" in navigator) {
	navigator.serviceWorker.register("service-worker.js").then(function(r) {
		console.log("ServiceWorker registration successful with scope:", r.scope);
	}).catch(function(e) {
		console.log("ServiceWorker registration failed:", e);
	});
}