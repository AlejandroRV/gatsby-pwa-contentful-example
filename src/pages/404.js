import React from 'react';
import Layout from '../components/layout';
import Typography from '@material-ui/core/Typography';

export default (props) => (
  <Layout title="404" >
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      sorry! Page not found
    </Typography>
  </Layout>
);
