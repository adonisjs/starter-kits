/* eslint-disable prettier/prettier */
import type { routes } from './index.ts'

export interface ApiDefinition {
  home: typeof routes['home']
  auth: {
    registerPage: typeof routes['auth.register_page']
    register: typeof routes['auth.register']
    loginPage: typeof routes['auth.login_page']
    login: typeof routes['auth.login']
    logout: typeof routes['auth.logout']
  }
  dashboard: typeof routes['dashboard']
}
