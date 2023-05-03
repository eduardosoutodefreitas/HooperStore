'use client'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
import Dropdown from './Dropdown'
import { useState } from 'react'

export default function Navbar() {
  const [active, setActive] = useState(false)
  const handleDropdown = (state: boolean) => {
    setActive(!state)
  }
  return (
    <nav className="px-9 select-none pb-5 border-b border-primary/10">
      <ul className="flex justify-between">
        <li>
          <a href="#">Explorar</a>
        </li>
        <li
          onClick={() => handleDropdown(active)}
          className="relative flex items-center gap-x-1 cursor-pointer">
          Categorias {active ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
          <Dropdown
            active={active}
            options={['Masculino', 'Feminino', 'Acessórios', 'Tênis', 'Bolas']}
          />
        </li>

        <li>
          <a href="#">Sobre nós</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
        <li className="flex items-center gap-x-1 cursor-pointer">
          <HiOutlineShoppingCart size={22} />
          <span>1</span>
        </li>
      </ul>
    </nav>
  )
}
