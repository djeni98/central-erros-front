import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

test('renders app bar', () => {
  const { container } = render(<Header />);

  const welcomeText = container.querySelector('[id="welcome"]');
  const drawerButton = container.querySelector('[id="drawer-button"]');
  const svgIcon = container.querySelector('[id="menu-icon"]');

  expect(welcomeText).toBeInTheDocument();
  expect(welcomeText).toHaveTextContent('Bem-vindo.');

  expect(drawerButton).toBeInTheDocument();
  expect(drawerButton).toContainElement(svgIcon);
});

test('toggle user drawer on button click', () => {
  const { container, baseElement } = render(<Header />);

  const drawerButton = container.querySelector('[id="drawer-button"]');

  let userDrawer = baseElement.querySelector('[id="user-drawer"]');

  expect(baseElement).not.toContainElement(userDrawer);
  fireEvent.click(drawerButton);

  userDrawer = baseElement.querySelector('[id="user-drawer"]');
  expect(baseElement).toContainElement(userDrawer);
});
