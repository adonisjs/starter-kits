<script setup lang="ts">
import MarketingLayout from '~/layouts/marketing.vue'
</script>

<template>
  <MarketingLayout>
    <div class="home">
      <article class="prose-card">
        <div class="pc-top">
          <span class="pc-status mono tag" :style="{ color: 'var(--subtle)' }">
            <span class="dot" /> 404
          </span>
        </div>
        <div class="pc-lead">Not found.</div>
        <p class="pc-para">
          The page you tried to reach doesn't exist. Check the URL or head back home.
        </p>
      </article>
    </div>
  </MarketingLayout>
</template>
