import { SectionSubtitle, SectionTitle } from '../components/SpecialText'

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import Category from '../types/Category.types'
import CategoryCard from '../components/CategoryCard'
async function getCategories() {
  const categoriesFromFirestore: Category[] = []
  try {
    const q = collection(db, 'categories')
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc: { data: () => any }) => {
      categoriesFromFirestore.push(doc.data() as any)
    })
    console.log(categoriesFromFirestore)
  } catch (error) {
    console.log(error)
  }

  return categoriesFromFirestore
}

export default async function Categories() {
  const categories = await getCategories()
  return (
    <section className="my-10 mt-16 ">
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
