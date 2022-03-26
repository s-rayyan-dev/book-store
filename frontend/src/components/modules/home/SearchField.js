import React from 'react';

import {
  Typography,
  Container,
  Link,
  Button,
  Box,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '20px',
    maxWidth: '500px',
  },
}));

function SearchField() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <TextField fullWidth className={classes.textfield} />
    </div>
  );
}

export default SearchField;
