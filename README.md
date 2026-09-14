# YVNBET

Professional responsive YVNBET presentation website.

## Configuration

Edit `js/script.js` → `CONFIG` to change:

- `registrationUrl` — Telegram registration URL
- `operatorUrl` — Telegram operator URL
- `providerUrl` — provider/login URL
- `audioUrl` — background audio URL
- `jackpotInterval` — recent-winner display interval

Current production links:

- Telegram operator/registration: https://t.me/yvnbet
- Provider: https://ggplus.pro

## Structure

```text
index.html
css/style.css
js/script.js
```

The website includes responsive UI, HY/RU/EN translations, persistent daily jackpot data, animated winner ticker, Telegram floating button with saved position, sound controls, game cards, payment information, rules, partnership section and SEO metadata.

## Audio

The audio source is intentionally empty. Add the final audio URL to `CONFIG.audioUrl` in `js/script.js`.

## Game links

Game cards currently open the configured provider URL because individual game URLs were not supplied. Add an individual `url` property to each game in the `games` array when provider game URLs are available.
