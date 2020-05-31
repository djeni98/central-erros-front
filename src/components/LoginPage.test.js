import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import LoginPage from './LoginPage';
import EmailAndPasswordForm from './EmailAndPasswordForm';

test('renders login page', () => {
  const div = document.createElement('div');
  render(
    <EmailAndPasswordForm buttonLabel="Entrar" />,
    { container: div }
  );
  const emailAndPasswordForm = div.querySelector('form');

  const { container, debug } = render(
    <LoginPage />,
    { wrapper: MemoryRouter }
  );

  const loginTitle = container.querySelector('[id="title"]');
  const loginForm = container.querySelector('form');

  const registerLink = container.querySelector('[id="register"]');
  const recoverPasswordLink = container.querySelector('[id="recover-password"]');

  expect(loginTitle).toBeInTheDocument();
  expect(loginTitle).toHaveTextContent('Login');

  expect(loginForm).toStrictEqual(emailAndPasswordForm);

  expect(registerLink).toBeInTheDocument();
  expect(registerLink).toHaveTextContent('Cadastre-se');
  expect(registerLink).toHaveAttribute('href', '/cadastro');

  expect(recoverPasswordLink).toBeInTheDocument();
  expect(recoverPasswordLink).toHaveTextContent('Esqueci minha senha');
  expect(recoverPasswordLink).toHaveAttribute('href', '/recuperar');
});
