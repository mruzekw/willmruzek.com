import React from 'react';
import Helmet from 'react-helmet';
import RecentPostsListing from 'components/RecentPostsListing/RecentPostsListing';
import SEO from 'components/SEO/SEO';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import config from 'config/site.toml';

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <Header
          title={config.siteTitle}
          description={config.siteDescription}
          showTitle
        />
        <main id="main" className="main">
          {/* <article className="entry">
            <div className="entry-content">{content}</div>
          </article> */}

          <div className="home-sections-container">
            <div className="home-sections">
              <RecentPostsListing postEdges={postEdges} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Index;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id: { regex: "/content/posts/" } }
    ) {
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
