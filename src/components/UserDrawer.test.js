import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import UserDrawer from './UserDrawer';

test('renders user drawer', () => {
  const email = 'test@test.com';
  const token = 'asdfgfdsa TOKEN asdfgfdsa';

  const { container, debug, baseElement } = render(
    <UserDrawer
      email={email}
      token={token}
      drawer={true}
      setDrawer={(open) => {return}}
    />
  );

  const closeButton = baseElement.querySelector('[id="close-button"]');
  const closeIcon = baseElement.querySelector('[id="close-icon"]');

  const emailItem = baseElement.querySelector('[id="email"]');
  const tokenItem = baseElement.querySelector('[id="token"]');

  const logoutButton = baseElement.querySelector('[id="logout-button"]');
  const exitIcon = baseElement.querySelector('[id="exit-icon"]');

  expect(closeButton).toBeInTheDocument();
  expect(closeButton).toContainElement(closeIcon);

  expect(emailItem).toBeInTheDocument();
  expect(emailItem).toHaveTextContent('Email');
  expect(emailItem).toHaveTextContent(email);

  expect(tokenItem).toBeInTheDocument();
  expect(tokenItem).toHaveTextContent('Token');
  expect(tokenItem).toHaveTextContent(token);

  expect(logoutButton).toBeInTheDocument();
  expect(logoutButton).toHaveTextContent('Logout');
  expect(logoutButton).toContainElement(exitIcon);
});

const TestDrawer = () => {
  const [drawer, setDrawer] = React.useState(true);
  return (
    <>
      <span id="open-drawer">{drawer ? 'true': 'false'}</span>
      <UserDrawer
        email=""
        token=""
        drawer={drawer}
        setDrawer={setDrawer}
      />
    </>
  );
}

test('close button closes drawer', () => {
  const { container, baseElement } = render(
    <TestDrawer />
  );

  const closeButton = baseElement.querySelector('[id="close-button"]');
  const openDrawer = baseElement.querySelector('[id="open-drawer"]');

  expect(openDrawer).toHaveTextContent('true');
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);

  expect(openDrawer).toHaveTextContent('false');
  expect(baseElement).not.toContainElement(closeButton);
});

test('backdrop closes drawer', () => {
  const { container, debug, baseElement } = render(
    <TestDrawer />
  );

  const backdrop = baseElement.querySelector('.MuiBackdrop-root');
  const openDrawer = baseElement.querySelector('[id="open-drawer"]');

  expect(openDrawer).toHaveTextContent('true');
  expect(backdrop).toBeInTheDocument();
  fireEvent.click(backdrop);

  expect(openDrawer).toHaveTextContent('false');
  expect(baseElement).not.toContainElement(backdrop);
});
