import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import UserDrawer from './UserDrawer';

test('renders user drawer', () => {
  const email = 'test@test.com';
  const token = 'asdfgfdsa TOKEN asdfgfdsa';

  render(
    <UserDrawer
      email={email}
      token={token}
      drawer={true}
      setDrawer={(open) => {return}}
    />
  );

  const closeButton = screen.getByRole('button', { name: /close/i });

  const emailItem = screen.getByText(email);
  const tokenItem = screen.getByText(token);

  const logoutButton = screen.getByRole('button', { name: /logout/i });

  expect(closeButton).toBeInTheDocument();

  expect(emailItem).toBeInTheDocument();
  expect(emailItem).toHaveTextContent(email);

  expect(tokenItem).toBeInTheDocument();
  expect(tokenItem).toHaveTextContent(token);

  expect(logoutButton).toBeInTheDocument();
  expect(logoutButton).toHaveTextContent('Logout');
});

const TestDrawer = () => {
  const [drawer, setDrawer] = React.useState(true);
  return (
    <>
      <span id="open-drawer">drawer: {drawer ? 'true': 'false'}</span>
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
  const { baseElement } = render(<TestDrawer />);

  const closeButton = screen.getByRole('button', { name: /close/i });
  const openDrawer = screen.getByText(/drawer/i);

  expect(openDrawer).toHaveTextContent('true');
  expect(closeButton).toBeInTheDocument();
  fireEvent.click(closeButton);

  expect(openDrawer).toHaveTextContent('false');
  expect(baseElement).not.toContainElement(closeButton);
});

test('backdrop closes drawer', () => {
  const { baseElement } = render(<TestDrawer />);

  const backdrop = baseElement.querySelector('.MuiBackdrop-root');
  const openDrawer = screen.getByText(/drawer/i);

  expect(openDrawer).toHaveTextContent('true');
  expect(backdrop).toBeInTheDocument();
  fireEvent.click(backdrop);

  expect(openDrawer).toHaveTextContent('false');
  expect(baseElement).not.toContainElement(backdrop);
});
