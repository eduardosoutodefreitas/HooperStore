import { cache } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import Category from '../types/Category.types'

import { db } from '@/config/firebase.config'
const getCategories = cache(async () => {
  const categoriesFromFirestore: Category[] = []
  try {
    const q = collection(db, 'categories')
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc: { data: () => any }) => {
      categoriesFromFirestore.push(doc.data() as any)
    })
  } catch (error) {
    console.log(error)
  }

  return categoriesFromFirestore
})

export default getCategories
