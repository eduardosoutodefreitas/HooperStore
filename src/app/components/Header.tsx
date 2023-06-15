'use client'
import Image from 'next/image'
import Logo from '../../assets/images/Logo.svg'
import Link from 'next/link'
import { useCartStore } from '../store/cart'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export default function Header() {
  const { toggleCart, showCart } = useCartStore()
  const handleCartClick = () => {
    toggleCart(showCart)
  }
  return (
    <header className="text-primary shadow-md px-12 sticky top-0 z-30 bg-white ">
      <div className="flex items-center justify-between pt-2">
        <div>
          <Link href="/">
            <Image
              src={Logo}
              width={120}
              height={120}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <nav className="flex w-1/3 items-center justify-between text-lg">
          <Link href="/">Home</Link>
          <Link href="/explore">Explorar</Link>
          <Link href="/about">Sobre nós</Link>
          <Link href="/contact">Contato</Link>
          <HiOutlineShoppingCart
            size={22}
            onClick={handleCartClick}
            className="cursor-pointer"
          />
        </nav>
      </div>
    </header>
  )
}
