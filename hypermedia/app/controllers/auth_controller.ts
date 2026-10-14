import User from '#models/user'
import { loginValidator, signupValidator } from '#validators/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class AuthController {
  async registerPage({ view }: HttpContext) {
    return view.render('pages/auth/signup')
  }

  async register({ request, response, auth }: HttpContext) {
    const { fullName, email, password } = await request.validateUsing(signupValidator)
    const user = await User.create({ fullName, email, password })

    await auth.use('web').login(user)
    response.redirect().toRoute('dashboard')
  }

  async loginPage({ view }: HttpContext) {
    return view.render('pages/auth/login')
  }

  async login({ request, auth, response }: HttpContext) {
    const { email, password } = await request.validateUsing(loginValidator)
    const user = await User.verifyCredentials(email, password)

    await auth.use('web').login(user)
    response.redirect().toRoute('dashboard')
  }

  async logout({ auth, response }: HttpContext) {
    await auth.use('web').logout()
    response.redirect().toRoute('auth.login_page')
  }
}
