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
