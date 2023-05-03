import Image from 'next/image'
import Banner from '../../assets/images/Banner.jpg'

export default function BannerSection() {
  return (
    <section className="relative overflow-hidden h-[600px] w-full">
      <Image alt="Banner" src={Banner} fill className=' px-12 rounded-md'/>
      <div className="absolute z-10 text-white top-40 left-20 w-1/3 text-center">
        <h1 className="font-special text-bold  text-5xl mb-3">
          Qualidade, Preço e Estilo
        </h1>
        <a
          href="#"
          target="_blank"
          className="before:content-['-'] before:mr-1 after:content-['-'] after:ml-1 p-1 border-b-2 border-white">
          Explorar
        </a>
      </div>
    </section>
  )
}