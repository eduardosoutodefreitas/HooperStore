'use client'
import Image from 'next/image'
import Logo from '../../assets/images/Logo.svg'
import Link from 'next/link'
import { useCartStore } from '../store/cart'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { CgMenuRightAlt, CgClose } from 'react-icons/cg'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import useNav from '../utils/useNav'

export default function Header() {
  const { toggleCart, showCart, cartQuantity } = useCartStore()
  const { isVisible, setIsVisible } = useNav()
  const handleNavClick = () => {
    setIsVisible(!isVisible)
  }
  const handleCartClick = () => {
    if (isVisible) {
      handleNavClick()
    }
    toggleCart(showCart)
  }
  return (
    <header className="text-primary shadow-md px-12 sticky top-0 z-30 bg-white tablet:px-6">
      <div className="flex items-center justify-between pt-2">
        <div>
          <Link href="/">
            <Image
              src={Logo}
              width={100}
              height={100}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <nav className="flex w-1/3 items-center justify-between text-lg min-w-[425px] tablet:hidden">
          <Link href="/">Home</Link>
          <Link href="/explore">Explorar</Link>
          <Link href="/about">Sobre nós</Link>
          <Link href="/contact">Contato</Link>
          <div className="flex items-center gap-1 font-medium">
            <HiOutlineShoppingCart
              size={22}
              onClick={handleCartClick}
              className="cursor-pointer"
            />
            <span>{cartQuantity}</span>
          </div>
        </nav>
        <div className="hidden tablet:flex tablet:items-center tablet:gap-2">
          <CgMenuRightAlt size={35} onClick={handleNavClick} />
          <HiOutlineShoppingCart
            size={30}
            onClick={handleCartClick}
            className="cursor-pointer"
          />
          <span className="font-medium text-2xl">{cartQuantity}</span>
        </div>
      </div>
      <div
        className={`fixed top-0 p-6 ease-in duration-500 h-screen w-[50vw] bg-white text-center
      ${isVisible ? 'left-0' : 'left-[-100%]'}`}>
        <div className="w-full flex justify-end mb-5">
          <CgClose onClick={handleNavClick} size={25} />
        </div>
        <nav className="flex flex-col items-center gap-8 text-lg">
          <Link onClick={() => handleNavClick()} href="/">
            Home
          </Link>
          <Link onClick={() => handleNavClick()} href="/explore">
            Explorar
          </Link>
          <Link onClick={() => handleNavClick()} href="/about">
            Sobre nós
          </Link>
          <Link onClick={() => handleNavClick()} href="/contact">
            Contato
          </Link>
          <div className="w-full flex items-center justify-around">
            <a href="https://instagram.com/freitas.dev" target="_blank">
              <AiFillInstagram size={25} className="cursor-pointer" />
            </a>
            <a href="https://github.com/eduardosoutodefreitas" target="_blank">
              <AiFillGithub size={25} className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/eduardo-souto-72493b26b/"
              target="_blank">
              <AiFillLinkedin size={25} className="cursor-pointer" />
            </a>
          </div>
          <Link href="/" onClick={() => handleNavClick()}>
            <Image
              src={Logo}
              width={80}
              height={82}
              alt="logo"
              className="cursor-pointer"
            />
          </Link>
        </nav>
      </div>
    </header>
  )
}
