import Product from './Product.types'

export default interface Category {
  id: string
  name: string
  displayName: string
  imageUrl: string
  products: Product[]
}
