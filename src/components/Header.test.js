import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders app bar', () => {
  render(<Header />);

  const welcomeText = screen.getByRole('heading');
  const drawerButton = screen.getByRole('button');

  expect(welcomeText).toBeInTheDocument();
  expect(welcomeText).toHaveTextContent('Bem-vindo.');

  expect(drawerButton).toBeInTheDocument();
});

test('toggle user drawer on button click', () => {
  const { baseElement } = render(<Header />);

  const drawerButton = screen.getByRole('button');
  let userDrawer = screen.queryByRole('presentation');

  expect(baseElement).not.toContainElement(userDrawer);
  fireEvent.click(drawerButton);

  userDrawer = screen.getByRole('presentation');
  expect(baseElement).toContainElement(userDrawer);
});
