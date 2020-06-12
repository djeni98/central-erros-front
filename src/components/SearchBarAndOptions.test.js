import React from 'react';
import { screen, render, fireEvent, getAllByRole } from '@testing-library/react';
import SearchBarAndOptions from './SearchBarAndOptions';

test('renders search bar and options', () => {
  render(<SearchBarAndOptions />);

  const environmentExpected = ['Produção', 'Homologação', 'Desenvolvimento'];
  const environmentField = screen.getByLabelText(/ambiente/i);

  const orderExpected = ['Nível', 'Frequencia'];
  const orderField = screen.getByLabelText(/ordenar/i);

  const searchByExpected = ['Nível', 'Descrição', 'Origem'];
  const searchByField = screen.getByLabelText(/procurar/i);

  const searchBar = screen.getByRole('textbox');
  const searchButton = screen.getByRole('button');

  expect(environmentField).toBeInTheDocument();
  environmentExpected.forEach(environment =>
    expect(environmentField).toHaveTextContent(environment)
  )

  expect(orderField).toBeInTheDocument();
  orderExpected.forEach(order =>
    expect(orderField).toHaveTextContent(order)
  )

  expect(searchByField).toBeInTheDocument();
  searchByExpected.forEach(searchBy =>
    expect(searchByField).toHaveTextContent(searchBy)
  )

  expect(searchBar).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});

test('changes select fields information', () => {
  render(<SearchBarAndOptions />);

  const environmentField = screen.getByLabelText(/ambiente/i);
  const orderField = screen.getByLabelText(/ordenar/i);
  const searchByField = screen.getByLabelText(/procurar/i);
  const searchBar = screen.getByRole('textbox');

  const searchButton = screen.getByRole('button');
  
  const environment = '1';
  const order = '2';
  const searchBy = '3';
  const search = 'localhost';

  fireEvent.change(environmentField, { target: { value: environment } });
  expect(environmentField).toHaveValue(environment);

  fireEvent.change(orderField, { target: { value: order } });
  expect(orderField).toHaveValue(order);

  fireEvent.change(searchByField, { target: { value: searchBy } });
  expect(searchByField).toHaveValue(searchBy);

  fireEvent.change(searchBar, { target: { value: search } });
  expect(searchBar).toHaveValue(search);
});

test('sends information on button click', () => {
  let form;
  const callback = (params) => { 
    form = params;
  }

  render(<SearchBarAndOptions callback={callback} />);

  const environmentField = screen.getByLabelText(/ambiente/i);
  const orderField = screen.getByLabelText(/ordenar/i);
  const searchByField = screen.getByLabelText(/procurar/i);
  const searchBar = screen.getByRole('textbox');

  const searchButton = screen.getByRole('button');
  
  const environment = '0';
  const order = '0';
  const searchBy = '0';
  const search = '';

  // Default values
  expect(environmentField).toHaveValue(environment);
  expect(orderField).toHaveValue(order);
  expect(searchByField).toHaveValue(searchBy);
  expect(searchBar).toHaveValue(search);

  fireEvent.click(searchButton);

  expect(form).toStrictEqual({ environment, order, searchBy, search });
});
