<script setup lang="ts">
import { House, LogOut } from 'lucide-vue-next'
import { Form } from '@adonisjs/inertia/vue'
import Logo from '~/components/logo.vue'
import FlashToasts from '~/components/flash_toasts.vue'
import ThemeToggle from '~/components/theme_toggle.vue'
import NavLink, { type NavItem } from '~/components/nav_link.vue'

/**
 * Top-level app navigation. Add an entry here for every new area of your
 * app, and it shows up in the navigation bar with its active state handled.
 */
const nav: NavItem[] = [{ label: 'Dashboard', route: 'dashboard', icon: House }]
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
      <NavLink v-for="item in nav" :key="item.label" :route="item.route" class="subnav__item">
        <component :is="item.icon" v-if="item.icon" :size="14" />
        {{ item.label }}
      </NavLink>
    </div>
  </nav>

  <div class="app-main">
    <slot />
  </div>
  <FlashToasts />
</template>
