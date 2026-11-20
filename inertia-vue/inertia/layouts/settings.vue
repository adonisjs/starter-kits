<script setup lang="ts">
import Page from '~/components/page.vue'

/**
 * Renders the settings heading, a sidebar of links and a card holding the
 * current page. Attach it with the app layout from each settings page:
 *
 * `defineOptions({ layout: [AppLayout, SettingsLayout] })`
 */
</script>

<template>
  <Page title="Settings" description="Manage your account settings and preferences.">
    <div class="sidebar-layout">
      <nav class="sidebar-layout__nav" aria-label="Settings">
        <!--
          The pages of the settings area. Register a route for each page and
          add a NavLink for it here, for example:

          <NavLink route="settings.profile" exact class="sidebar-layout__item">
            <User :size="16" />
            Profile
          </NavLink>
        -->
      </nav>
      <div class="sidebar-layout__content panel">
        <slot />
      </div>
    </div>
  </Page>
</template>
