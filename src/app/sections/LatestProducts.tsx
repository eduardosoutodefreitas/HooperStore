import { SectionTitle, SectionSubtitle } from '../components/SpecialText'
import { useCategoryStore } from '../store/category'
import ProductsSlider from '../components/ProductsSlider'

const LatestProducts = () => {
  const { categories } = useCategoryStore.getState().state
  const slideProducts = categories.flatMap((category) =>
    category.products.slice(0, 2)
  )

  return (
    <section className="my-16 px-12">
      <SectionTitle title="Novidades" />
      <SectionSubtitle subtitle="Nossos produtos mais recentes" />

      <div className="flex items-center justify-center">
        <ProductsSlider slideProducts={slideProducts} />
      </div>
    </section>
  )
}

export default LatestProducts
