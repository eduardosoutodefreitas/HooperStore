'use client'
import {useEffect} from 'react'
import { SectionTitle } from "@/app/components/SpecialText";
import { useCategoryStore } from "@/app/store/category";
import ProductCard from '@/app/components/ProductCard';
import Cart from '@/app/components/Cart';

interface CategoryPageProps{
     params: { id: string } 
}
export default async function Page({params}:CategoryPageProps) {
  const {state, actions} = useCategoryStore.getState()
  useEffect(()=>{
    if(state.categories.length === 0){
      actions.fetchCategory()      
    }
  }, [])
      const category = state.categories.find(category=>category.id === params.id)
   return (
     <main className="px-12 py-6">
          <SectionTitle title={category?.displayName}/>
        <div className="flex flex-wrap items-center gap-5 mt-6 mb-16 pl-2">
          {category?.products.map(product=>(<ProductCard product={product} key={product.id}/>)
        )}
          </div>
          <Cart/>
     </main>
    )
  }

   