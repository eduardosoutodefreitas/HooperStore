import Banner from "./sections/Banner";
import Categories from "./sections/Categories";
import Services from "./sections/Services";
import getCategories from "./utils/getCategories";

export default async function Home() {
  const categories = await getCategories()
  return (
    <main className=" py-7">
      <Banner />
      <Services />
      <Categories categories={categories}/>
      
    </main>
  )
}
