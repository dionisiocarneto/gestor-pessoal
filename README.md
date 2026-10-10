# Alfa IA (app, antes Gestor Pessoal)

Casca de app (PWA) do Alfa IA (nome desde 10/10/2026; antes Gestor Pessoal): nome, ícone e tela cheia no celular.
Ela só abre, por dentro, o web app do Google Apps Script. **Aqui não há dados, senhas nem chaves**:
o acesso continua exigindo a conta Google do dono e a senha de 4 dígitos do site.

O código do site e do bot fica no repositório privado `gestao-de-contas`
(veja `docs/site.md` lá, seção "App Gestor Pessoal").

## Arquivos

| Arquivo | Papel |
|---|---|
| `index.html` | abre o site num iframe em tela cheia; se em 20 s o site não avisar que carregou (`postMessage('painel-ok')`), mostra "Entrar no Google" |
| `manifest.json` | nome, cores, ícones e modo app (`standalone`) |
| `sw.js` | service worker (o Chrome exige para instalar): mostra as notificações que o bot manda (`push`) e abre o app ao tocar; não guarda cache |
| `icone-*.png`, `apple-touch-icon.png` | ícone da cabeça do Alfa (o `maskable` é o recorte que o Android usa) |
| `badge-96.png` | silhueta branca da cabeça do Alfa para a barra de notificações |

## Instalar no celular

1. GitHub Pages ligado: Settings → Pages → Branch `main`, pasta `/ (root)` → Save.
2. No Chrome, abrir https://dionisiocarneto.github.io/gestor-pessoal/ → ⋮ → **Instalar app**.

## Notificações

No app, cadeado do topo → Notificações → Ativar. A folha "Ativar notificações" desta página pede a permissão,
inscreve o celular e entrega a inscrição ao site (postMessage), que repassa ao bot. Quem envia é o bot
(`src/Push.js` no repositório privado). Para trocar o ícone: substituir os PNGs (mesmos nomes e tamanhos).
