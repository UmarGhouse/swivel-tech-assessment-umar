import EmployeeForm from "@/app/components/form";
import { addEmployee } from "@/app/server/actions";

export default function AddEmployee() {
  return (
    <div className="mx-auto my-6 p-6 w-1/2 shadow-lg rounded-lg ">
      <h2>Add Employee</h2>

      <EmployeeForm formSubmitFunction={addEmployee} />
    </div>
  )
}
