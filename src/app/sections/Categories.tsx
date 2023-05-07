import CategoryCard from '../components/CategoryCard'
import { SectionSubtitle, SectionTitle } from '../components/SpecialText'
import { useCategoryStore } from '../store/category'

export default function Categories() {
  const {categories} = useCategoryStore.getState().state

  return (
    <section className="my-10 mt-16 px-12">
      <SectionTitle title="Categorias" />
      <SectionSubtitle subtitle="Explore nossos produtos por categoria" />
      <div className="flex justify-center items-center gap-x-2 px-4">
        {categories.map((category) => (
          <CategoryCard category={category} key={category.id} />
        ))}
      </div>
    </section>
  )
}