import Banner from './sections/Banner'
import Categories from './sections/Categories'
import Services from './sections/Services'

export default function Home() {
  return (
    <main className="px-12 py-7">
      <Banner />
      {/* @ts-expect-error Async Server Component */}
      <Categories />
      <Services />
    </main>
  )
}
