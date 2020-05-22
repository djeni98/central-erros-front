import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import EmailAndPasswordForm from './EmailAndPasswordForm';

test('renders email and password form', () => {
  const { container } = render(<EmailAndPasswordForm />);

  const emailInput = container.querySelector('[id="email"]');
  const passwordInput = container.querySelector('[id="password"]');
  const buttonSubmit = container.querySelector('[id="button-submit"]');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();
});

test('sends valid email and password', () => {
  let form;

  const callback = (email, password) => {
    form = { email, password };
  }

  const { container } = render(
    <EmailAndPasswordForm callback={callback} />
  );

  const emailInput = container.querySelector('[id="email"]');
  const passwordInput = container.querySelector('[id="password"]');
  const buttonSubmit = container.querySelector('[id="button-submit"]');

  const email = 'example@example.com';
  const password = 'testpassword';

  fireEvent.change(emailInput, { target: { value: email } });
  fireEvent.change(passwordInput, { target: { value: password } });
  fireEvent.click(buttonSubmit);

  expect(form.email).toBe(email);
  expect(form.password).toBe(password);
});
