import { useRouter } from 'next/navigation'
import { FiTrash2, FiUser } from 'react-icons/fi'

export default function Table({ employees, handleDelete }) {
  const router = useRouter();

  const genderMap = {
    M: "Male",
    F: "Female"
  }

  return (
    <div className="mt-6">
      <table className="border border-green-400 w-full">
        <thead className="bg-green-200 border border-green-400">
          <tr>
            <th className="border-2 border-green-400">Image</th>
            <th className="border-2 border-green-400">First Name</th>
            <th className="border-2 border-green-400">Last Name</th>
            <th className="border-2 border-green-400">Email</th>
            <th className="border-2 border-green-400">Phone</th>
            <th className="border-2 border-green-400">Gender</th>
            <th className="border-2 border-green-400">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee._id} className="border border-green-400">
              <td className="p-4 text-left border-2 border-green-400">
                {employee.photo ? (
                  <img src={employee.photo} className="overflow-hidden rounded-lg" />
                ) : (<div className='rounded-lg overflow-hidden bg-gray-400 flex items-center justify-center h-12 md:h-14 xl:h-32 xl:w-32 text-5xl text-gray-200'><FiUser /></div>)}
              </td>
              <td className="p-4 text-left border-2 border-green-400">{employee.first_name}</td>
              <td className="p-4 text-left border-2 border-green-400">{employee.last_name}</td>
              <td className="p-4 text-left border-2 border-green-400">{employee.email}</td>
              <td className="p-4 text-left border-2 border-green-400">{employee.number}</td>
              <td className="p-4 text-left border-2 border-green-400">{genderMap[employee.gender]}</td>
              <td className="p-4 text-left border-2 border-green-400">
                <div className="flex items-center justify-between gap-x-1">
                  <button className="bg-gray-400 p-2 rounded-lg text-white" onClick={() => router.push(`/employees/edit/${employee._id}`)}>Edit</button>
                  <button className="bg-red-400 p-2 rounded-full text-white" onClick={() => handleDelete(employee._id)} title='Delete'><FiTrash2 /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
