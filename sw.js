// Service worker mínimo: o Chrome exige um para oferecer "Instalar app".
// Não guarda nada em cache; tudo vem da rede (os dados ficam no Google).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
