import { FiTrash2 } from 'react-icons/fi'

export default function Table({ employees }) {
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
              <td className="p-4 text-left border-2 border-green-400"><img src={employee.photo} className="overflow-hidden rounded-lg" /></td>
              <td className="p-4 text-left border-2 border-green-400">{employee.first_name}</td>
              <td className="p-4 text-left border-2 border-green-400">{employee.last_name}</td>
              <td className="p-4 text-left border-2 border-green-400">{employee.email}</td>
              <td className="p-4 text-left border-2 border-green-400">{employee.number}</td>
              <td className="p-4 text-left border-2 border-green-400">{genderMap[employee.gender]}</td>
              <td className="p-4 text-left border-2 border-green-400">
                <div className="flex items-center justify-between gap-x-1">
                  <button className="bg-gray-400 p-2 rounded-lg text-white">Edit</button>
                  <button className="bg-red-400 p-2 rounded-full text-white"><FiTrash2 /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
