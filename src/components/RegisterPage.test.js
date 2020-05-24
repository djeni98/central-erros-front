import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import RegisterPage from './RegisterPage';

test('renders register page', () => {
  const { container } = render(
    <RegisterPage />,
    { wrapper: MemoryRouter }
  );

  const registerTitle = container.querySelector('[id="title"]');
  const loginLink = container.querySelector('[id="login"]');

  expect(registerTitle).toBeInTheDocument();
  expect(registerTitle).toHaveTextContent('Cadastro');

  expect(loginLink).toBeInTheDocument();
  expect(loginLink).toHaveTextContent('Já possuo conta');
  expect(loginLink).toHaveAttribute('href', '/');
});
