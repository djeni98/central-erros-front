import React from 'react';
import { Router, MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen, fireEvent } from '@testing-library/react';
import RecoverPasswordPage from './RecoverPasswordPage';

test('renders recover password page', () => {
  render(<RecoverPasswordPage />, { wrapper: MemoryRouter });

  const title = screen.getByRole('heading');

  const emailInput = screen.getByRole('textbox');
  const buttonSubmit = screen.getByRole('button');

  const loginLink = screen.getByRole('link');

  expect(title).toBeInTheDocument();
  expect(title).toHaveTextContent('Recuperar senha');

  expect(emailInput).toBeInTheDocument();
  expect(buttonSubmit).toBeInTheDocument();

  expect(loginLink).toBeInTheDocument();
  expect(loginLink).toHaveTextContent('Voltar ao login');
  expect(loginLink).toHaveAttribute('href', '/');
});

test('redirects on login link click', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <RecoverPasswordPage />
    </Router>
  );

  const loginLink = screen.getByRole('link');

  fireEvent.click(loginLink);
  expect(history.location.pathname).toStrictEqual('/');
});
