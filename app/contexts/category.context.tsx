'use client'
import { db } from '@/app/config/firebase.config'
import Category from '@/app/types/Category.types'
import { collection, getDocs } from 'firebase/firestore'
import { FunctionComponent, ReactNode, createContext, useState } from 'react'

interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
}
interface CategoryContextProviderProps {
  children: ReactNode
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve()
})

const CategoryContextProvider: FunctionComponent<
  CategoryContextProviderProps
> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const q = collection(db, 'categories')
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc: { data: () => any }) => {
        categoriesFromFirestore.push(doc.data() as any)
      })
      setCategories(categoriesFromFirestore)
      console.log(categoriesFromFirestore)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <CategoryContext.Provider value={{ categories, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
