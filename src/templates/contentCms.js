import React from 'react';
import { graphql } from 'gatsby';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
    contentfulPeople(slug: { eq: $slug }) {
      name
      description
      slug
      image {
        fluid {
          src
        }
      }
    }
  }
`;

const Content = (props) => (
  <Layout title={props.data.contentfulPeople.name} >
    <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
      {props.data.contentfulPeople.name}
    </Typography>
    <Typography variant="h5" align="center" color="textSecondary" paragraph>
      {props.data.contentfulPeople.description}
    </Typography>
    <img src={props.data.contentfulPeople.image.fluid.src} width="80%"/>
  </Layout>
);

export default Content;
