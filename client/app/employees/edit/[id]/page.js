"use client"

import { useEmployees } from "@/app/providers/EmployeeProvider";
import EmployeeForm from "@/app/components/form";
import { editEmployee } from "@/app/server/actions";

export default function AddEmployee({ params }) {
  const employees = useEmployees();

  const employee = employees.find((emp) => emp._id === params.id);

  const editEmployeeWithId = editEmployee.bind(null, employee._id);

  return (
    <div className="mx-auto my-6 p-6 w-1/2 shadow-lg rounded-lg ">
      <h2>Edit Employee: {employee.first_name} {employee.last_name}</h2>

      <EmployeeForm employee={employee} formSubmitFunction={editEmployeeWithId} />
    </div>
  )
}
