'use client'
import { useContext } from 'react'
import CategoryCard from '../components/CategoryCard'
import { SectionSubtitle, SectionTitle } from '../components/SpecialText'
import Category from '../types/Category.types'
import { CategoryContext } from '../contexts/category.contexts'

interface CategoriesSectionProps{
  categories:Category[]
}
export default function Categories({categories}:CategoriesSectionProps) {
  const {setCategoriesData} = useContext(CategoryContext)
  setCategoriesData(categories)
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