import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login page', () => {
  const { container } = render(
    <LoginPage />,
    { wrapper: MemoryRouter }
  );

  const loginTitle = container.querySelector('[id="title"]');

  const registerLink = container.querySelector('[id="register"]');
  const forgotPasswordLink = container.querySelector('[id="forgot-password"]');

  expect(loginTitle).toBeInTheDocument();
  expect(loginTitle).toHaveTextContent('Login');

  expect(registerLink).toBeInTheDocument();
  expect(registerLink).toHaveTextContent('Cadastre-se');
  expect(registerLink).toHaveAttribute('href', '/cadastro');

  expect(forgotPasswordLink).toBeInTheDocument();
  expect(forgotPasswordLink).toHaveTextContent('Esqueci minha senha');
});
