import React from 'react';

import { makeStyles } from '@mui/styles';
import { Typography, Container, Link, Button, Box } from '@mui/material';

import SearchField from './SearchField';
import Header from './Header';

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.background.grey,
    minHeight: '100vh',
  },
}));

function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Header></Header>
      <main className={classes.main}>
        <Container maxWidth='lg'>
          <SearchField />
        </Container>
      </main>
    </>
  );
}

export default HomePage;
