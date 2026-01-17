<div align="center">

  <!-- Add your cover image here -->
  <img src="https://github.com/adonisjs/.github/blob/next/docs/vue-inertia-adonisjs.png?raw=true" alt="AdonisJS Vue Inertia Starter Kit" width="100%">

  <h1>Vue Inertia Starter Kit</h1>

  <p>
    <strong>A batteries-included AdonisJS starter kit for building modern single-page applications with Vue.</strong>
  </p>

  <p>
    Built for developers who want the power of Vue with the simplicity of server-side routing and rendering.
  </p>

  <br>

<a href="#-whats-in-the-box">Features</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-quick-start">Quick Start</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="https://adonisjs.com">Documentation</a>

  <br>
  <br>

</div>

---

## ✨ What's in the Box

This starter kit is designed to help you build production-ready single-page applications with Vue and Inertia.js. It combines the modern DX of Vue with the simplicity of traditional server-side routing, giving you the best of both worlds.

### 🎯 Core Features

- **🔐 Authentication System** - Complete user signup, login, and session management out of the box
- **💚 Vue 3** - Latest Vue with Composition API and script setup
- **🔄 Inertia.js** - Build SPAs without the API complexity—server-side routing that feels like client-side
- **🎨 Custom Design System** - Beautiful, accessible components with modern CSS (OKLCH color system)
- **✅ Form Validation** - Powered by VineJS with automatic error handling
- **🔔 Toast Notifications** - Built-in toast system using Vue Sonner
- **🛡️ Security First** - CSRF protection, Shield middleware, and secure session handling
- **🔒 Type Safety** - End-to-end TypeScript with Tuyau for type-safe routing

### 🔧 Tech Stack

<table>
  <tr>
    <td><strong>Backend</strong></td>
    <td>
      <a href="https://adonisjs.com">AdonisJS 7.x</a> - Full-featured Node.js framework
    </td>
  </tr>
  <tr>
    <td><strong>Frontend</strong></td>
    <td>
      <a href="https://vuejs.org">Vue 3</a> - Progressive JavaScript framework with Composition API
    </td>
  </tr>
  <tr>
    <td><strong>Adapter</strong></td>
    <td>
      <a href="https://inertiajs.com">Inertia.js</a> - Build SPAs with server-side routing (no API needed)
    </td>
  </tr>
  <tr>
    <td><strong>Database</strong></td>
    <td>
      <a href="https://lucid.adonisjs.com">Lucid ORM</a> - SQL ORM with migrations (SQLite, PostgreSQL, MySQL, MSSQL)
    </td>
  </tr>
  <tr>
    <td><strong>Auth</strong></td>
    <td>
      Session-based authentication with secure cookie storage
    </td>
  </tr>
  <tr>
    <td><strong>Styling</strong></td>
    <td>
      Custom CSS with modern features (OKLCH colors, CSS variables)
    </td>
  </tr>
  <tr>
    <td><strong>Build</strong></td>
    <td>
      <a href="https://vitejs.dev">Vite</a> - Lightning-fast HMR and optimized builds
    </td>
  </tr>
  <tr>
    <td><strong>Validation</strong></td>
    <td>
      <a href="https://vinejs.dev">VineJS</a> - Type-safe schema validation
    </td>
  </tr>
  <tr>
    <td><strong>Type Safety</strong></td>
    <td>
      <a href="https://tuyau.dev">Tuyau</a> - End-to-end type safety for routes and API calls
    </td>
  </tr>
  <tr>
    <td><strong>UI Components</strong></td>
    <td>
      <a href="https://vue-sonner.vercel.app">Vue Sonner</a> - Toast notifications for Vue
    </td>
  </tr>
  <tr>
    <td><strong>Testing</strong></td>
    <td>
      <a href="https://japa.dev">Japa</a> - Delightful testing framework with browser testing support
    </td>
  </tr>
  <tr>
    <td><strong>TypeScript</strong></td>
    <td>
      Full TypeScript support with strict mode enabled
    </td>
  </tr>
</table>

---

## 🚀 Quick Start

### Create a New Project

```bash
npm init adonisjs@latest -- -K=inertia
```

During setup, you'll be asked to choose:

- **Frontend adapter**: Select `vue`
- **Database**: Choose your preferred database (SQLite, PostgreSQL, MySQL, MSSQL)
- **Auth guard**: Select `session` for cookie-based authentication
- **SSR**: Choose whether to enable server-side rendering (optional)

This command will:

- Clone this starter kit
- Install all dependencies
- Set up your `.env` file
- Generate your app encryption key
- Configure your database
- Configure Inertia with Vue
- Run migrations

### Start Developing

```bash
# Run the development server with hot reload
node ace serve --hmr

# Run tests
node ace test

# Type check both backend and frontend
npm run typecheck

# Lint your code
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

Your app will be running at `http://localhost:3333`

---

## 📚 Learn More

<table>
  <tr>
    <td>
      <a href="https://docs.adonisjs.com"><strong>📖 AdonisJS Docs</strong></a>
      <br>
      <span>Complete guide to AdonisJS</span>
    </td>
    <td>
      <a href="https://inertiajs.com"><strong>🔄 Inertia.js</strong></a>
      <br>
      <span>Learn about server-driven SPAs</span>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://vuejs.org"><strong>💚 Vue Docs</strong></a>
      <br>
      <span>Modern Vue with Composition API</span>
    </td>
    <td>
      <a href="https://tuyau.dev"><strong>🔒 Tuyau</strong></a>
      <br>
      <span>Type-safe routing and API calls</span>
    </td>
  </tr>
  <tr>
    <td>
      <a href="https://lucid.adonisjs.com"><strong>💾 Lucid ORM</strong></a>
      <br>
      <span>Database queries and relationships</span>
    </td>
    <td>
      <a href="https://vinejs.dev"><strong>✅ VineJS</strong></a>
      <br>
      <span>Schema validation guide</span>
    </td>
  </tr>
</table>

---

## 🎨 Philosophy

This starter kit embraces the **modern full-stack** approach to web development:

- **Server-Side Routing** - No API complexity, just controllers returning Inertia responses
- **Client-Side Experience** - Vue handles the UI with smooth SPA navigation
- **Type Safety Everywhere** - TypeScript across frontend and backend with Tuyau integration
- **Convention Over Configuration** - Sensible defaults, escape hatches when you need them
- **Developer Experience** - Hot reload, great error messages, instant feedback
- **Production Ready** - Security, validation, and testing built-in

### Why Inertia.js?

Traditional SPAs require building and maintaining a separate API. Inertia.js eliminates this complexity by letting your controllers return data directly to your Vue components. You get the smooth navigation of a SPA with the simplicity of traditional server-side routing.

---

## 🤝 Contributing

This starter kit is maintained by the AdonisJS team. Found a bug or have a suggestion? [Open an issue](https://github.com/adonisjs/inertia-starter-kit/issues) or submit a pull request!

---

## 📄 License

This starter kit is open-sourced software licensed under the [MIT license](LICENSE).

---

<div align="center">
  <sub>Built with ❤️ by the AdonisJS team</sub>
</div>
