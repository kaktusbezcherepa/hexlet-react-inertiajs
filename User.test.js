import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Create from './resources/js/Pages/Users/Create'; 

describe('Create User Component', () => {
  test('renders form inputs', () => {
    render(<Create />);
    expect(screen.getByLabelText(/имя/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/пол/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/дата рождения/i)).toBeInTheDocument();
  });

  test('submits the form', () => {
    render(<Create />);
    
    fireEvent.change(screen.getByLabelText(/имя/i), { target: { value: 'Иван' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'ivan@example.com' } });
    fireEvent.change(screen.getByLabelText(/пол/i), { target: { value: 'male' } });
    fireEvent.change(screen.getByLabelText(/дата рождения/i), { target: { value: '2000-01-01' } });
    
    fireEvent.click(screen.getByRole('button', { name: /создать/i })); 

  });
});
