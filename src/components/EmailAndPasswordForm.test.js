import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import EmailAndPasswordForm from './EmailAndPasswordForm';

test('renders email and password form', () => {
  render(<EmailAndPasswordForm />);

  const emailInput = screen.getByRole('textbox');
  const passwordInput = screen.getByLabelText(/senha/i);
  const buttonSubmit = screen.getByRole('button')

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();
});

test('sends valid email and password', () => {
  let form;

  const callback = (email, password) => {
    form = { email, password };
  }

  render(<EmailAndPasswordForm callback={callback} />);

  const emailInput = screen.getByRole('textbox');
  const passwordInput = screen.getByLabelText(/senha/i);
  const buttonSubmit = screen.getByRole('button')

  const email = 'example@example.com';
  const password = 'testpassword';

  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.change(passwordInput, { target: { value: password } });
  fireEvent.click(buttonSubmit);

  expect(form.email).toBe(email);
  expect(form.password).toBe(password);
});
