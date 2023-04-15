import Product from './Product.types'

export default interface Category {
  id: string
  name: string
  displayName: string
  imgUrl: string
  product: Product[]
}
