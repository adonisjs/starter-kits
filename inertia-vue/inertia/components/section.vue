<script setup lang="ts">
/**
 * A group of content within a page, such as a group of form fields, with
 * an optional title and description. Stack several sections and they are
 * separated by a divider.
 */
defineProps<{ title?: string; description?: string }>()
</script>

<template>
  <section class="section">
    <header v-if="title || description" class="section__header">
      <h2 v-if="title" class="section__title">{{ title }}</h2>
      <p v-if="description" class="section__description">{{ description }}</p>
    </header>
    <div class="section__body">
      <slot />
    </div>
  </section>
</template>
