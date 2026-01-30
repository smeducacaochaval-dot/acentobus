self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("acentobus").then(cache => {
      return cache.addAll(["index.html","manifest.json","icon.png"]);
    })
  );
});
