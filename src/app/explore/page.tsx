import ProductCard from '../components/ProductCard'
import { SectionTitle } from '../components/SpecialText'
import Cart from '../components/Cart'
import getCategories from '../utils/getCategories'
export default async function Explore() {
  const categories = await getCategories()

  return (
    <main className="p-12 smartphone:px-6">
      {categories.map((category) => (
        <>
          <SectionTitle title={category.displayName} />
          <div className="flex flex-wrap items-center justify-center gap-5 mt-6 mb-16 pl-2">
            {category.products.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      ))}
      <Cart />
    </main>
  )
}
