<script setup lang="ts">
import { watch } from 'vue'
import { usePage } from '@inertiajs/vue3'
import { toast, Toaster } from 'vue-sonner'
import type { Data } from '@generated/data'
import { Link, Form } from '@adonisjs/inertia/vue'

const page = usePage<Data.SharedProps>()

watch(
  () => page.url,
  () => toast.dismiss()
)

watch(
  () => page.props.flash.error,
  (error) => {
    if (error) toast.error(error)
  },
  { immediate: true }
)
</script>

<template>
  <header>
    <div>
      <div>
        <Link route="home">
          <svg
            width="66"
            height="24"
            viewBox="0 0 105 38"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0h7.5v15H0ZM7.5 15h7.5v15H7.5ZM15 30h7.5v7.5H15ZM22.5 15h7.5v15H22.5ZM30 0h7.5v15H30ZM45 0h7.5v30h15v-30h7.5v37.5h-30v-37.5ZM82.5 37.5V0H105v7.5H90V15h15v7.5H90V30h15v7.5H82.5Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
      <div>
        <nav>
          <template v-if="page.props.user">
            <span>{{ page.props.user.initials }}</span>
            <Form route="session.destroy">
              <button type="submit">Logout</button>
            </Form>
          </template>
          <template v-else>
            <Link route="new_account.create">Signup</Link>
            <Link route="session.create">Login</Link>
          </template>
        </nav>
      </div>
    </div>
  </header>

  <main>
    <slot />
  </main>

  <Toaster position="top-center" rich-colors />
</template>
