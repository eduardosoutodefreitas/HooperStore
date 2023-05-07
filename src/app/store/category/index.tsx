import Category from "@/app/types/Category.types"
import { db } from "@/config/firebase.config"
import { collection, getDocs } from "firebase/firestore"
import { create } from "zustand"
interface ActionsProps{
    fetchCategory: () => Promise<Category[]>
}
interface StoreProps{
    state:{
        categories: Category[]
    },
    actions: ActionsProps
}

export const useCategoryStore = create<StoreProps>((set) => ({
    state:{
        categories:[]
    },
    actions:{
        fetchCategory: async () => {
            const categoriesFromFirestore: Category[] = []
            try {
                const q = collection(db, 'categories')
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc: { data: () => any }) => {
                categoriesFromFirestore.push(doc.data() as any)
                })
                console.log(categoriesFromFirestore)
                set(()=>({
                    state: { categories: categoriesFromFirestore}
                }))
            } catch (error) {
                console.log(error)
            }

  return categoriesFromFirestore
        }
    }
}))