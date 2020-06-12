import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login page', () => {
  render(<LoginPage />, { wrapper: MemoryRouter });

  const loginTitle = screen.getByRole('heading');

  // EmailAndPasswordForm
  const emailInput = screen.getByRole('textbox');
  const passwordInput = screen.getByLabelText(/senha/i);
  const buttonSubmit = screen.getByRole('button')

  const registerLink = screen.getByRole('link', { name: /cadastre-se/i });
  const recoverPasswordLink = screen.getByRole('link', { name: /esqueci minha senha/i });

  expect(loginTitle).toBeInTheDocument();
  expect(loginTitle).toHaveTextContent('Login');

  // EmailAndPasswordForm
  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();

  expect(registerLink).toBeInTheDocument();
  expect(registerLink).toHaveTextContent('Cadastre-se');
  expect(registerLink).toHaveAttribute('href', '/cadastro');

  expect(recoverPasswordLink).toBeInTheDocument();
  expect(recoverPasswordLink).toHaveTextContent('Esqueci minha senha');
  expect(recoverPasswordLink).toHaveAttribute('href', '/recuperar');
});

test('redirects on register link click', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <LoginPage />
    </Router>
  );

  const registerLink = screen.getByRole('link', { name: /cadastre-se/i });

  fireEvent.click(registerLink);
  expect(history.location.pathname).toStrictEqual('/cadastro');
});

test('redirects on recover password link click', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <LoginPage />
    </Router>
  );

  const recoverPasswordLink = screen.getByRole('link', { name: /esqueci minha senha/i });

  fireEvent.click(recoverPasswordLink);
  expect(history.location.pathname).toStrictEqual('/recuperar');
});
