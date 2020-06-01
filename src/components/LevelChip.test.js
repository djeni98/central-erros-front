import React from 'react';
import { render } from '@testing-library/react';

import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';

import LevelChip from './LevelChip';

const levels = [
  { label: 'error', color: red[500] },
  { label: 'warning', color: amber[500] },
  { label: 'debug', color: blue[500] }
];

levels.forEach(level => 
  test(`renders ${level.label} chip`, () => {
    const { container } = render(
      <LevelChip label={level.label} color={level.color} />
    );

    const chip = container.querySelector('[id="chip"]');

    expect(chip).toBeInTheDocument();
    expect(chip).toHaveTextContent(level.label.toUpperCase());
    expect(chip).toHaveStyle(`background-color: ${level.color}`);
  })
);
