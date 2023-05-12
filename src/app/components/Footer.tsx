// TODO: Adicionar links
// TODO: Adicionar responsividade
// TODO: Deixar mais bonito
import Image from 'next/image'
import Logo from '../../assets/images/Logo.svg'
import Link from 'next/link'
import { FaGithubAlt, FaLinkedin } from 'react-icons/fa'
import { HiPhone, HiLocationMarker } from 'react-icons/hi'
import { useCategoryStore } from '../store/category'

export default function Footer() {
  const { categories } = useCategoryStore.getState().state
  return (
    <footer className="bg-primary text-white px-12">
      <div className="flex justify-around items-start py-12 border-b border-b-white">
        <div className="flex flex-col gap-1">
          <h2 className="font-special font-bold text-4xl">Hooper Store</h2>
          <Link className="text-lg" href="/explore">
            Explorar
          </Link>
          <Link className="text-lg" href="/about">
            Sobre nós
          </Link>
          <Link className="text-lg" href="/contact">
            Contato
          </Link>
        </div>
        <div className="flex flex-col-reverse gap-1">
          {categories.map((category) => (
            <Link
              className="text-lg"
              key={category.id}
              href={`/explore/${category.id}`}>
              {category.displayName}
            </Link>
          ))}
        </div>
        <div className="flex flex-col">
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
      <div className="py-12">
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
