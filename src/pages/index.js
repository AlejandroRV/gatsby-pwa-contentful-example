import React from 'react'
import Header from '../components/header'
import { useStaticQuery, graphql } from 'gatsby'
// import '../styles/index.scss';

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
    <div>
      <Header />
      Hello world!
      <br />
      {data.site.siteMetadata.someData}
    </div>
  );
}
