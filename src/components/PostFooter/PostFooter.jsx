import React, { Component } from 'react';
import Link from 'gatsby-link';
import _ from 'lodash';
import TagIcon from 'components/TagIcon/TagIcon';
import CategoryIcon from 'components/CategoryIcon/CategoryIcon';

const commaSeparatedList = renderFn => (acc, term, idx, coll) => [
  ...acc,
  renderFn(term),
  idx < coll.length - 1 ? ', ' : ''
];

class PostFooter extends Component {
  render() {
    const { post } = this.props;
    return (
      <footer className="entry-footer-container">
        <div className="entry-footer">
          <div className="categories">
            <span className="taxonomyTerm-icon">
              <CategoryIcon />
            </span>
            {[post.category].reduce(
              commaSeparatedList(category => (
                <Link
                  className="category"
                  to={`/categories/${_.kebabCase(category)}`}
                  key={category}
                >
                  {category}
                </Link>
              )),
              []
            )}
          </div>
          {post.tags && (
            <div className="tags">
              <span className="taxonomyTerm-icon">
                <TagIcon />
              </span>

              {post.tags.reduce(
                commaSeparatedList(tag => (
                  <Link
                    className="tag"
                    to={`/tags/${_.kebabCase(tag)}`}
                    key={tag}
                  >
                    {tag}
                  </Link>
                )),
                []
              )}
            </div>
          )}
        </div>
      </footer>
    );
  }
}

export default PostFooter;
