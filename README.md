<div align="center">

  <img src="https://github.com/adonisjs/.github/blob/main/assets/banner.png?raw=true" alt="AdonisJS Starter Kits" width="100%">

  <h1>AdonisJS Starter Kits</h1>

  <p>
    <strong>Official starter kits for building production-ready applications with AdonisJS.</strong>
  </p>

  <p>
    Choose the right foundation for your next project based on your preferred architecture.
  </p>

  <br>

<a href="#-available-starter-kits">Starter Kits</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-quick-start">Quick Start</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://adonisjs.com">Documentation</a>

  <br>
  <br>

</div>

---

## 📦 Available Starter Kits

This repository contains the official AdonisJS starter kits, each tailored for different architectures and use cases.

| Starter Kit | Description | Best For |
|-------------|-------------|----------|
| [**API**](./api) | Standalone type-safe REST API with dual authentication (tokens & sessions) | Backend-only services, mobile apps, third-party integrations |
| [**API Monorepo**](./api-monorepo) | API backend + dedicated frontend workspace in a monorepo | Full-stack teams that want backend and frontend in the same repository |
| [**Hypermedia**](./hypermedia) | Server-rendered applications with Edge.js templates and Alpine.js | Traditional web apps, admin panels, content sites |
| [**Inertia React**](./inertia-react) | Single-page applications with React and Inertia.js | Modern SPAs with React ecosystem |
| [**Inertia Vue**](./inertia-vue) | Single-page applications with Vue and Inertia.js | Modern SPAs with Vue ecosystem |

---

## 🚀 Quick Start

### API Starter Kit

Build a standalone, type-safe REST API with dual authentication (API tokens and sessions).

```bash
npm init adonisjs@latest -- -K=api
```

**Includes:** Tuyau (type-safe API calls), Dual authentication (API tokens + sessions), Lucid ORM, RESTful structure

[Learn more about API →](./api)

---

### API Monorepo Starter Kit

Build a full-stack monorepo with an AdonisJS API backend and a dedicated frontend workspace.

```bash
npm init adonisjs@latest -- -K=api-monorepo
```

**Includes:** API backend workspace, frontend workspace scaffold, Turborepo orchestration, shared type-safe API integration with Tuyau

[Learn more about API Monorepo →](./api-monorepo)

---

### Hypermedia Starter Kit

Build server-rendered applications with Edge.js templating and progressive enhancement using Alpine.js.

```bash
npm init adonisjs@latest -- -K=hypermedia
```

**Includes:** Edge.js templating, Alpine.js, Custom CSS design system, Session authentication

[Learn more about Hypermedia →](./hypermedia)

---

### Inertia React Starter Kit

Build modern single-page applications with React while keeping the simplicity of server-side routing.

```bash
npm init adonisjs@latest -- -K=react
```

**Includes:** React 19, Inertia.js, Tuyau (type-safe routing), Sonner (toast notifications)

[Learn more about Inertia React →](./inertia-react)

---

### Inertia Vue Starter Kit

Build modern single-page applications with Vue while keeping the simplicity of server-side routing.

```bash
npm init adonisjs@latest -- -K=vue
```

**Includes:** Vue 3, Inertia.js, Tuyau (type-safe routing), Vue Sonner (toast notifications)

[Learn more about Inertia Vue →](./inertia-vue)

---

## 🎯 Choosing a Starter Kit

### Choose API if you want:

- Build a backend API for any frontend framework (React, Vue, Svelte, Angular, etc.)
- Develop mobile apps or third-party integrations
- Type-safe API calls between frontend and backend with Tuyau
- Flexible authentication (API tokens for cross-origin, sessions for same-domain)
- Framework-agnostic API-first architecture

### Choose API Monorepo if you want:

- Keep your backend API and frontend app in the same repository
- Share types and API contracts across workspaces
- Run development, test, and build workflows from one monorepo toolchain
- Start with an API-first backend plus a dedicated frontend workspace

### Choose Hypermedia if you want:

- Fast initial page loads with server-side rendering
- SEO-friendly pages that work without JavaScript
- Progressive enhancement with minimal client-side JavaScript
- Traditional multi-page application architecture

### Choose Inertia React if you want:

- Rich client-side interactivity with React
- SPA-like navigation without the API complexity
- Access to the React ecosystem (hooks, libraries, components)
- End-to-end type safety with Tuyau

### Choose Inertia Vue if you want:

- Rich client-side interactivity with Vue
- SPA-like navigation without the API complexity
- Access to the Vue ecosystem (Composition API, libraries, components)
- End-to-end type safety with Tuyau

---

## 🔧 Common Features

All starter kits include:

- **Authentication System** - User signup, login, and session management
- **Database Integration** - Lucid ORM with migrations (SQLite, PostgreSQL, MySQL, MSSQL)
- **Form Validation** - VineJS with automatic error handling
- **Security** - CSRF protection, Shield middleware, secure sessions
- **TypeScript** - Full TypeScript support with strict mode
- **Testing** - Japa testing framework with browser testing support
- **Vite** - Lightning-fast HMR and optimized production builds

---

## 📚 Learn More

<table>
  <tr>
    <td>
      <a href="https://docs.adonisjs.com"><strong>📖 Documentation</strong></a>
      <br>
      <span>Complete guide to AdonisJS</span>
    </td>
    <td>
      <a href="https://lucid.adonisjs.com"><strong>💾 Lucid ORM</strong></a>
      <br>
      <span>Database queries and relationships</span>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://edgejs.dev"><strong>🎨 Edge.js</strong></a>
      <br>
      <span>Templating engine documentation</span>
    </td>
    <td>
      <a href="https://vinejs.dev"><strong>✅ VineJS</strong></a>
      <br>
      <span>Schema validation guide</span>
    </td>
  </tr>
</table>

---

## 🤝 Contributing

Found a bug or have a suggestion? [Open an issue](https://github.com/adonisjs/starter-kits/issues) or submit a pull request!

---

## 📄 License

All starter kits are open-sourced software licensed under the [MIT license](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by the AdonisJS team</sub>
</div>
