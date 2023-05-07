import Image from 'next/image'
import Logo from '../../assets/images/Logo.svg'
import Navbar from './Navbar'
import SearchInput from './SearchInput'
import Link from 'next/link'


export default function Header() {
  return (
    <header className="text-primary font-sans">
      <div className="font-serif flex justify-between items-center px-9  pt-2">
        <Link href='/'>
        <Image src={Logo} width={120} height={120} alt="logo" className='cursor-pointer'/>
        </Link>
        <SearchInput />
        <div className="font-extralight">
          <a
            href="/"
            className="pr-5 border-r border-lightGray hover:font-light">
            login
          </a>
          <a href="/" className="pl-5 hover:font-light">
            criar conta
          </a>
        </div>
      </div>
      <Navbar />
    </header>
  )
}
