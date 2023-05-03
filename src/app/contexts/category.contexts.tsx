'use client'
import Category from '@/app/types/Category.types'
import { db } from '@/config/firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import { FunctionComponent, ReactNode, createContext, useState } from 'react'

interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
  setCategoriesData: (categories:Category[])=> void
}
interface CategoryContextProviderProps {
  children: ReactNode
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve(),
  setCategoriesData: ()=> {},
})

const CategoryContextProvider: FunctionComponent<
  CategoryContextProviderProps
> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
// Get categories from firestore on client components
  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const q = collection(db, 'categories')
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc: { data: () => any }) => {
        categoriesFromFirestore.push(doc.data() as any)
      })
      setCategories(categoriesFromFirestore)
      console.log('deu bom')
    } catch (error) {
      console.log(error)
    }
  }
  // Get categories from firestore on server components
  
  const setCategoriesData = (categories:Category[]) => {
setCategories(categories)
  }

  return (
    <CategoryContext.Provider value={{ categories, fetchCategories, setCategoriesData }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider