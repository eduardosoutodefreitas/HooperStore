import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import Services from "./sections/Services";
import { useCategoryStore } from "./store/category";
import getCategories from "./utils/getCategories";

export default async function Home() {
  const data = await getCategories()
  useCategoryStore.setState({state:{
    categories: data ?? []
  }})
  return (
    <main className=" py-7">
      <Banner />
      <Services />
      <Categories/>
      
    </main>
  )
}
