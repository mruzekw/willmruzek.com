import React from 'react';
import PostListing from 'components/PostListing/PostListing';

class RecentPostListing extends React.Component {
  render() {
    const { postEdges } = this.props;
    return (
      <section id="recent-posts" className="home-section">
        <header>
          <h2 className="home-section-title title">Recent Posts</h2>
        </header>
        <PostListing postEdges={postEdges} />
      </section>
    );
  }
}

export default RecentPostListing;
