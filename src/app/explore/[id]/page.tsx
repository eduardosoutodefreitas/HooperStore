import { SectionTitle } from '@/app/components/SpecialText'
import ProductCard from '@/app/components/ProductCard'
import Cart from '@/app/components/Cart'
import getCategories from '@/app/utils/getCategories'
import filterCategoryById from '@/app/utils/filterCategory'
interface CategoryPageProps {
  params: { id: string }
}

export default async function Page({ params }: CategoryPageProps) {
  const categories = await getCategories()
  const category = await filterCategoryById(categories, params.id)

  return (
    <div className="p-12 smartphone:px-6">
      <SectionTitle title={category?.displayName} />
      <div className="flex flex-wrap items-center justify-center gap-5 mt-6 mb-16 pl-2">
        {category?.products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <Cart />
    </div>
  )
}
