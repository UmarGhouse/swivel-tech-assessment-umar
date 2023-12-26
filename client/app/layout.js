import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Employee Manager',
  description: 'Swivel Tech Employee Manager',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className='bg-purple-600 py-4'>
          <div className='container mx-auto font-bold text-white'>
            Employee Manager
          </div>
        </div>
        <div className='container mx-auto'>
          {children}
        </div>
      </body>
    </html>
  )
}
