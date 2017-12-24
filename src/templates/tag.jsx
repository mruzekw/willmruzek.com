import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import PostListing from 'components/PostListing/PostListing';
import PostListHeader from 'components/PostListHeader/PostListHeader';
import config from 'config/site.toml';

export default class TagTemplate extends React.Component {
  render() {
    const tag = this.props.pathContext.tag;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="tag-container">
        <Helmet title={`Posts tagged as "${tag}" | ${config.siteTitle}`} />
        <Header />
        <main id="main" className="main">
          <PostListHeader type="Tag" term={tag} />
          <PostListing postEdges={postEdges} />
        </main>
        <Footer />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
