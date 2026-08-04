<script setup lang="ts">
import { Form, Link } from '@adonisjs/inertia/vue'
import AuthLayout from '~/layouts/auth.vue'
</script>

<template>
  <AuthLayout>
    <h1 class="auth__title">Welcome back</h1>
    <p class="auth__sub">Sign in to continue building.</p>

    <Form v-slot="{ processing, errors }" route="session.store">
      <div class="auth__form">
        <div class="field">
          <label class="field__label" for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            class="field__input"
            autocomplete="username"
            placeholder="you@example.com"
            :aria-invalid="errors.email ? 'true' : 'false'"
          />
          <span v-if="errors.email" class="field__error">{{ errors.email }}</span>
        </div>

        <div class="field">
          <label class="field__label" for="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            class="field__input"
            autocomplete="current-password"
            placeholder="••••••••"
            :aria-invalid="errors.password ? 'true' : 'false'"
          />
          <span v-if="errors.password" class="field__error">{{ errors.password }}</span>
        </div>

        <button
          type="submit"
          class="btn btn--primary btn--block"
          :disabled="processing"
          :style="{ marginTop: '4px' }"
        >
          {{ processing ? 'One moment…' : 'Sign in' }}
        </button>
      </div>
    </Form>

    <p class="auth__foot">
      New here?
      <Link route="new_account.create" class="il">Create an account</Link>
    </p>
  </AuthLayout>
</template>
