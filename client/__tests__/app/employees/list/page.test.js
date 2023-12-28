import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '@/app/employees/list/page';
import { EmployeeProvider } from '@/app/providers/EmployeeProvider';

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
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

describe('Home', () => {
  it('renders 2 buttons to toggle view or add employee', () => {
    render(
      <EmployeeProvider employees={employees}>
        <Home />
      </EmployeeProvider>
    )

    const buttons = screen.getAllByTitle(/Add|Toggle/);

    expect(buttons).toHaveLength(2);
    expect(buttons[0].textContent).toBe("Add Employee");
    expect(buttons[1].title).toBe("Toggle List");
  });

  it('renders a card for each employee by default', () => {
    render(
      <EmployeeProvider employees={employees}>
        <Home />
      </EmployeeProvider>
    )

    const cards = screen.getAllByRole('card');
    expect(cards).toHaveLength(2);

    const cardButtons = cards[0].querySelectorAll('button');
    expect(cardButtons).toHaveLength(2);
    expect(cardButtons[0].title).toBe('Edit');
    expect(cardButtons[1].title).toBe('Delete');

    const cardParas = cards[0].querySelectorAll('p');
    expect(cardParas).toHaveLength(4);
    expect(cardParas[0].textContent).toMatch(/test/i);
    expect(cardParas[1].textContent).toMatch(/test@gmail/i);
    expect(cardParas[2].textContent).toBe('+94111111111');
    expect(cardParas[3].textContent).toMatch(/male/i);
  });

  it('renders a table when toggled to list view', () => {
    render(
      <EmployeeProvider employees={employees}>
        <Home />
      </EmployeeProvider>
    )

    const toggleButton = screen.getByTitle(/Toggle/);
    fireEvent.click(toggleButton);

    const table = screen.getByRole('table')
    expect(table).toBeInTheDocument();

    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(3); // Includes header row

    const headers = rows[0].querySelectorAll('th');
    expect(headers[0].textContent).toBe('Image');
    expect(headers[1].textContent).toBe('First Name');
    expect(headers[2].textContent).toBe('Last Name');
    expect(headers[3].textContent).toBe('Email');
    expect(headers[4].textContent).toBe('Phone');
    expect(headers[5].textContent).toBe('Gender');
    expect(headers[6].textContent).toBe('Actions');

    const rowData = rows[1].querySelectorAll('td');
    expect(rowData[0].innerHTML).toMatch(/img/i);
    expect(rowData[1].textContent).toMatch(/test/i);
    expect(rowData[2].textContent).toMatch(/test/i);
    expect(rowData[3].textContent).toMatch(/test@gmail/i);
    expect(rowData[4].textContent).toMatch('+94111111111');
    expect(rowData[5].textContent).toMatch('Male');
    expect(rowData[6].innerHTML).toMatch(/button/i);

    const rowButtons = rowData[6].querySelectorAll('button');
    expect(rowButtons).toHaveLength(2);
    expect(rowButtons[0].textContent).toBe('Edit');
    expect(rowButtons[1].title).toBe('Delete');
  });
})