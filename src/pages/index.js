import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
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
      <h1>PWA / contentful example</h1>
      <div>Hello world! test</div>
      {data.site.siteMetadata.someData}
    </Layout>
  );
}
