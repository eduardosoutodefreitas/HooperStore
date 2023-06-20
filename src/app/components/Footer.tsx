import Link from 'next/link'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { useCategoryStore } from '../store/category'

export default function Footer() {
  const { categories } = useCategoryStore.getState().state
  return (
    <footer className="bg-primary text-white p-12 text-center">
      <div className="flex justify-around items-start border-b border-b-white flex-wrap pb-12 smartphone:gap-8">
        <div className="flex flex-col gap-1 text-lg">
          <h2 className="font-special font-bold text-4xl">Hooper Store</h2>
          <Link href="/explore">Explorar</Link>
          <Link href="/about">Sobre nós</Link>
          <Link href="/contact">Contato</Link>
        </div>
        <div className="flex flex-col-reverse gap-1 text-lg">
          {categories.map((category) => (
            <Link key={category.id} href={`/explore/${category.id}`}>
              {category.displayName}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start">
          <p>
            <HiPhone size={22} color="white" className="mr-2 inline-block" />
            +55 21 94002 8922
          </p>

          <p>
            <HiLocationMarker
              size={22}
              color="white"
              className="mr-2 inline-block"
            />{' '}
            Rua Fictícia, Av.Imaginada
          </p>
        </div>
      </div>
      <div className="pt-12">
        <div className="flex justify-center items-center gap-5">
          <FaGithubAlt color="white" size={24} />
          <FaLinkedin color="white" size={24} />
        </div>
        <p className="py-3 text-center">
          Feito por{' '}
          <a
            href="https://github.com/Hey-Edu"
            target="_blank"
            className="font-semibold">
            Eduardo Souto
          </a>
        </p>
      </div>
    </footer>
  )
}
