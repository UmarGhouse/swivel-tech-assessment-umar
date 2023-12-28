import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import EditEmployee from '@/app/employees/edit/[id]/page';
import { EmployeeProvider } from '@/app/providers/EmployeeProvider';

// Mock useRouter:
jest.mock("next/navigation", () => ({
  redirect(dest) {
    return {
      destination: dest
    };
  }
}));

// Mock data
const employees = [{
  "_id": "1",
  "first_name": "Test",
  "last_name": "Test",
  "email": "test@gmail.com",
  "number": "+94111111111",
  "gender": "M",
  "photo": "https://randomuser.me/api/portraits/men/92.jpg"
},
{
  "_id": "2",
  "first_name": "Tester",
  "last_name": "Tester",
  "email": "tester@gmail.com",
  "number": "+94222222222",
  "gender": "F",
  "photo": "https://randomuser.me/api/portraits/men/30.jpg"
}];

describe('AddEmployee', () => {
  it('renders a heading with employee name', () => {
    render(
      <EmployeeProvider employees={employees}>
        <EditEmployee params={{ id: "1" }} />
      </EmployeeProvider>
    );

    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe("Edit Employee: Test Test");
  });

  it('renders a submit button', () => {
    render(
      <EmployeeProvider employees={employees}>
        <EditEmployee params={{ id: "1" }} />
      </EmployeeProvider>
    );

    expect(screen.getByRole('button', { name: "Submit"})).toBeInTheDocument();
  });

  it('renders a pre-filled form', () => {
    render(
      <EmployeeProvider employees={employees}>
        <EditEmployee params={{ id: "1" }} />
      </EmployeeProvider>
    );

    expect(screen.getByRole('textbox', { name: "First Name"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "First Name"}).value).toBe("Test");
    
    expect(screen.getByRole('textbox', { name: "Last Name"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "Last Name"}).value).toBe("Test");
    
    expect(screen.getByRole('textbox', { name: "Email"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "Email"}).value).toBe("test@gmail.com");
    
    expect(screen.getByRole('textbox', { name: "Phone"})).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: "Phone"}).value).toBe("+94111111111");
    
    expect(screen.getByRole('combobox', { name: "Gender"})).toBeInTheDocument();
    expect(screen.getByRole('combobox', { name: "Gender"}).value).toBe("M");
  });
})