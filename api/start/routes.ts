/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import router from '@adonisjs/core/services/router'
import { controllers } from '#generated/controllers'

router.get('/', () => {
  return { hello: 'world' }
})

router
  .group(() => {
    router
      .group(() => {
        router.post('login', [controllers.Auth, 'login']).as('login')
        router.post('register', [controllers.Auth, 'register']).as('register')

        router
          .group(() => {
            router.post('logout', [controllers.Auth, 'logout']).as('logout')
            router.get('user', [controllers.Auth, 'user']).as('user')
          })
          .use(middleware.auth())
      })
      .prefix('auth')
      .as('auth')
  })
  .prefix('/api/v1')
