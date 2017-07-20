import path from 'path'
import serverSideRenderer from './handlers/server-side-renderer'
import categoryHandler from './handlers/category-handler'
import producthandler from './handlers/product-handler'

export default [
  {
    method: 'GET',
    path: '/api/categories',
    handler: categoryHandler
  },
  {
    method: 'GET',
    path: '/api/products',
    handler: producthandler
  },
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: (req, reply) => {
      reply.file(path.resolve(__dirname, '../../public/', req.params.param))
    }
  },
  {
    method: 'GET',
    path: '/{param*}',
    handler: serverSideRenderer
  }
]
