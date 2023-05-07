import { HiOutlineShoppingCart } from 'react-icons/hi'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="px-9 select-none pb-5 border-b border-primary/10 flex justify-between">
        <Link  href="/explore">
          Explorar        
        </Link>
        <Link href="/about">
          Sobre nós
        </Link>
        <Link href="/contact">
         Contato
        </Link>
        <button className="flex items-center gap-x-1 cursor-pointer">
          <HiOutlineShoppingCart size={22} />
          <span>1</span>
        </button>
    </nav>
  )
}
