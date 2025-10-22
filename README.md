# React + Vite — Front-end Mastery (Week 03)

## Objective
Build a responsive React application using JSX and Tailwind CSS that demonstrates component architecture, state management, hooks usage, and API integration.

## Quick start

Prerequisites:

- Node.js 18+ (or compatible) and npm/yarn/pnpm

Install dependencies:

```bash
npm install
# or
# yarn
# pnpm install
```

Run the development server (Vite):

```bash
npm run dev
```

Open http://localhost:5173 in your browser (Vite prints the exact URL in the terminal).

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the source files:

```bash
npm run lint
```

## What you'll find in this project

Top-level files

- `package.json` — scripts & dependencies
- `vite.config.js` — Vite configuration
- `tailwind.config.js` & `postcss.config.*` — Tailwind setup
- `index.html` — Vite entry HTML
- `README.md` — this file

Source files (important folders)

- `src/` — application source code
	- `main.jsx` — app bootstrap and router mount
	- `App.jsx` — root component
	- `pages/` — route pages (`Home.jsx`, `Manage.jsx`)
	- `components/` — reusable UI components (`NavBar.jsx`, `TaskManager.jsx`, `Button.jsx`, `Footer.jsx`)
	- `api/` — small API helpers or mock data (`api.jsx`)
	- `hooks/` — custom hooks (e.g. `useLocalStorege.jsx`)
	- `context/` — React context providers
	- `assets/` — images, icons
	- `utils/` — helper functions

This project uses:

- React 19
- Vite as the dev server / build tool
- Tailwind CSS for utility-first styling
- ESLint for linting and code quality

## Project contract (short)

- Inputs: user interactions through UI and simple local state/hooks
- Outputs: UI updates and localStorage persistence for tasks
- Error modes: missing localStorage, invalid user input — UI validates where needed

Edge cases covered

- Empty lists (UI displays a helpful placeholder) 
- Duplicate tasks (UI allows duplicates but can be prevented in logic)
- localStorage unavailable (app falls back to in-memory state until reload)

## Development tips

- Use the React DevTools for inspecting component tree and hooks.
- Tailwind classes live in component JSX; use `index.css` and `App.css` for global styles and small overrides.
- ESLint is configured; run `npm run lint` and fix issues before commits.

## Contributing

This repo is used for learning, but contributions are welcome:

1. Fork the repo and create a new branch for your feature/fix.
2. Run the app and add/modify code.
3. Keep changes focused and add comments where helpful.

Open an issue if you want to propose a larger change.

## Potential improvements / next steps

- Add unit tests (Jest + React Testing Library) and simple CI (GitHub Actions).
- Add type safety with TypeScript and stronger ESLint type-aware rules.
- Add Storybook for component-driven development.

## License & attribution

This repository is an educational project derived from a Vite + React starter. Check the `package.json` and individual files' headers for licensing. Use freely for learning and teaching.

---

If you want, I can also:

- add a short Getting Started guide tailored to this assignment's exercises in `Week3-Assignment.md`
- add a simple GitHub Actions workflow to run linting on PRs

Tell me which follow-up you'd like and I'll implement it.
