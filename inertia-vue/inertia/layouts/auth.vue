<script setup lang="ts">
import Logo from '~/components/logo.vue'
import FlashToasts from '~/components/flash_toasts.vue'
import ThemeToggle from '~/components/theme_toggle.vue'
</script>

<template>
  <div class="auth">
    <div class="auth__form-col">
      <Logo :size="28" />
      <div class="auth__form-wrap">
        <slot />
      </div>
      <div :style="{ height: '20px' }" />
    </div>

    <aside class="auth__aside">
      <div class="auth__aside-top">
        <ThemeToggle />
      </div>

      <p class="auth__quote">Auth, kept intentionally minimal so you can build it your way.</p>

      <div>
        <div class="pitch__t">Looking for production-ready auth?</div>
        <p class="pitch__p">
          Check out Feature packs, production-ready full-stack components from the creator of
          AdonisJS.
        </p>
        <a
          class="il pitch__a"
          href="https://plus.adonisjs.com/feature-packs"
          target="_blank"
          rel="noreferrer"
        >
          Explore Feature packs →
        </a>
      </div>
    </aside>
  </div>
  <FlashToasts />
</template>
