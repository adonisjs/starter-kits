/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import { middleware } from '#start/kernel'
import { controllers } from '#generated/controllers'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')

router
  .group(() => {
    router
      .group(() => {
        router.get('signup', [controllers.Auth, 'registerPage']).as('register_page')
        router.post('signup', [controllers.Auth, 'register']).as('register')

        router.get('login', [controllers.Auth, 'loginPage']).as('login_page')
        router.post('login', [controllers.Auth, 'login']).as('login')
      })
      .use(middleware.guest())

    router
      .group(() => {
        router.post('logout', [controllers.Auth, 'logout']).as('logout')
      })
      .use(middleware.auth())
  })
  .as('auth')

router
  .group(() => {
    router.on('/dashboard').render('pages/dashboard').as('dashboard')
  })
  .use(middleware.auth())
