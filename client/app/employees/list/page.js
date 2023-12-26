import Employees from './Employees.jsx'

async function getData() {
  const res = await fetch('http://localhost:3001/employees')

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const { employees } = await getData()

  return (
    <Employees employees={employees} />
  )
}
