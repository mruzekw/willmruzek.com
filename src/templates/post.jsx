import React from 'react';
import Helmet from 'react-helmet';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
// import UserInfo from 'components/UserInfo/UserInfo';
import SocialLinks from 'components/SocialLinks/SocialLinks';
import PostHeader from 'components/PostHeader/PostHeader';
import PostCover from 'components/PostCover/PostCover';
import PostFooter from 'components/PostFooter/PostFooter';
import SEO from 'components/SEO/SEO';
import config from 'config/site.toml';

export default class PostTemplate extends React.Component {
  render() {
    const { slug } = this.props.pathContext;
    const postNode = this.props.data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }
    return (
      <div className="page">
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Header />
        <main id="main" className="main">
          <article lang="en" className="entry">
            <PostHeader post={post} timeToRead={postNode.timeToRead} />
            {post.cover && <PostCover cover={post.cover} />}
            {/* <details class='entry-toc'>
              <summary class='toc-title'>
                <span>
                  Table of Contents
                </span>
              </summary>
              {{ .TableOfContents }}
            </details> */}
            <div
              className="entry-content"
              dangerouslySetInnerHTML={{
                __html: `
                  ${postNode.html}
                  <hr />
                `
              }}
            />
            <PostFooter post={post} />
            <SocialLinks postPath={slug} postNode={postNode} />
            {/* TODO <UserInfo config={config} /> */}
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

/* eslint no-undef: "off"*/
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
      }
    }
  }
`;
