import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

export default (props) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          someData
        }
      }
    }
  `);

  return (
    <Layout title="home" >
      <Typography component="h2" variant="h3" align="center" color="textPrimary" gutterBottom>
        PWA / contentful example
      </Typography>
      <div>Hello world! test</div>
      {data.site.siteMetadata.someData}
    </Layout>
  );
}
