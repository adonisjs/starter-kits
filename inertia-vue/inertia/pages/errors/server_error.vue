<script setup lang="ts">
import MarketingLayout from '~/layouts/marketing.vue'
</script>

<template>
  <MarketingLayout>
    <div class="home">
      <article class="prose-card">
        <div class="pc-top">
          <span class="pc-status mono tag" :style="{ color: '#c0392b' }">
            <span class="dot" /> 500
          </span>
        </div>
        <div class="pc-lead">Something broke.</div>
        <p class="pc-para">
          Try again in a moment. If the problem persists, check the server logs for the underlying
          exception.
        </p>
      </article>
    </div>
  </MarketingLayout>
</template>
