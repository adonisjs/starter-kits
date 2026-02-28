# Frontend Workspace

This is an **empty frontend starter** for the AdonisJS API Monorepo Starter Kit. You can set up any frontend application to consume the type-safe API from the backend.

## 🎯 Purpose

This workspace is intentionally left empty to allow you to:

- Choose the frontend of your choice.
- Set up your own development environment
- Consume type-safe APIs from the backend using Tuyau

---

## 🚀 Getting Started

### TanStack Start setup

TanStack Start is a full-stack React framework with powerful routing and data loading.

```bash
# From the frontend directory
cd apps/frontend

# Initialize TanStack Start
npm create @tanstack/start@latest
```

**Install Tuyau Client:**

```bash
npm install @tuyau/core
```

**Configure API Client:**

```typescript
// src/lib/api.ts
import { createTuyau } from '@tuyau/core/client'
import { registry } from '@api-starter-kit/backend/registry'

export const api = createTuyau({
  baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:3333',
  registry,
})
```

**Use in TanStack Router:**

```tsx
// src/routes/users.tsx
import { createFileRoute } from '@tanstack/react-router'
import { api } from '@/lib/api'
import type { Data } from '@api-starter-kit/backend/data'

export const Route = createFileRoute('/users')({
  loader: async () => {
    const { data } = await api.api.v1.users.$get()
    return { users: data }
  },
  component: UsersComponent,
})

function UsersComponent() {
  const { users } = Route.useLoaderData()

  return (
    <div>
      {users.map((user: Data.User) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

---

### Nuxt setup

Nuxt is a powerful Vue framework with server-side rendering and great DX.

```bash
# From the frontend directory
cd apps/frontend

# Initialize Nuxt
npx nuxi@latest init .
```

**Install Tuyau Client:**

```bash
npm install @tuyau/core
```

**Configure API Client:**

```typescript
// plugins/api.ts
import { createTuyau } from '@tuyau/core/client'
import { registry } from '@api-starter-kit/backend/registry'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const api = createTuyau({
    baseUrl: config.public.apiUrl || 'http://localhost:3333',
    registry,
  })

  return {
    provide: {
      api,
    },
  }
})
```

**Update nuxt.config.ts:**

```typescript
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'http://localhost:3333',
    },
  },
})
```

**Use in Nuxt Components:**

```vue
<script setup lang="ts">
import type { Data } from '../../backend/.adonisjs/client/data'

const { $api } = useNuxtApp()

const { data: users } = await useAsyncData('users', async () => {
  const response = await $api.api.v1.users.$get()
  return response.data
})
</script>

<template>
  <div>
    <div v-for="user in users" :key="user.id">
      {{ user.name }}
    </div>
  </div>
</template>
```

---

## 🔐 Authentication Strategies

The backend supports **two authentication guards**:

### 1. API Guard (Token-Based)

Use this for SPAs, mobile apps, or when frontend is on a different domain.

**TanStack Start Example:**

```typescript
// src/lib/auth.ts
import { api } from './api'

export async function login(email: string, password: string) {
  const { data } = await api.api.login.$post({ email, password })
  localStorage.setItem('token', data.token)
  return data.user
}

// Create authenticated API client
export function getAuthenticatedApi() {
  const token = localStorage.getItem('token')

  return createTuyau({
    baseUrl: 'http://localhost:3333',
    registry,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
}
```

**Nuxt Example:**

```typescript
// composables/useAuth.ts
export const useAuth = () => {
  const { $api } = useNuxtApp()
  const token = useCookie('token')

  const login = async (email: string, password: string) => {
    const { data } = await $api.api.login.$post({ email, password })
    token.value = data.token
    return data.user
  }

  const getAuthenticatedApi = () => {
    return createTuyau({
      baseUrl: useRuntimeConfig().public.apiUrl,
      registry,
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    })
  }

  return { login, getAuthenticatedApi }
}
```

### 2. Web Guard (Session-Based)

Use this when your frontend is on the **same domain** as the backend.

**Benefits:**

- No token management needed
- More secure (httpOnly cookies)
- Works seamlessly when frontend and backend share a domain

```typescript
// Login (sets session cookie automatically)
await api.web.login.$post({
  email: 'user@example.com',
  password: 'secret',
})

// No need to manage tokens - cookies are sent automatically
const user = await api.web.me.$get()
```

**TanStack Start with sessions:**

```tsx
// src/routes/login.tsx
import { createFileRoute } from '@tanstack/react-router'
import { api } from '@/lib/api'

export const Route = createFileRoute('/login')({
  component: LoginComponent,
})

function LoginComponent() {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement)

    await api.web.login.$post({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    })

    // Session cookie is automatically set
    // Redirect to protected route
    router.navigate({ to: '/dashboard' })
  }

  return <form onSubmit={handleLogin}>{/* form fields */}</form>
}
```

**Nuxt with sessions:**

```vue
<script setup lang="ts">
const { $api } = useNuxtApp()

const handleLogin = async () => {
  await $api.web.login.$post({
    email: email.value,
    password: password.value,
  })

  // Session cookie is automatically set
  navigateTo('/dashboard')
}
</script>
```

---

## 📦 Consuming Backend Types

### Route Types

All backend routes are fully typed:

```typescript
import type { registry } from '../../backend/.adonisjs/client/registry'

// Your IDE will autocomplete route names and methods
api.api.v1.users.$get()           // GET /api/v1/users
api.api.v1.users._id.$get({ id: 5 }) // GET /api/v1/users/5
api.api.v1.users.$post({ ... })    // POST /api/v1/users
```

### Data Types (Transformers)

Import data types from the backend:

```typescript
import type { Data } from '../../backend/.adonisjs/client/data'

// Use transformer types
const user: Data.User = {
  id: 1,
  email: 'user@example.com',
  name: 'John Doe',
}

// Access variants if defined
type UserWithProfile = Data.User.Variants['withProfile']
```

---

## 🌐 Environment Variables

**TanStack Start** (`.env`):

```bash
VITE_API_URL=http://localhost:3333
```

**Nuxt** (`.env`):

```bash
NUXT_PUBLIC_API_URL=http://localhost:3333
```

---

## 🔄 Development Workflow

1. **Start the backend:**

   ```bash
   # From the root of the monorepo
   npm run dev
   ```

2. **The backend will:**
   - Start the API server on `http://localhost:3333`
   - Generate Tuyau types in `.adonisjs/client/`
   - Watch for changes and regenerate types automatically

3. **Your frontend will:**
   - Have access to latest types
   - Get autocomplete and type safety
   - Know about all API endpoints

---

## 📖 Learn More

- [Tuyau Documentation](https://tuyau.dev) - Type-safe API clients
- [TanStack Start Documentation](https://tanstack.com/start) - TanStack Start framework
- [Nuxt Documentation](https://nuxt.com) - Nuxt framework
- [AdonisJS Documentation](https://docs.adonisjs.com) - Backend framework

---

**Happy coding! 🎉**
