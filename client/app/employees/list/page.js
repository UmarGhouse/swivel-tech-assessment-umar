'use client'

import { useState } from "react";
import { useRouter } from 'next/navigation'
import { useEmployees } from "@/app/providers/EmployeeProvider.js";

import { FiGrid, FiList } from 'react-icons/fi'
import Grid from './Grid.jsx'
import Table from './Table.jsx'
import { deleteEmployee } from "@/app/server/actions.js";

export default function Home() {
  const router = useRouter();
  const employees = useEmployees();

  const [showTable, setShowTable] = useState(false);

  const handleToggleView = () => setShowTable(!showTable);

  const handleDeleteEmployee = async (id) => {
    if (confirm("Are you sure?")) {
      await deleteEmployee(id);
    } else {
      return;
    }
  }

  return (
    <main className="mt-6 p-6">
      {/* Buttons */}
      <div className="flex justify-end items-center gap-x-2">
        <button className="py-2 px-6 bg-purple-600 text-white text-xs rounded-full" onClick={() => router.push('/employees/add')} title="Add Employee">Add Employee</button>
        {showTable ? (
          <button className="p-2 bg-purple-600 text-white text-xs rounded-full" title="Toggle Grid" onClick={handleToggleView}><FiGrid /></button>
        ) : (
          <button className="p-2 bg-purple-600 text-white text-xs rounded-full" title="Toggle List" onClick={handleToggleView}><FiList /></button>
        )}
      </div>

      {/* Data view - Grid */}
      {!showTable ? (<Grid employees={employees} handleDelete={handleDeleteEmployee} />) : null}

      {/* Data view - List (default hidden) */}
      {showTable ? (<Table employees={employees} handleDelete={handleDeleteEmployee} />) : null}
    </main>
  )
}
