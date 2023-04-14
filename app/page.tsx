'use client'
import { collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from './config/firebase.config'
import Banner from './sections/Banner'
import Categories from './sections/Categories'
import Category from './types/Category.types'
export default function Home() {
  const [categories, setCategories] = useState<Category[]>([])
  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const q = collection(db, 'categories')
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data() as any)
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  console.log(categories)
  return (
    <main className="px-12 py-7">
      <Banner />
      <Categories />
    </main>
  )
}
