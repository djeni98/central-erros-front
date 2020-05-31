import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RegisterPage from './RegisterPage';
import EmailAndPasswordForm from './EmailAndPasswordForm';

test('renders register page', () => {
  const div = document.createElement('div');
  render(
    <EmailAndPasswordForm buttonLabel="Cadastrar-se" />,
    { container: div }
  );
  const emailAndPasswordForm = div.querySelector('form');

  const { container } = render(
    <RegisterPage />,
    { wrapper: MemoryRouter }
  );

  const registerTitle = container.querySelector('[id="title"]');
  const registerForm = container.querySelector('form');
  const loginLink = container.querySelector('[id="login"]');

  expect(registerTitle).toBeInTheDocument();
  expect(registerTitle).toHaveTextContent('Cadastro');

  expect(registerForm).toStrictEqual(emailAndPasswordForm);

  expect(loginLink).toBeInTheDocument();
  expect(loginLink).toHaveTextContent('Já possuo conta');
  expect(loginLink).toHaveAttribute('href', '/');
});
