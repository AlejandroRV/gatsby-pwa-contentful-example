import React from 'react';
import { graphql } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;

const ContentMarkdown = (props) => (
  <Layout>
    <Head title={props.data.markdownRemark.frontmatter.title} />
    <h1>{props.data.markdownRemark.frontmatter.title}</h1>
  </Layout>
);

export default ContentMarkdown;
