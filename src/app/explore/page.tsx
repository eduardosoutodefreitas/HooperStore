'use client'
import { useEffect, useState } from "react"
import { useCategoryStore } from "../store/category"
import ProductCard from "../components/ProductCard"
import { SectionTitle } from "../components/SpecialText"
export default function Explore() {
  const { state, actions } = useCategoryStore.getState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
       setLoading(true);
      await actions.fetchCategory();
     
    }

    if (state.categories.length === 0) {
      fetchData();
      setLoading(false)
    } 
  }, []);

  return (
    <main className=" px-12 py-6">
      {loading ? (
        <p>Carregando...</p>
      ) : state.categories.length > 0 ? (
        <>
          {state.categories.map((category) => (
            <>
              <SectionTitle title={category.displayName} />
              <div className="flex flex-wrap items-center gap-5 mt-6 mb-16 pl-2">
                {category.products.map((product) => (
                  <ProductCard product={product} />
                ))}
              </div>
            </>
          ))}
        </>
      ) : (
        <p>Não foi possível carregar as categorias.</p>
      )}
    </main>
  );
}