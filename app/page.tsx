'use client'

import { useContext, useEffect } from 'react'
import { CategoryContext } from './contexts/category.context'
import Banner from './sections/Banner'
import Categories from './sections/Categories'
import Services from './sections/Services'

export default function Home() {
  const { fetchCategories } = useContext(CategoryContext)
  useEffect(() => {
    fetchCategories()
  }, [])
  return (
    <main className="px-12 py-7">
      <Banner />
      <Categories />
      <Services />
    </main>
  )
}
