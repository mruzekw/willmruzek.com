import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import config from 'config/site.toml';

class AboutPage extends Component {
  render() {
    const { markdownRemark } = this.props.data;
    const { title } = markdownRemark.frontmatter;
    return (
      <div className="about-container">
        <Helmet title={`${title} | ${config.siteTitle}`} />
        <Header title={title} showTitle />
        <main id="main" className="main">
          <article lang="en" className="entry">
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{
                __html: markdownRemark.html
              }}
            />
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default AboutPage;

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query AboutPageQuery {
    markdownRemark(id: { regex: "/pages/about.md/" }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
