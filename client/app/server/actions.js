'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation'

export async function addEmployee(input) {
  await fetch('http://localhost:3001/employee', {
    method: 'POST',
    body: JSON.stringify(input),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });

  revalidatePath('/employees/list');

  redirect('/employees/list');
}

export async function editEmployee(empId, input) {
  await fetch(`http://localhost:3001/employee/${empId}`, {
    method: 'PUT',
    body: JSON.stringify(input),
    headers: {
      'Content-Type': 'application/json'
    },
    cache: 'no-store'
  });

  revalidatePath('/employees/list');

  redirect('/employees/list');
}

export async function deleteEmployee(empId) {
  await fetch(`http://localhost:3001/employee/${empId}`, {
    method: 'DELETE',
    cache: 'no-store'
  });

  revalidatePath('/employees/list');
}
