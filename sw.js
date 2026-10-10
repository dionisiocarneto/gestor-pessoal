// Service worker do app: o Chrome exige um para instalar, e é ele que mostra as notificações.
// Não guarda nada em cache; tudo vem da rede (os dados ficam no Google).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});

// Notificação mandada pelo bot (src/Push.js no repositório gestao-de-contas): {titulo, texto, url}.
self.addEventListener('push', (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (x) { d = { texto: e.data ? e.data.text() : '' }; }
  const base = self.registration.scope;
  e.waitUntil(self.registration.showNotification(d.titulo || 'Alpha IA', {
    body: d.texto || '',
    icon: new URL('icone-192.png?v=2', base).href,
    badge: new URL('badge-96.png?v=2', base).href,
    data: { url: new URL(d.url || './', base).href }
  }));
});

// Tocar na notificação abre o app (ou traz para frente o que já está aberto).
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || self.registration.scope;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((ws) => {
    const w = ws.find((c) => c.url.indexOf(self.registration.scope) === 0);
    if (!w) return self.clients.openWindow(url);
    return w.focus().then((f) => (url !== w.url && f.navigate ? f.navigate(url) : f)).catch(() => w.focus());
  }));
});
