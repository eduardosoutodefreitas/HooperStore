import {Poppins, Gloock} from 'next/font/google'
import Header from './components/Header'
import Footer from './components/Footer'

// Styles
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '600', '700', '900'],
  variable: '--font-poppins'
})

const gloock = Gloock({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  variable: '--font-gloock'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${gloock.variable}`}>
      <body className='bg-white'>
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  )
}
