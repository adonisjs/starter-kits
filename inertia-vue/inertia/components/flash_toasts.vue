<script setup lang="ts">
import { watch } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { toast, Toaster } from 'vue-sonner'
import type { Data } from '@generated/data'
import { CircleAlert, CircleCheck } from 'lucide-vue-next'

const page = usePage<Data.SharedProps>()

watch(
  () => page.url,
  () => toast.dismiss()
)

watch(
  () => page.props.flash,
  (flash) => {
    if (flash?.error) toast.error(flash.error, { id: 'flash' })
    if (flash?.success) toast.success(flash.success, { id: 'flash' })
  },
  { immediate: true }
)
</script>

<template>
  <Toaster position="top-center" :toast-options="{ unstyled: true }">
    <template #success-icon>
      <CircleCheck :size="18" :stroke-width="1.8" />
    </template>
    <template #error-icon>
      <CircleAlert :size="18" :stroke-width="1.8" />
    </template>
  </Toaster>
</template>
