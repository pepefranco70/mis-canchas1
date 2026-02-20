// Este script permite que la app sea "instalable"
self.addEventListener('fetch', (event) => {
  // Aquí podrías agregar lógica para que la app funcione sin internet
  event.respondWith(fetch(event.request));
});