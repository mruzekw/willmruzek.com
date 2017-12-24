import React from 'react';
import Helmet from 'react-helmet';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import PostListHeader from '../components/PostListHeader/PostListHeader';
import PostListing from '../components/PostListing/PostListing';
import config from 'config/site.toml';

export default class CategoryTemplate extends React.Component {
  render() {
    const category = this.props.pathContext.category;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="category-container">
        <Helmet
          title={`Posts in category "${category}" | ${config.siteTitle}`}
        />
        <Header />
        <main id="main" className="main">
          <PostListHeader type="Category" term={category} />
          <PostListing postEdges={postEdges} />
        </main>
        <Footer />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query CategoryPage($category: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`;
