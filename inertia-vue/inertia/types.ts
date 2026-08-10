import { type Data } from '@generated/data'

/**
 * Bridges the server side types into the Inertia client. "usePage().props" is
 * typed from the Inertia middleware share method and "usePage().flash" from
 * its flash method.
 */
declare module '@inertiajs/core' {
  interface InertiaConfig {
    sharedPageProps: Data.SharedProps
    flashDataType: Data.FlashMessages
  }
}
