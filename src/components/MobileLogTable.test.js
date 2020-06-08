import React from 'react';
import { render, screen, getByRole, getAllByRole, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import MobileLogTable from './MobileLogTable';

const createData = (id, level, description, source, date, events) => (
  { id, level: level.toUpperCase(), description, source, date, events }
);

const data = [
  createData(1, 'error', 'descrição 1', '127.0.0.1', '11-11-1111', '1000'),
  createData(2, 'warning', 'descrição 2', '127.0.0.2', '12-9-1107', '1006'),
  createData(3, 'error', 'descrição 3', '127.0.0.3', '21-11-1111', '1002'),
  createData(4, 'debug', 'descrição 4', '127.0.0.4', '31-10-1080', '1004'),
];

test('renders mobile log table', () => {
  const rows = data;

  render(<MobileLogTable rows={rows} />);
  
  const archiveButton = screen.getByRole('button', { name: /arquivar/i });
  const deleteButton = screen.getByRole('button', { name: /apagar/i });

  const table = screen.getByRole('table');

  const tableRows = screen.getAllByRole('row');
  const firstRow = tableRows.shift(); // Remove columnheader

  expect(archiveButton).toBeInTheDocument();
  expect(archiveButton).toHaveTextContent('Arquivar');

  expect(deleteButton).toBeInTheDocument();
  expect(deleteButton).toHaveTextContent('Apagar');

  expect(table).toBeInTheDocument();

  expect(firstRow).toBeInTheDocument();
  expect(firstRow).toContainElement(getByRole(firstRow, 'checkbox'));
  expect(firstRow).toHaveTextContent('Log');

  tableRows.forEach((row, index) => {
    const content = rows[index];

    expect(row).toContainElement(getByRole(row, 'checkbox'));
    expect(row).toHaveTextContent(content.description);
    expect(row).toHaveTextContent(content.source);
    expect(row).toHaveTextContent(content.date);
  });
});

test('selects rows', () => {
  const rows = data;

  render(<MobileLogTable rows={rows} />);

  const tableRows = screen.getAllByRole('row');
  tableRows.shift();

  const selectIndex = [0, 2, 3];

  tableRows.forEach((row, index) => {
    const checkbox = getByRole(row, 'checkbox');

    if (selectIndex.includes(index)) {
      fireEvent.click(checkbox);
      expect(checkbox).toBeChecked();
    } else {
      expect(checkbox).not.toBeChecked();
    }
  });
});

test('delete callback returns selected ids', () => {
  const rows = data;

  let receivedIds;
  const callback = (ids) => receivedIds = ids

  render(<MobileLogTable rows={rows} deleteFunction={callback} />);

  const deleteButton = screen.getByRole('button', { name: /apagar/i });

  const tableRows = screen.getAllByRole('row');
  tableRows.shift();

  const selectIndex = [0, 2, 3];
  const expectedIds = selectIndex.map(index => rows[index].id);

  selectIndex.forEach(index => {
    const row = tableRows[index];
    fireEvent.click(getByRole(row, 'checkbox'));
  });

  fireEvent.click(deleteButton);

  expect(receivedIds).toStrictEqual(expectedIds);
});

test('archive callback returns selected ids', () => {
  const rows = data;

  let receivedIds;
  const callback = (ids) => receivedIds = ids

  render(<MobileLogTable rows={rows} archiveFunction={callback} />);

  const archiveButton = screen.getByRole('button', { name: /arquivar/i });

  const tableRows = screen.getAllByRole('row');
  tableRows.shift();

  const selectIndex = [0, 1, 3];
  const expectedIds = selectIndex.map(index => rows[index].id);

  selectIndex.forEach(index => {
    const row = tableRows[index];
    fireEvent.click(getByRole(row, 'checkbox'));
  });

  fireEvent.click(archiveButton);

  expect(receivedIds).toStrictEqual(expectedIds);
});

test('redirects on description click', () => {
  const rows = data;

  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <MobileLogTable rows={rows} />
    </Router>
  );

  const tableRows = screen.getAllByRole('row');
  tableRows.shift();

  const selectedIndex = 0;
  const expectedId = rows[selectedIndex].id;
  const cell = getAllByRole(tableRows[selectedIndex], 'cell');

  fireEvent.click(cell[1]);
  expect(history.location.pathname).toStrictEqual(`/logs/${expectedId}`);
})
