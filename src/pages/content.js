import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link, Button } from 'gatsby-theme-material-ui';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout';

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

const ContentPage = () => {
  const classes = useStyles();
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
      allContentfulPeople ( sort:{ fields: slug, order: DESC } ) {
        edges {
          node {
            name
            slug
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `);

  return(
    <Layout>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        CONTENTFUL CMS CONTENT
      </Typography>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {
            data.allContentfulPeople.edges.map((edge) => {
              return (
                <Grid item key={edge.node.name} xs={12} sm={6} md={4}>
                  <Card className={classes.card}>
                    <CardMedia
                      className={classes.cardMedia}
                      image={edge.node.image.fluid.src}
                      title={edge.node.name}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography gutterBottom variant="h5" component="h2">
                      {edge.node.name}
                      </Typography>
                      <Typography>
                      {edge.node.description}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        <Link to={`/content/${edge.node.slug}`}>
                          <h2>{edge.node.name}</h2>
                        </Link>
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              )
            })
          }
        </Grid>
      </Container>
      <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        MARKDOWN CONTENT
      </Typography>
      <ol>
        {
          data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li key={edge.node.frontmatter.title}>
                <Link to={`/content/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                </Link>
              </li>
            )
          })
        }
      </ol>
    </Layout>
  );
};

export default ContentPage;
