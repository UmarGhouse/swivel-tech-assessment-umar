import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import AddEmployee from '@/app/employees/add/page';
import { addEmployee } from '@/app/server/actions';

// Mock useRouter:
jest.mock("next/navigation", () => ({
  redirect(dest) {
    return {
      destination: dest
    };
  }
}));

describe('AddEmployee', () => {
  it('renders a heading', () => {
    render(<AddEmployee />)

    const heading = screen.getByRole('heading', { level: 2 });

    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Add Employee')
  });

  it('renders a submit button', () => {
    render(<AddEmployee />);

    expect(screen.getByRole('button', { name: "Submit"})).toBeInTheDocument();
  });

  it('renders a form', () => {
    render(<AddEmployee />)

    expect(screen.getByRole('textbox', { name: "First Name"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "Last Name"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "Email"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "Phone"})).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: "Gender"})).toBeInTheDocument();
  });
})