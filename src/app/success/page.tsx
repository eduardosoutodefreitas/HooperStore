import { BsArrowBarLeft, BsFillBagCheckFill } from 'react-icons/bs'
import Cart from '../components/Cart'
import Link from 'next/link'

const SuccessPage = () => {
  return (
    <>
      <div className="min-h-[85vh] flex flex-col items-center justify-center gap-12 text-center tablet:px-3">
        <h2 className="text-4xl font-medium tablet:text-2xl">
          Compra efetuada com sucesso!
        </h2>
        <BsFillBagCheckFill color="#5DFC4E" size={120} />
        <Link
          href={'/'}
          className="bg-primary p-2 min-w-[269px] w-1/4 flex items-center justify-center gap-2 text-white tablet:text-sm rounded-md">
          <BsArrowBarLeft size={26} />
          Voltar para a página inicial
        </Link>
      </div>
      <Cart />
    </>
  )
}

export default SuccessPage
