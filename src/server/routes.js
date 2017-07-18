import serverSideRenderer from './handlers/server-side-renderer'
import categoryHandler from './handlers/categoryHandler'

export default [
  {
    method: 'GET',
    path: '/api/categories',
    handler: categoryHandler
  },
  {
    method: 'GET',
    path: '/',
    handler: serverSideRenderer
  }

]
