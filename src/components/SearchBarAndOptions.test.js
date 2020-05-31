import React from 'react';
import { render, fireEvent, prettyDOM } from '@testing-library/react';
import SearchBarAndOptions from './SearchBarAndOptions';

test('renders search bar and options', () => {
  const { container, debug } = render(<SearchBarAndOptions />);

  const environmentExpected = ['Produção', 'Homologação', 'Desenvolvimento'];
  const environmentField = container.querySelector('[id="environment"]');
  let environmentOptions = environmentField.getElementsByTagName('option');
  environmentOptions = Object.values(environmentOptions).map(
    item => item.innerHTML
  );

  const orderExpected = ['Nível', 'Frequencia'];
  const orderField = container.querySelector('[id="order"]');
  let orderOptions = orderField.getElementsByTagName('option');
  orderOptions = Object.values(orderOptions).map(
    item => item.innerHTML
  );

  const searchByExpected = ['Nível', 'Descrição', 'Origem'];
  const searchByField = container.querySelector('[id="search-by"]');
  let searchByOptions = searchByField.getElementsByTagName('option');
  searchByOptions = Object.values(searchByOptions).map(
    item => item.innerHTML
  );

  const searchBar = container.querySelector('[id="search-bar"]');
  const searchButton = container.querySelector('[id="search-button"]');

  expect(environmentField).toBeInTheDocument();
  expect(environmentOptions).toEqual(expect.arrayContaining(environmentExpected));

  expect(orderField).toBeInTheDocument();
  expect(orderOptions).toEqual(expect.arrayContaining(orderExpected));

  expect(searchByField).toBeInTheDocument();
  expect(searchByOptions).toEqual(expect.arrayContaining(searchByExpected));

  expect(searchBar).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
