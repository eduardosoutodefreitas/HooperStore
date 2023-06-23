import Image from 'next/image'
import Banner from '../../assets/images/Banner.jpg'

export default function BannerSection(): JSX.Element {
  return (
    <section className=" w-full my-7 px-12 smartphone:px-6">
      <div className="relative h-[600px] rounded-md tablet:h-[450px] smartphone:h-[300px]">
        <Image alt="Banner" src={Banner} fill className="rounded-md" />
        <div className="absolute z-10 text-white top-40 left-20 w-1/3 text-center tablet:top-24 smartphone:w-1/2 smartphone:top-8 smartphone:left-6">
          <h1 className="font-special text-bold text-5xl mb-3 tablet:text-4xl smartphone:text-2xl">
            Qualidade, Preço e Estilo
          </h1>
          <a
            href="/explore"
            className="before:content-['-'] before:mr-1 after:content-['-'] after:ml-1 p-1 border-b-2 border-white">
            Explorar
          </a>
        </div>
      </div>
    </section>
  )
}
