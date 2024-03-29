import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Büşra Pınar',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet"></link>
      <body className={inter.className} >
        <div className='font-fira_code container mx-auto bg-[#282C33]/100'>
        <Header></Header>
        {children}
        <Footer></Footer>
        </div>
        </body>
    </html>
  )
}
