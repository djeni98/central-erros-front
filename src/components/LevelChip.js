import React from 'react';

import Chip from '@material-ui/core/Chip';
import red from '@material-ui/core/colors/red';
import amber from '@material-ui/core/colors/amber';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';

function LevelChip(props) {
  const label = props.label || 'nenhum';
  const mapColors = {
    'ERROR': red[500],
    'WARNING': amber[500],
    'DEBUG': blue[500],
    'NENHUM': grey[500]
  }

  return (
    <Chip
      id="chip"
      label={label.toUpperCase()}
      style={
        { backgroundColor: mapColors[label.toUpperCase()] }
      }
    />
  );
}

export default LevelChip;
