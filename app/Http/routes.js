'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')
const apiPrefix = '/api'

Route.on('/').render('welcome')

Route.group('unauthenticated', () => {
  /**
   * Sessions
   */
  Route.post('oauth/login', 'AuthController.login')
})
.prefix(apiPrefix)

Route.group('auth', () => {
  /**
   * Users
   */
  Route.get('users', 'UserController.index')
})
.middleware(['auth:redisjwt'])
.prefix(apiPrefix)
