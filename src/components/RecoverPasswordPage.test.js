import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, fireEvent } from '@testing-library/react';
import RecoverPasswordPage from './RecoverPasswordPage';

test('renders login page', () => {
  const { container } = render(
    <RecoverPasswordPage />,
    { wrapper: MemoryRouter }
  );

  const title = container.querySelector('[id="title"]');

  const emailInput = container.querySelector('[id="email"]');
  const buttonSubmit = container.querySelector('[id="button-submit"]');

  const loginLink = container.querySelector('[id="login"]');

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Recuperar senha');

  expect(emailInput).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();

  expect(loginLink).toBeInTheDocument();
  expect(loginLink).toHaveTextContent('Voltar ao login');
  expect(loginLink).toHaveAttribute('href', '/');
});
