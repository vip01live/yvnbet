# YvnBet

Premium multilingual YvnBet frontend built with semantic HTML, modular CSS and vanilla JavaScript.

## Structure

```
index.html
login/index.html
about/index.html
terms/index.html
privacy/index.html
contact/index.html
partners/index.html
responsible/index.html
assets/css/
assets/js/
assets/data/
assets/icons/
assets/img/
api/admin/
yvn/admin/login/bet/admin/
```

## Features

- HY / RU / EN interface with persisted language selection.
- Responsive luxury dark-purple design from 320px upward.
- 18+ age gate before site content.
- Responsive hero slider with autoplay, arrows and touch swipe.
- Crypto payment strip.
- Game grid driven by `assets/data/games.json`.
- Deterministic daily recent-win dataset using Asia/Yerevan date boundaries.
- Draggable Telegram floating button with persisted position.
- Optional background audio with persisted state.
- Separate content and page styles.
- Hidden server-side admin authentication and CMS content publishing.
- No public frontend credential storage.

## Admin

Hidden admin path:

`/yvn/admin/login/bet/admin/`

Set these server environment variables before enabling the CMS:

- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `ADMIN_SESSION_SECRET`
- `GITHUB_TOKEN`
- `GITHUB_OWNER` (defaults to `vip01live`)
- `GITHUB_REPO` (defaults to `yvnbet`)

The CMS API keeps credentials server-side and publishes `assets/data/content.json` through the GitHub API.

For production, use a dedicated GitHub token with the minimum repository permissions required for the content file workflow.

## Audio

Place the final audio file at:

`assets/audio/bg.mp3`

The public site treats audio as optional and respects browser autoplay restrictions.

## Deployment

The public frontend can be served as static assets. The admin API requires a serverless Node.js environment with the environment variables above configured.