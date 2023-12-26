import { FiTrash2, FiEdit } from 'react-icons/fi'

export default function Grid({ employees }) {
  const genderMap = {
    M: "Male",
    F: "Female"
  }

  return (
    <div className="mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2">
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
              <button className="bg-emerald-400 p-2 rounded-full text-white"><FiEdit /></button>
              <button className="bg-red-400 p-2 rounded-full text-white"><FiTrash2 /></button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
