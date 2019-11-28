import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  return (
    <Helmet title={`${title} | GATSBY`} >
      <meta name="description" content="Helmet application" />
      <html lang="en" />
    </Helmet>
  )
}

Head.propTypes = {};

export default Head;
