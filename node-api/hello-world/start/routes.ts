/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const ResourcesController = () => import('#controllers/resources_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/hello', async () => {
  return {
    hello: 'world2',
  }
})

router.get('/resources', [ResourcesController, 'index'])
