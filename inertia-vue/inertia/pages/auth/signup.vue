<script setup lang="ts">
import AuthLayout from '~/layouts/auth.vue'
import { Form, Link } from '@adonisjs/inertia/vue'
</script>

<template>
  <AuthLayout>
    <h1 class="auth__title">Create your account</h1>
    <p class="auth__sub">Start building with the starter kit.</p>

    <Form v-slot="{ processing, errors }" route="new_account.store">
      <div class="auth__form">
        <div class="field">
          <label class="field__label" for="fullName">Full name</label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            class="field__input"
            autocomplete="name"
            placeholder="Ada Lovelace"
            :aria-invalid="errors.fullName ? 'true' : 'false'"
          />
          <span v-if="errors.fullName" class="field__error">{{ errors.fullName }}</span>
        </div>

        <div class="field">
          <label class="field__label" for="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            class="field__input"
            autocomplete="email"
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
            autocomplete="new-password"
            placeholder="••••••••"
            :aria-invalid="errors.password ? 'true' : 'false'"
          />
          <span v-if="errors.password" class="field__error">{{ errors.password }}</span>
        </div>

        <div class="field">
          <label class="field__label" for="passwordConfirmation">Confirm password</label>
          <input
            id="passwordConfirmation"
            name="passwordConfirmation"
            type="password"
            class="field__input"
            autocomplete="new-password"
            placeholder="••••••••"
            :aria-invalid="errors.passwordConfirmation ? 'true' : 'false'"
          />
          <span v-if="errors.passwordConfirmation" class="field__error">
            {{ errors.passwordConfirmation }}
          </span>
        </div>

        <button
          type="submit"
          class="btn btn--primary btn--block"
          :disabled="processing"
          :style="{ marginTop: '4px' }"
        >
          {{ processing ? 'One moment…' : 'Create account' }}
        </button>
      </div>
    </Form>

    <p class="auth__foot">
      Already have an account?
      <Link route="session.create" class="il">Sign in</Link>
    </p>
  </AuthLayout>
</template>
