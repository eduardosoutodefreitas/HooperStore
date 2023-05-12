'use client'
import Image from 'next/image'
import Logo from '../../assets/images/Logo.svg'
import SearchInput from './SearchInput'
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
      <div className="flex items-center pt-2">
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
        <nav className="flex-1 flex justify-center items-center gap-24">
          <Link className="text-lg" href="/explore">
            Explorar
          </Link>
          <Link className="text-lg" href="/about">
            Sobre nós
          </Link>
          <Link className="text-lg" href="/contact">
            Contato
          </Link>
        </nav>
        <div className="flex items-center gap-x-10 flex-2">
          <SearchInput />
          <HiOutlineShoppingCart
            size={22}
            onClick={handleCartClick}
            className="cursor-pointer"
          />
        </div>
      </div>
    </header>
  )
}
