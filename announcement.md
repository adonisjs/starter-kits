# A fresh coat of paint (and stronger foundations) for the AdonisJS starter kits

We have shipped a significant update to all five official starter kits — `hypermedia`, `inertia-react`, `inertia-vue`, `api`, and `api-monorepo`. The three web kits get a complete visual redesign, dark mode, type-safe forms, and tighter auth defaults. All five kits move to the latest versions of their dependencies.

## A new design, built to be re-themed

The web kits no longer ship a single bare-bones page. Every screen — landing, login, signup, errors, and a new dashboard — has been redesigned around a small, hand-written CSS design system. There is no CSS framework involved: just semantic design tokens (`--paper`, `--ink`, `--line`, `--btn`, and friends) defined in one place at the top of `app.css`.

## Dark mode support

All three web kits now support light and dark themes out of the box. The theme is a deliberate user choice (not just a media query): a toggle in the header flips it, a cookie remembers it, and the server renders the correct theme into the HTML — so there is no flash of the wrong theme on first paint, even with SSR.

## Purpose-built layouts instead of one generic shell

The old single shared layout is gone. In its place, each kit ships three layouts that mirror how real apps are structured:

- **Marketing** — public pages, with a header that adapts to the auth state.
- **Auth** — a focused two-column shell for login and signup.
- **Dashboard** — the authenticated area, with a top bar, navigation, and logout.

In the Inertia kits, layouts are now attached per page rather than injected globally, so opting a page out of a layout — or adding a new one — is a one-line change.

There is also a new authenticated `/dashboard` route in every web kit. It is intentionally an empty state: after login or signup you land somewhere real, with a pointer to the exact file to start building in.

## Fully typed forms

The Inertia kits now run on `@adonisjs/inertia@next` together with Inertia v3. The headline feature: the `Form` component understands your routes end to end. Point it at a route (`<Form route="session.store">`), and the form's `errors` object is **typed from that route's Vine validator** — `errors.email` autocompletes, and a typo in a field name is a compile error, in both React and Vue.

## Better auth defaults

- **Login input is now validated.** The session controller runs a `loginValidator` before checking credentials, so users get proper field-level error messages instead of a generic failure.
- **Password confirmation has its own field.** The signup validator declares `passwordConfirmation` explicitly (`sameAs('password')`), so confirmation mismatches show up on the confirmation field — where users expect them.
- Auth pages picked up the small things that matter: correct `autocomplete` attributes, `aria-invalid` states, pending states on submit buttons.

## Icons, toasts, and polish

The kits now use [Lucide](https://lucide.dev) icons throughout — via `lucide-react` and `lucide-vue-next` in the Inertia kits, and via `edge-iconify` with the `@svg('lucide:…')` tag in the hypermedia kit. Flash messages render through fully custom-styled toasts that match the design system in both themes, and the error pages (404/500) are now designed pages rather than placeholder headings.

## Latest everything

All five kits — including the API kits, which are otherwise unchanged — now target the latest ecosystem versions: Vite 8, Inertia 3, ESLint 10.8, better-sqlite3 13, React 19.2 / Vue 3.5.40, and the `@next` releases of `@adonisjs/vite` and `@adonisjs/inertia`. TypeScript stays on v6 for now.

## Upgrading an existing app?

The starter kits are templates, so there is nothing to upgrade automatically — but if you want to bring these changes into an existing app, two things are worth knowing when you move to the `@next` packages:

1. In `vite.config.ts`, the `@adonisjs/vite` plugin option is now `entryPoints` (previously `entrypoints`).
2. The `@adonisjs/inertia/vite` plugin is gone — you can remove it from your Vite config. SSR entry points are now declared through the `serverEntryPoints` option of the AdonisJS Vite plugin.

The fastest way to see everything above is to spin up a fresh kit:

```sh
npm init adonisjs@latest -- --kit=web
```
