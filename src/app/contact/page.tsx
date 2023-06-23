import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import Cart from '../components/Cart'
import { SectionTitle } from '../components/SpecialText'

const ContactPage = () => {
  return (
    <>
      <div className="min-h-[85vh] p-12 flex flex-col  justify-center items-center gap-8">
        <SectionTitle title="Entre em contato!" />
        <p>
          Gostou do projeto? Tem alguma sugestão ou crítica em mente? Sinta-se a
          vontade para falar comigo através de uma de minhas redes sociais!
          Responderei assim que possível.
        </p>
        <div className="flex items-center mt-5 w-1/4 min-w-[200px] justify-between">
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

export default ContactPage
