<script setup lang="ts">
import { House, LogOut } from '@lucide/vue'
import { Form } from '@adonisjs/inertia/vue'
import Logo from '~/components/logo.vue'
import FlashToasts from '~/components/flash_toasts.vue'
import ThemeToggle from '~/components/theme_toggle.vue'
import NavLink from '~/components/nav_link.vue'
</script>

<template>
  <header class="header header--bar">
    <div class="header__inner">
      <Logo :size="28" />
      <div class="header__right">
        <ThemeToggle />
        <Form route="session.destroy">
          <button type="submit" class="btn btn--secondary btn--sm">
            <LogOut :size="15" /> Log out
          </button>
        </Form>
      </div>
    </div>
  </header>

  <nav class="subnav">
    <div class="subnav__inner">
      <!--
        Top-level app navigation. Add a NavLink here for every new area of
        your app. It marks itself active on the current page.
      -->
      <NavLink route="dashboard" class="subnav__item">
        <House :size="14" />
        Dashboard
      </NavLink>
    </div>
  </nav>

  <div class="app-main">
    <slot />
  </div>
  <FlashToasts />
</template>
