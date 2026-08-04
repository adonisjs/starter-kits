<script setup lang="ts">
import { House, LogOut } from 'lucide-vue-next'
import { Form, Link } from '@adonisjs/inertia/vue'
import Logo from '~/components/logo.vue'
import FlashToasts from '~/components/flash_toasts.vue'
import ThemeToggle from '~/components/theme_toggle.vue'
</script>

<template>
  <header class="dashbar">
    <Logo :size="28" />
    <div class="dashbar__right">
      <ThemeToggle />
      <Form route="session.destroy">
        <button type="submit" class="btn btn--secondary btn--sm">
          <LogOut :size="15" /> Log out
        </button>
      </Form>
    </div>
  </header>

  <nav class="subnav">
    <div class="subnav__inner">
      <Link route="dashboard" class="subnav__item subnav__item--active" aria-current="page">
        <House :size="14" />
        Dashboard
      </Link>
    </div>
  </nav>

  <div class="dash">
    <slot />
  </div>
  <FlashToasts />
</template>
