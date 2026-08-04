<script setup lang="ts">
import { LayoutGrid } from 'lucide-vue-next'
import DashboardLayout from '~/layouts/dashboard.vue'
</script>

<template>
  <DashboardLayout>
    <div class="empty">
      <div class="empty__mark">
        <LayoutGrid :size="22" />
      </div>
      <h1>Your dashboard is ready</h1>
      <p>
        It's empty on purpose. A clean starting point with nothing to undo. Add your first route and
        component to begin.
      </p>
      <p class="mono" :style="{ fontSize: '12.5px', color: 'var(--subtle)', marginTop: '4px' }">
        Start in <span class="kbd">inertia/pages/dashboard.vue</span>
      </p>
    </div>
  </DashboardLayout>
</template>
