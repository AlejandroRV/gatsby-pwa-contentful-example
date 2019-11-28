import React from 'react';
import { Link } from "gatsby-theme-material-ui";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  }
}));

const Header = () => {
  const classes = useStyles();

  return(
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Company name
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" to="/" className={classes.link}>
              Home
            </Link>
            <Link variant="button" color="textPrimary" href="#" to="/content" className={classes.link}>
              Content
            </Link>
            <Link variant="button" color="textPrimary" href="#" to="/template" className={classes.link}>
              Template
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;