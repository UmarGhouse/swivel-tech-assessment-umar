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

  const genderMap = {
    M: "Male",
    F: "Female"
  }

  return (
    <main className="mt-6 px-6">
      {/* Buttons */}
      <div className="flex justify-end items-center gap-x-2">
        <button className="py-2 px-6 bg-purple-600 text-white text-xs rounded-full">Add Employee</button>
        <button className="py-2 px-6 bg-purple-600 text-white text-xs rounded-full">Toggle View</button>
      </div>

      {/* Data view - Grid */}
      <div className="mt-6 grid grid-cols-5 gap-2">
        {employees.map((employee) => (
          <div key={employee._id} className="basis-1/4 flex flex-col gap-y-2 rounded-lg shadow-lg">
            <img src={employee.photo} className="overflow-hidden rounded-lg" />
            <div className="px-4 py-2 flex items-end w-full">
              <div className="w-1/2 flex flex-col justify-start items-start gap-y-1 text-xs">
                <p className="w-full truncate" title={`${employee.first_name} ${employee.last_name}`}>{employee.first_name} {employee.last_name}</p>
                <p className="w-full truncate" title={employee.email}>{employee.email}</p>
                <p className="w-full truncate" title={employee.number}>{employee.number}</p>
                <p className="w-full truncate" title={genderMap[employee.gender]}>{genderMap[employee.gender]}</p>
              </div>

              <div className="w-1/2 flex items-center justify-end gap-x-1">
                <button className="bg-red-400 p-2 rounded-full">A</button>
                <button className="bg-emerald-400 p-2 rounded-full">A</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Data view - List (default hidden) */}
      <div className="mt-6">
        <table className="border border-green-400">
          <thead className="bg-green-200 border border-green-400">
            <th className="border-2 border-green-400">Image</th>
            <th className="border-2 border-green-400">First Name</th>
            <th className="border-2 border-green-400">Last Name</th>
            <th className="border-2 border-green-400">Email</th>
            <th className="border-2 border-green-400">Phone</th>
            <th className="border-2 border-green-400">Gender</th>
            <th className="border-2 border-green-400">Actions</th>
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
                    <button className="bg-red-400 p-2 rounded-full">A</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  )
}
