import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import RegisterPage from './RegisterPage';

test('renders register page', () => {
  render(<RegisterPage />, { wrapper: MemoryRouter });

  const registerTitle = screen.getByRole('heading');

  // EmailAndPasswordForm
  const emailInput = screen.getByRole('textbox');
  const passwordInput = screen.getByLabelText(/senha/i);
  const buttonSubmit = screen.getByRole('button')

  const loginLink = screen.getByRole('link');

  expect(registerTitle).toBeInTheDocument();
  expect(registerTitle).toHaveTextContent('Cadastro');

  // EmailAndPasswordForm
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();

  expect(loginLink).toBeInTheDocument();
  expect(loginLink).toHaveTextContent('Já possuo conta');
  expect(loginLink).toHaveAttribute('href', '/');
});

test('redirects on login link click', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <RegisterPage />
    </Router>
  );

  const loginLink = screen.getByRole('link');

  fireEvent.click(loginLink);
  expect(history.location.pathname).toStrictEqual('/');
});
