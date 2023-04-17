import { useContext } from 'react'
import { SectionSubtitle, SectionTitle } from '../components/SpecialText'

import { CategoryContext } from '../contexts/category.context'
import CategoryCard from '../components/CategoryCard'

export default function Categories() {
  const { categories } = useContext(CategoryContext)
  return (
    <section className="my-10 mt-16 ">
      <SectionTitle title="Categorias" />
      <SectionSubtitle subtitle="Explore nossos produtos por categoria" />
      <div className="flex justify-center items-center gap-x-2 px-4">
        {categories.map((category) => (
          <CategoryCard category={category} />
        ))}
      </div>
    </section>
  )
}
