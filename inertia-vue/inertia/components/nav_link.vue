<script setup lang="ts" generic="Route extends Parameters<typeof urlFor>[0]">
/**
 * A link that marks itself with `aria-current="page"` when the current URL
 * matches its route. By default nested URLs count as a match, so a
 * "Settings" link stays active on "/settings/security". Pass `exact` to
 * only match the route itself. It takes the props of a route `Link`, so
 * `params` is checked against the route.
 */
import { computed, useAttrs } from 'vue'
import { urlFor } from '~/client'
import { usePage } from '@inertiajs/vue3'
import { Link, type LinkRouteProps } from '@adonisjs/inertia/vue'

defineOptions({ inheritAttrs: false })

/**
 * The Vue compiler cannot read the Link props type, so only `route` and
 * `exact` are runtime props. The other Link props, such as `params`, arrive
 * as attributes, and type checking still covers them.
 */
const props = defineProps<
  { route: Route; exact?: boolean } & /* @vue-ignore */ Omit<LinkRouteProps<Route>, 'route'>
>()

const attrs = useAttrs()
const page = usePage()

/**
 * Inside this generic component TypeScript can't tie `params` to `route`,
 * so the call is cast. Each caller's props are still checked against its
 * route.
 */
const href = computed(() =>
  (urlFor as (route: string, params?: unknown) => string)(props.route, attrs.params)
)
const linkAttrs = computed(() => {
  const rest = { ...attrs }
  delete rest.params
  return rest
})
const isActive = computed(() => {
  const path = page.url.split('?')[0]
  return props.exact
    ? path === href.value
    : path === href.value || path.startsWith(`${href.value}/`)
})
</script>

<template>
  <Link v-bind="linkAttrs" :href="href" :aria-current="isActive ? 'page' : undefined">
    <slot />
  </Link>
</template>
