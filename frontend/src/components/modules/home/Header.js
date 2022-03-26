import React from 'react';

import { makeStyles } from '@mui/styles';
import { Typography, Container, Link, Button, Box } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: theme.palette.primary.main,
    padding: '12px 0px',
  },

  wrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    color: theme.palette.text.primary,
  },

  login: {
    color: theme.palette.text.primary,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <header className={classes.header}>
      <Container maxWidth='lg'>
        <Box className={classes.wrapper}>
          <Typography variant='h4' className={classes.logo}>
            Book Store
          </Typography>
          <Button color='inherit' className={classes.login}>
            Login
          </Button>
        </Box>
      </Container>
    </header>
  );
}

export default Header;
