import Category from '@/app/types/Category.types'
import { db } from '@/config/firebase.config'
import { collection, getDocs } from 'firebase/firestore'
import { create } from 'zustand'
interface ActionsProps {
  fetchCategory: () => Promise<Category[]>
}
interface StoreProps {
  state: {
    categories: Category[]
    loading: boolean
  }
  actions: ActionsProps
}

export const useCategoryStore = create<StoreProps>((set) => ({
  state: {
    categories: [],
    loading: false
  },
  actions: {
    fetchCategory: async () => {
      const categoriesFromFirestore: Category[] = []
      try {
        set(() => ({
          state: { categories: [], loading: true }
        }))
        const q = collection(db, 'categories')
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc: { data: () => any }) => {
          categoriesFromFirestore.push(doc.data() as any)
        })
        set(() => ({
          state: { categories: categoriesFromFirestore, loading: false }
        }))
      } catch (error) {
        console.log(error)
      }

      return categoriesFromFirestore
    }
  }
}))
