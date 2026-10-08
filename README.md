# Gestor Pessoal (app)

Casca de app (PWA) do Gestor Pessoal: nome, ícone e tela cheia no celular.
Ela só abre, por dentro, o web app do Google Apps Script. **Aqui não há dados, senhas nem chaves**:
o acesso continua exigindo a conta Google do dono e a senha de 4 dígitos do site.

O código do site e do bot fica no repositório privado `gestao-de-contas`
(veja `docs/site.md` lá, seção "App Gestor Pessoal").

## Arquivos

| Arquivo | Papel |
|---|---|
| `index.html` | abre o site num iframe em tela cheia; se em 20 s o site não avisar que carregou (`postMessage('painel-ok')`), mostra "Entrar no Google" |
| `manifest.json` | nome, cores, ícones e modo app (`standalone`) |
| `sw.js` | service worker mínimo (o Chrome exige para instalar); não guarda cache |
| `icone-*.png`, `apple-touch-icon.png` | ícone do assistente (o `maskable` é o recorte que o Android usa) |

## Instalar no celular

1. GitHub Pages ligado: Settings → Pages → Branch `main`, pasta `/ (root)` → Save.
2. No Chrome, abrir https://dionisiocarneto.github.io/gestor-pessoal/ → ⋮ → **Instalar app**.
