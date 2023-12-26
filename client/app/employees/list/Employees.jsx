'use client'

import { useState } from "react";

import { FiGrid, FiList } from 'react-icons/fi'
import Grid from './Grid.jsx'
import Table from './Table.jsx'

export default function Employees({ employees }) {
  const [showTable, setShowTable] = useState(false);

  const handleToggleView = () => setShowTable(!showTable);

  return (
    <main className="mt-6 p-6">
      {/* Buttons */}
      <div className="flex justify-end items-center gap-x-2">
        <button className="py-2 px-6 bg-purple-600 text-white text-xs rounded-full">Add Employee</button>
        {showTable ? (
          <button className="p-2 bg-purple-600 text-white text-xs rounded-full" title="Toggle Grid" onClick={handleToggleView}><FiGrid /></button>
        ) : (
          <button className="p-2 bg-purple-600 text-white text-xs rounded-full" title="Toggle List" onClick={handleToggleView}><FiList /></button>
        )}
      </div>

      {/* Data view - Grid */}
      {!showTable ? (<Grid employees={employees}/>) : null}

      {/* Data view - List (default hidden) */}
      {showTable ? (<Table employees={employees}/>) : null}
    </main>
  )
}
