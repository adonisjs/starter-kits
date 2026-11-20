<script setup lang="ts">
import MarketingLayout from '~/layouts/marketing.vue'

defineOptions({ layout: MarketingLayout })
</script>

<template>
  <div class="home">
    <article class="prose-card">
      <div class="pc-top">
        <span class="pc-status mono tag" :style="{ color: '#c0392b' }">
          <span class="dot" /> 500
        </span>
      </div>
      <div class="pc-lead">
        <span>Something broke.</span>
        <em>The server hit an unexpected error.</em>
      </div>
      <p class="pc-para">
        Try again in a moment. If the problem persists, check the server logs for the underlying
        exception.
      </p>
    </article>
  </div>
</template>
