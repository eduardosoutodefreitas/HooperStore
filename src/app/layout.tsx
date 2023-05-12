import localFont from 'next/font/local'
import Header from './components/Header'

// TODO: Fazer pagina de contato
// TODO: Fazer pagina de Checkout
// TODO: Fazer pagina de Sucesso
// Styles
import './globals.css'

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins/Poppins-ExtraLight.ttf',
      weight: '200'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Light.ttf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Medium.ttf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-SemiBold.ttf',
      weight: '600'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-ExtraBold.ttf',
      weight: '800'
    },
    {
      path: '../../public/fonts/Poppins/Poppins-Black.ttf',
      weight: '900'
    }
  ],
  display: 'swap',
  variable: '--font-poppins'
})

const gloock = localFont({
  src: '../../public/fonts/Gloock/Gloock-Regular.ttf',
  display: 'swap',
  variable: '--font-gloock'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${gloock.variable}`}>
      <body className="bg-white font-sans relative">
        <Header />
        {children}
      </body>
    </html>
  )
}
