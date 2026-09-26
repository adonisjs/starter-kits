<script setup lang="ts">
/**
 * The frame for an app page: sets the document title and renders the page
 * heading, an optional description and optional actions (buttons, links)
 * passed through the `actions` slot. Pass `hide-title` to only set the
 * document title.
 */
import { Head } from '@inertiajs/vue3'

withDefaults(defineProps<{ title: string; hideTitle?: boolean; description?: string }>(), {
  hideTitle: false,
  description: undefined,
})
</script>

<template>
  <div class="page">
    <Head :title="title" />
    <header v-if="!hideTitle || description || $slots.actions" class="page__header">
      <div>
        <h1 v-if="!hideTitle" class="page__title">{{ title }}</h1>
        <p v-if="description" class="page__description">{{ description }}</p>
      </div>
      <div v-if="$slots.actions" class="page__actions">
        <slot name="actions" />
      </div>
    </header>
    <slot />
  </div>
</template>
