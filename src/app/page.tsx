import Cart from './components/Cart'
import Banner from './sections/Banner'
import Categories from './sections/Categories'
import LatestProducts from './sections/LatestProducts'
import Services from './sections/Services'
import { useCategoryStore } from './store/category'
import getCategories from './utils/getCategories'

export default async function Home() {
  const data = await getCategories()
  useCategoryStore.setState({
    state: {
      loading: false,
      categories: data ?? []
    }
  })
  return (
    <main>
      <Banner />
      <Categories />
      <Services />
      <LatestProducts />
      <Cart />
    </main>
  )
}
