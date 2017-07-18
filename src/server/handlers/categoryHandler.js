import 'isomorphic-fetch'

export default function (req, reply) {
  return fetch('https://api.gousto.co.uk/products/v2.0/categories', { method: 'GET' })
  .then((res) => {
    if (!res.ok) throw Error(res.statusText)
    return res.json()
  })
  .then((response) => reply(response))
}
