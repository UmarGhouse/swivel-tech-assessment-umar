import { Montserrat } from 'next/font/google'
import './globals.css'
import { EmployeeProvider } from './providers/EmployeeProvider'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Employee Manager',
  description: 'Swivel Tech Employee Manager',
}

async function getData() {
  const res = await fetch('http://localhost:3001/employees')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function RootLayout({ children }) {
  const { employees } = await getData()

  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className='bg-purple-600 py-4'>
          <div className='container mx-auto font-bold text-white'>
            <a href='/employees/list'>Employee Manager</a>
          </div>
        </div>
        <div className='container mx-auto'>
          <EmployeeProvider employees={employees}>
            {children}
          </EmployeeProvider>
        </div>
      </body>
    </html>
  )
}
