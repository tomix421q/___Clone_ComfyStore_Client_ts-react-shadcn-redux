import { FeaturedProducts, Hero } from '@/components'
import { type ProductsResponse, customFetch } from '@/utils'
import { type LoaderFunction } from 'react-router-dom'

const url = '/products?featured=true'

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url)
  return { ...response.data }
}

export default function Landing() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
    </div>
  )
}
