import { WDS_PORT } from '../../shared/config'

const isProd = process.env.NODE_ENV === 'production'


export function getScripts() {
  const scripts = [
    'js/bundle.js'
  ]
  return scripts.map(() => {
    return `<script src="${isProd ? '/public/' : `http://localhost:${WDS_PORT}/public`}/js/bundle.js"></script>`
  })
}
