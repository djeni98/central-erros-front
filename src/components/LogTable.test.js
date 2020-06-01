import React from 'react';
import { render, prettyDOM } from '@testing-library/react';
import Checkbox from '@material-ui/core/Checkbox';

import LogTable from './LogTable';

const createData = (id, level, description, source, date, events) => (
  { id, level, description, source, date, events }
);

const data = [
  createData(1, 'error', 'descrição 1', '127.0.0.1', '11-11-1111', '1000'),
  createData(2, 'warning', 'descrição 2', '127.0.0.2', '12-9-1107', '1006'),
  createData(3, 'error', 'descrição 3', '127.0.0.3', '21-11-1111', '1002'),
  createData(4, 'debug', 'descrição 4', '127.0.0.4', '31-10-1080', '1004'),
]

test('renders log table', () => {
  const rows = [data[0]];

  const { container } = render(
    <LogTable rows={rows} />
  );
  
  const table = container.querySelector('table');

  const archiveButton = container.querySelector('[id="archive-button"]');
  const deleteButton = container.querySelector('[id="delete-button"]');

  const tableHead = container.querySelector('thead');
  const tableColsCheckbox = tableHead.querySelector('[type="checkbox"]');
  const tableColsExpected = [
    'Nível', 'Descrição', 'Origem', 'Data', 'Eventos'
  ];
  let tableCols = tableHead.getElementsByTagName('th');
  tableCols = Object.values(tableCols).map(
    item => item.innerHTML
  );

  const tableBody = container.querySelector('tbody');
  const tableItensCheckbox = tableBody.querySelector('[type="checkbox"]');
  const tableItensExpected = [
    rows[0].level.toUpperCase(), rows[0].description,
    rows[0].source, rows[0].date, rows[0].events
  ];
  let tableItens = tableBody.querySelector('tr');

  expect(archiveButton).toBeInTheDocument();
  expect(archiveButton).toHaveTextContent('Arquivar');

  expect(deleteButton).toBeInTheDocument();
  expect(deleteButton).toHaveTextContent('Apagar');

  expect(table).toBeInTheDocument();
  
  expect(tableHead).toBeInTheDocument();
  expect(tableHead).toContainElement(tableColsCheckbox);
  expect(tableCols).toEqual(expect.arrayContaining(tableColsExpected));

  expect(tableBody).toBeInTheDocument();
  expect(tableItens).toContainElement(tableItensCheckbox);
  tableItensExpected.forEach(
    item => expect(tableItens).toHaveTextContent(item)
  );
});
