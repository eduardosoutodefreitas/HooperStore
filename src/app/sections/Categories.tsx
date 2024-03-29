import CategoryCard from '../components/CategoryCard'
import { SectionSubtitle, SectionTitle } from '../components/SpecialText'
import { useCategoryStore } from '../store/category'

export default function Categories() {
  const { categories } = useCategoryStore.getState().state

  return (
    <section className="my-16 px-12 smartphone:px-6">
      <SectionTitle title="Categorias" />
      <SectionSubtitle subtitle="Explore nossos produtos por categoria" />
      <div className="flex justify-center items-center gap-2 flex-wrap my-9">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </section>
  )
}
