import React, { Component } from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import config from 'config/site.toml';

class AboutPage extends Component {
  render() {
    const { html } = this.props.data.markdownRemark;
    return (
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <Header
          title={config.siteTitle}
          description={config.siteDescription}
          isHome
        />
        <main id="main" className="main">
          <article lang="en" className="entry">
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{
                __html: html
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
    markdownRemark(frontmatter: { title: { eq: "About" } }) {
      html
    }
  }
`;
