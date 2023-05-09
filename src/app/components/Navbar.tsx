'use client'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Link from 'next/link'
import { useCartStore } from '../store/cart'

export default function Navbar() {
  const {toggleCart, showCart} = useCartStore()
    const handleCartClick = () => {
      toggleCart(showCart)
    }
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
       <HiOutlineShoppingCart size={22} onClick={handleCartClick}/> 

    </nav>
  )
}
