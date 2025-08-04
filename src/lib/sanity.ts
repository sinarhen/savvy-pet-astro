import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
  projectId: 'b8fb5p5j',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03'
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export { client as sanityClient }