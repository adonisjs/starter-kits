<div align="center">

  <h1>API Monorepo Starter Kit</h1>

  <p>
    <strong>A dedicated AdonisJS monorepo starter with an API backend and a frontend workspace.</strong>
  </p>

</div>

---

## ✨ What's in the Box

- **API backend workspace** in `apps/backend` (AdonisJS + authentication + Tuyau)
- **Frontend workspace** in `apps/frontend` (intentionally empty, bring your own framework)
- **Monorepo tooling** with Turborepo and workspaces for coordinated scripts

---

## 🚀 Quick Start

```bash
npm init adonisjs@latest -- -K=api-monorepo
```

Then from your generated project:

```bash
# Install dependencies
npm install

# Run all workspace development scripts
npm run dev
```

---

## 📁 Workspaces

- [Backend workspace docs](./apps/backend/README.md)
- [Frontend workspace docs](./apps/frontend/README.md)
