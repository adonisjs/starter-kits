<script setup lang="ts">
import { ref } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { Moon, Sun } from 'lucide-vue-next'

const COOKIE = 'app_theme'
const ONE_YEAR = 60 * 60 * 24 * 365

const page = usePage()
const theme = ref<'light' | 'dark'>(page.props.preferences?.theme ?? 'light')

function toggle() {
  const next = theme.value === 'dark' ? 'light' : 'dark'
  theme.value = next
  document.documentElement.setAttribute('data-theme', next)
  document.cookie = `${COOKIE}=${next}; path=/; max-age=${ONE_YEAR}; samesite=lax`
}
</script>

<template>
  <button
    type="button"
    class="iconbtn"
    :aria-label="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    :title="theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'"
    @click="toggle"
  >
    <Sun
      :size="16"
      class="themetoggle__icon"
      :class="{ 'themetoggle__icon--on': theme === 'dark' }"
    />
    <Moon
      :size="16"
      class="themetoggle__icon"
      :class="{ 'themetoggle__icon--on': theme !== 'dark' }"
    />
  </button>
</template>
