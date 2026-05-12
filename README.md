# Romanos Sarantidis — Portfolio

A minimal portfolio site built with **React + Vite + CSS Modules**.

---

## What is each tool doing?

- **Vite** is the build tool. It runs your dev server, hot-reloads changes, and bundles the site for production. Think of it as "the thing that turns your `.jsx` files into something a browser can run."
- **React** is the UI library. Each section of the page is a *component* (a function that returns JSX, which is HTML-like syntax inside JavaScript).
- **CSS Modules** are regular CSS files that end in `.module.css`. They behave like normal CSS, but class names you import from them are *scoped* to one component — so `.card` in `Projects.module.css` won't clash with `.card` somewhere else.

---

## Run it locally

You need **Node.js 18+** installed. Check with:

```bash
node --version
```

Then, from the project folder:

```bash
npm install     # downloads dependencies into node_modules/  (only needed once)
npm run dev     # starts the dev server, usually at http://localhost:5173
```

Open the URL it prints. Edit any file under `src/` and the page reloads automatically.

To build for deployment (e.g., to host on Netlify, Vercel, GitHub Pages):

```bash
npm run build   # produces a `dist/` folder with the deployable files
npm run preview # serves the built version locally so you can sanity-check it
```

---

## Project structure

```
.
├── index.html              # the HTML shell Vite injects React into
├── package.json            # dependencies + npm scripts
├── vite.config.js          # Vite config (just enables the React plugin)
├── public/
│   ├── favicon.ico
│   ├── cv.pdf              # << drop your CV PDF here so the button works
│   └── images/
│       └── profile.png     # your photo (copied from the old site)
└── src/
    ├── main.jsx            # entry point: mounts <App/> to <div id="root">
    ├── App.jsx             # top-level layout + theme state
    ├── data/
    │   └── content.js      # ★ ALL your text/CV data lives here
    ├── styles/
    │   └── global.css      # theme variables + base styles
    └── components/
        ├── Nav.jsx + Nav.module.css
        ├── Hero.jsx + Hero.module.css
        ├── About.jsx + About.module.css
        ├── Experience.jsx + Experience.module.css
        ├── Projects.jsx + Projects.module.css
        ├── Skills.jsx + Skills.module.css
        ├── Education.jsx + Education.module.css
        ├── Contact.jsx + Contact.module.css
        └── Footer.jsx + Footer.module.css
```

---

## How to update content

**Almost all the text on the site lives in one file**: `src/data/content.js`.

Open it and you'll find clearly-named objects: `profile`, `experience`, `projects`, `skills`, `education`. Edit them and the page updates automatically.

For example, to add a new project, just add another object to the `projects` array — no JSX or React knowledge needed.

---

## How to add your CV

Place your CV PDF at `public/cv.pdf`. The "Download CV" button is already wired up to that path.

If you'd rather use a different filename, change `cvUrl` in `src/data/content.js`.

---

## How theme switching works (for your learning)

In `App.jsx`:
1. We keep the current theme in React state with `useState`.
2. A `useEffect` syncs that state to two places: the `<html data-theme="...">` attribute, and `localStorage` (so the choice persists between visits).
3. `global.css` defines two sets of CSS variables — one for `[data-theme="dark"]`, one for `[data-theme="light"]`. The variables (`--bg`, `--text`, `--accent`, etc.) are what every component uses.

That means **no component knows what theme is active** — they just use the variables, and CSS swaps the values for them. That's the pattern worth remembering.

---

## A few React concepts you'll see in the code

- **Component**: a function that returns JSX (HTML-in-JS). Always starts with a capital letter.
- **Props**: arguments passed to a component, like `<Nav theme={theme} toggleTheme={toggleTheme} />`.
- **`useState`**: lets a component remember a value across re-renders.
- **`useEffect`**: runs side effects (like syncing to localStorage) after the component renders.
- **`map`**: how you render lists. `items.map(item => <li>{item}</li>)` turns an array of data into an array of elements.
- **`key` prop**: required when rendering lists with `map` — React uses it to track which item is which between renders.
