import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Header from './header';
import Head from './head';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }
}));

const Layout = ({ title, children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head title={title} />
      <CssBaseline />
      <Header />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={0} justify="center">
          <Grid item >
            {children}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
};

Layout.propTypes = {};

export default Layout;
