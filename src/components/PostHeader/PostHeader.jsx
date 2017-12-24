import React, { Component } from 'react';
import PostMeta from 'components/PostMeta/PostMeta';

class PostHeader extends Component {
  render() {
    const { post, timeToRead } = this.props;
    return (
      <header className="header-container">
        <div className="header entry-header">
          <div className="header-info">
            <h1 className="title">{post.title}</h1>
            {/* {subtitle && <p className="subtitle">{subtitle}</p>} */}
          </div>
          <PostMeta post={post} timeToRead={timeToRead} />
        </div>
      </header>
    );
  }
}

export default PostHeader;
