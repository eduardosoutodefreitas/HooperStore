import { SectionTitle } from '../components/SpecialText'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Cart from '../components/Cart'

export default function AboutPage() {
  return (
    <>
      <div className="min-h-[85vh] p-12 flex flex-col justify-center items-center gap-5">
        <SectionTitle
          title="Bem-vindo à Hooper Store!"
          className="rounded-sm"
        />
        <p>
          A Hooper Store é uma loja fictícia feita por{' '}
          <a
            className="font-bold"
            href="https://github.com/eduardosoutodefreitas"
            target="_blank">
            mim
          </a>
          . A ideia surgiu da minha paixão pelo Basquete e vontade de criar um
          projeto que pudesse mostrar meus conhecimentos enquanto resolveria um
          problema.
        </p>
        <p>
          Nesta loja os produtos possuem definitivamente o melhor preço do
          mercado, de modo que qualquer atleta em qualquer parte do mundo pode
          adquirir produtos de qualidade.{' '}
        </p>
        <div className="flex items-center min-w-[200px] w-1/4 justify-between">
          <a href="https://instagram.com/freitas.dev" target="_blank">
            <AiFillInstagram
              size={35}
              color="#202020"
              className="cursor-pointer"
            />
          </a>
          <a href="https://github.com/eduardosoutodefreitas" target="_blank">
            <AiFillGithub
              size={35}
              color="#202020"
              className="cursor-pointer"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/eduardo-souto-72493b26b/"
            target="_blank">
            <AiFillLinkedin
              size={35}
              color="#202020"
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
      <Cart />
    </>
  )
}
