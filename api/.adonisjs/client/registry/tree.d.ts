/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  auth: {
    login: typeof routes['auth.login']
    register: typeof routes['auth.register']
    logout: typeof routes['auth.logout']
    user: typeof routes['auth.user']
  }
}
