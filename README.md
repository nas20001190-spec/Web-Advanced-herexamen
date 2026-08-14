# Valorant Agents Explorer

An interactive single-page application built for the Web Advanced (Dynamic Web) re-exam. The app lets users explore, search, filter, sort, and save favorite agents from Valorant, view detailed agent information (including abilities), and personalize their experience with saved notes and a light/dark theme.

**Live repository:** https://github.com/nas20001190-spec/Web-Advanced-herexamen
**Author:** Nassim El Ghzaoui

---

## Screenshots

| Dark mode — agent grid | Light mode — agent grid |
|---|---|
| ![Dark mode grid](//screenshots/Dark-mode—agent-grid.png) | ![Light mode grid](//screenshots/Light-mode—agent-grid.png) |

| Favorites filter | Agent detail modal |
|---|---|
| ![Favorites filter](//screenshots/Favorites-filter.png) | ![Agent modal](//screenshots/Agent-detail-modal.png) |

| Ultimate ability + note form |
|---|
| ![Modal with note form](//screenshots/Ultimate-ability+note-form.png) |


---

## Features

- Fetches 29+ playable agents from the official Valorant API
- Grid view showing agent portrait, name, and role (6+ pieces of info per agent when combined with the detail view)
- **Search** agents by name
- **Filter** agents by role (Duelist, Sentinel, Controller, Initiator)
- **Sort** agents alphabetically (A-Z / Z-A)
- Search, filter, and sort all work together at the same time
- **Favorites system** — mark/unmark agents as favorite, persisted in LocalStorage, with a toggle to show only favorites
- **Detailed agent modal** — click any agent to see their full portrait, description, role, and an interactive ability picker (click each ability icon to see its name and description; the Ultimate is visually highlighted)
- **Personal notes** — write and save a personal note per agent, with form validation (minimum 5 characters) and a delete option
- **Last selected role filter** is remembered between sessions (LocalStorage)
- **Dark / light theme toggle**, saved in LocalStorage, with a different background image per theme
- Scroll-triggered fade-in animation for agent cards using the Intersection Observer API
- Fully responsive layout using CSS Grid and Flexbox

---

## API used

**Valorant API** — https://valorant-api.com
Free, public, no API key required. Used endpoint: `https://valorant-api.com/v1/agents?isPlayableCharacter=true`

---

## Where each technical requirement is implemented

| Requirement | File(s) |
|---|---|
| DOM selection (`querySelector`, `getElementById`) | `src/js/render.js`, `src/js/modal.js`, `src/main.js` |
| DOM manipulation (`createElement`, `appendChild`, `innerHTML`, `classList`) | `src/js/render.js`, `src/js/modal.js` |
| Event listeners (`click`, `input`, `change`, `submit`) | `src/main.js`, `src/js/render.js`, `src/js/modal.js` |
| `const` | used throughout all `.js` files |
| Template literals | `src/js/api.js`, `src/js/render.js`, `src/js/modal.js` |
| Array iteration (`forEach`) | `src/js/render.js`, `src/js/modal.js` |
| Array methods (`map`, `filter`, `sort`) | `src/js/filters.js` (filter, sort), `src/js/modal.js` (map, filter) |
| Arrow functions | used throughout all `.js` files |
| Ternary operator | `src/js/filters.js`, `src/js/render.js`, `src/main.js` |
| Callback functions | `src/main.js` (event listener callbacks), `src/js/render.js` |
| Promises | `src/js/api.js` (`fetch(...).then(...)` chain in `src/main.js`) |
| Async / Await | `src/js/api.js` |
| Observer API (Intersection Observer) | `src/js/render.js` — `observeCards()` function |
| `fetch` | `src/js/api.js` |
| JSON parsing / manipulation | `src/js/api.js`, `src/js/storage.js` |
| Form validation | `src/js/modal.js` — note form (minimum 5 characters, error message shown) |
| LocalStorage | `src/js/storage.js` — favorites, notes, role filter preference, theme preference |
| HTML layout (Flexbox / CSS Grid) | `src/css/style.css` — `.controls` (flex), `#app` (grid) |
| Basic CSS | `src/css/style.css` |
| User-friendly elements (icons, buttons) | favorite heart button, delete note button, theme toggle icon |
| Vite project setup | `vite.config.js`, `package.json` |
| Clean folder structure | see below |

---

## Folder structure

```
Web-Advanced-herexamen/
├── index.html
├── package.json
├── src/
│   ├── main.js
│   ├── js/
│   │   ├── api.js          → fetch logic
│   │   ├── render.js       → rendering agent cards + Intersection Observer
│   │   ├── modal.js        → agent detail modal + note form
│   │   ├── filters.js      → search, filter, sort logic
│   │   └── storage.js      → LocalStorage helpers (favorites, notes, preferences)
│   ├── css/
│   │   └── style.css
│   └── assets/
│       ├── Valorant-wlp-darkmode.jpg
│       └── Valorant-wlp-lightmode.png
└── public/
```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nas20001190-spec/Web-Advanced-herexamen.git
   cd Web-Advanced-herexamen
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open the local URL shown in the terminal (typically `http://localhost:5173`) in your browser.

No API key or environment variables are required — the Valorant API is public and free to use.

---

## Sources used

- [Valorant API documentation](https://valorant-api.com) — agent data (names, portraits, roles, abilities)
- [Google Fonts](https://fonts.google.com) — Bebas Neue and Rajdhani typefaces
- [MDN Web Docs](https://developer.mozilla.org) — reference for Intersection Observer API and LocalStorage API

## AI usage log

https://chatgpt.com/c/6a7499ec-c784-83eb-8ddb-08a386efff35