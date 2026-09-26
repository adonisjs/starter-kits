# A fresh coat of paint (and stronger foundations) for the AdonisJS starter kits

We have shipped a significant update to all five official starter kits — `hypermedia`, `inertia-react`, `inertia-vue`, `api`, and `api-monorepo`. The three web kits get a complete visual redesign, dark mode, type-safe forms, and tighter auth defaults. All five kits move to the latest versions of their dependencies.

## A new design, built to be re-themed

The web kits no longer ship a single bare-bones page. Every screen — landing, login, signup, errors, and a new dashboard — has been redesigned around a small, hand-written CSS design system. There is no CSS framework involved: just semantic design tokens (`--paper`, `--ink`, `--line`, `--btn`, and friends) defined in one place at the top of `app.css`.

## Dark mode support

All three web kits now support light and dark themes out of the box. The theme is a deliberate user choice (not just a media query): a toggle in the header flips it, a cookie remembers it, and the server renders the correct theme into the HTML — so there is no flash of the wrong theme on first paint, even with SSR.

## Purpose-built layouts instead of one generic shell

The old single shared layout is gone. In its place, each kit ships four layouts that mirror how real apps are structured:

- **Marketing** — public pages, with a floating header that adapts to the auth state.
- **Auth** — a focused two-column shell for login and signup.
- **App** — the authenticated area, with a top bar, navigation built from a list of links, and logout.
- **Settings** — a sidebar of links and a panel for the current page, ready for your own settings pages. It nests inside the app layout.

The marketing and app layouts share a single header component, rendered as a floating header or a full-width bar. In the hypermedia kit, layouts live under `resources/views/components/layouts` and are used as `@layouts.app(...)`.

In the Inertia kits, layouts are now attached per page rather than injected globally. A page declares its layouts as an array, so opting out of a layout, adding one, or nesting them is a one-line change:

```tsx
Dashboard.layout = [AppLayout]
Profile.layout = [AppLayout, SettingsLayout]
```

There is also a new authenticated `/dashboard` route in every web kit. It is intentionally an empty state: after login or signup you land somewhere real, with a pointer to the exact file to start building in.

## Building blocks for your own pages

The kits don't ship pages you would delete on day one. They ship the pieces you need to add your own:

- **Page** renders a page heading, an optional description, and actions.
- **Section** groups content under a title.
- **NavLink** marks the current route with `aria-current`, matching nested URLs by default.

Each kit's README walks through adding a new page and a new settings area with these components.

## Fully typed forms

The Inertia kits now run on `@adonisjs/inertia` v5 together with Inertia v3. The headline feature: the `Form` component understands your routes end to end. Point it at a route (`<Form route="session.store">`), and the form's `errors` object is **typed from that route's Vine validator** — `errors.email` autocompletes, and a typo in a field name is a compile error, in both React and Vue.

## Better auth defaults

- **Login input is now validated.** The session controller runs a `loginValidator` before checking credentials, so users get proper field-level error messages instead of a generic failure.
- **Password confirmation has its own field.** The signup validator declares `passwordConfirmation` explicitly (`sameAs('password')`), so confirmation mismatches show up on the confirmation field — where users expect them.
- Auth pages picked up the small things that matter: correct `autocomplete` attributes, `aria-invalid` states, pending states on submit buttons.

## Icons, toasts, and polish

The kits now use [Lucide](https://lucide.dev) icons throughout — via `lucide-react` and `lucide-vue-next` in the Inertia kits, and via `edge-iconify` with the `@svg('lucide:…')` tag in the hypermedia kit. Flash messages render through fully custom-styled toasts that match the design system in both themes. In the Inertia kits, they travel in the dedicated `flash` field of the page object (read with `usePage().flash`) instead of props, so they never reappear when navigating back. The error pages (404/500) are now designed pages rather than placeholder headings.

## Latest everything

All five kits — including the API kits, which are otherwise unchanged — now target the latest ecosystem versions: Vite 8.3, Inertia 3.7, ESLint 10.11, better-sqlite3 13, React 19.3 / Vue 3.5.43, `@adonisjs/vite` 6, and `@adonisjs/inertia` 5. TypeScript stays on v6 for now.

## Upgrading an existing app?

The starter kits are templates, so there is nothing to upgrade automatically — but if you want to bring these changes into an existing app, two things are worth knowing when you move to `@adonisjs/vite` 6 and `@adonisjs/inertia` 5:

1. In `vite.config.ts`, the `@adonisjs/vite` plugin option is now `entryPoints` (previously `entrypoints`).
2. The `@adonisjs/inertia/vite` plugin is gone — you can remove it from your Vite config. SSR entry points are now declared through the `serverEntryPoints` option of the AdonisJS Vite plugin.

The fastest way to see everything above is to spin up a fresh kit:

```sh
npm init adonisjs@latest -- --kit=web
```
