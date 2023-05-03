
import { collection, getDocs } from 'firebase/firestore'
import Category from '../types/Category.types'

import { db } from '@/config/firebase.config'
async function getCategories() {
  const categoriesFromFirestore: Category[] = []
  try {
    const q = collection(db, 'categories')
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc: { data: () => any }) => {
      categoriesFromFirestore.push(doc.data() as any)
    })
    console.log('deu bom')
  } catch (error) {
    console.log(error)
  }

  return categoriesFromFirestore
}

export default getCategories