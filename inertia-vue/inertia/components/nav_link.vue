<script lang="ts">
import { type Component } from 'vue'
import { urlFor } from '~/client'

export type NavRoute = Parameters<typeof urlFor>[0]

export type NavItem = {
  label: string
  route: NavRoute
  icon?: Component
}
</script>

<script setup lang="ts">
/**
 * A link that marks itself with `aria-current="page"` when the current URL
 * matches its route. By default nested URLs count as a match, so a
 * "Settings" link stays active on "/settings/security". Pass `exact` to
 * only match the route itself.
 */
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { Link } from '@adonisjs/inertia/vue'

const props = withDefaults(defineProps<{ route: NavRoute; exact?: boolean }>(), { exact: false })

const page = usePage()
const href = computed(() => urlFor(props.route))
const isActive = computed(() => {
  const path = page.url.split('?')[0]
  return props.exact
    ? path === href.value
    : path === href.value || path.startsWith(`${href.value}/`)
})
</script>

<template>
  <Link :href="href" :aria-current="isActive ? 'page' : undefined">
    <slot />
  </Link>
</template>
