import 'isomorphic-fetch'

export default function (req, reply) {
  const url = 'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120'
  return fetch(url, { method: 'GET' })
    .then((res) => {
      if (!res.ok) throw Error(res.statusText)
      return res.json()
    })
    .then((response) => {
      return reply(response)
    })
    .catch((err) => {
      return reply(new Error(err))
    })
}
