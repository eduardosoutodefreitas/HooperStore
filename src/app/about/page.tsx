import { SectionTitle } from '../components/SpecialText'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import Image from 'next/image'
import About from '../../assets/images/About.jpg'
import Cart from '../components/Cart'

export default function AboutPage() {
  return (
    <>
      <section className=" px-12 py-24 flex justify-center gap-x-16 items-center">
        <div className="">
          <SectionTitle
            title="Bem-vindo à Hooper Store!"
            className="rounded-sm"
          />
          <p className="my-5">
            A Hooper Store é uma loja fictícia feita por{' '}
            <a
              className="font-bold"
              href="https://github.com/Hey-Edu"
              target="_blank">
              mim
            </a>
            . A ideia surgiu da minha paixão pelo Basquete e vontade de criar um
            projeto que pudesse mostrar meus conhecimentos enquanto resolveria
            um problema.
          </p>
          <p>
            Nesta loja os produtos possuem definitivamente o melhor preço do
            mercado, de modo que qualquer atleta em qualquer parte do mundo pode
            adquirir produtos de qualidade.{' '}
          </p>
          <div className="flex items-center mt-5">
            <FiGithub
              size={35}
              color="#202020"
              className="mr-10 cursor-pointer"
            />
            <FiLinkedin size={35} color="#202020" className="cursor-pointer" />
          </div>
        </div>

        <Image src={About} height={250} width={500} alt="About Image" />
      </section>
      <Cart/>
    </>
  )
}