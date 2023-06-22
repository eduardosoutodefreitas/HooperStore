import { BsArrowBarLeft, BsFillBagXFill } from 'react-icons/bs'
import Cart from '../components/Cart'
import Link from 'next/link'

const CancelPage = () => {
  return (
    <>
      <div className="min-h-[85vh] flex flex-col items-center justify-center gap-12 text-center tablet:px-3">
        <h2 className="text-4xl font-medium tablet:text-2xl">
          Ops, algo deu errado!
        </h2>
        <BsFillBagXFill color="	#ff3333" size={120} />
        <Link
          href={'/'}
          className="bg-primary p-2 min-w-[269px] w-1/4 flex items-center justify-center gap-2 text-white tablet:text-sm rounded-md ">
          <BsArrowBarLeft size={26} />
          Voltar para a página inicial
        </Link>
      </div>
      <Cart />
    </>
  )
}

export default CancelPage
