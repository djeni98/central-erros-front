import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login page', () => {
  const { container } = render(
    <LoginPage />,
    { wrapper: MemoryRouter }
  );

  const loginTitle = container.querySelector('[id="title"]');

  const registerLink = container.querySelector('[id="register"]');
  const recoverPasswordLink = container.querySelector('[id="recover-password"]');

  expect(loginTitle).toBeInTheDocument();
  expect(loginTitle).toHaveTextContent('Login');

  expect(registerLink).toBeInTheDocument();
  expect(registerLink).toHaveTextContent('Cadastre-se');
  expect(registerLink).toHaveAttribute('href', '/cadastro');

  expect(recoverPasswordLink).toBeInTheDocument();
  expect(recoverPasswordLink).toHaveTextContent('Esqueci minha senha');
  expect(recoverPasswordLink).toHaveAttribute('href', '/recuperar');
});
