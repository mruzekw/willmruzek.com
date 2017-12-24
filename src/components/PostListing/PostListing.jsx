import React from 'react';
import Link from 'gatsby-link';
import fecha from 'fecha';

// TODO: Pagination with gatsby-paginate
class PostListing extends React.Component {
  getPostList() {
    const postList = [];
    this.props.postEdges.forEach(postEdge => {
      postList.push({
        path: postEdge.node.fields.slug,
        tags: postEdge.node.frontmatter.tags,
        cover: postEdge.node.frontmatter.cover,
        title: postEdge.node.frontmatter.title,
        date: postEdge.node.frontmatter.date,
        excerpt: postEdge.node.excerpt,
        timeToRead: postEdge.node.timeToRead
      });
    });
    return postList;
  }
  render() {
    const postList = this.getPostList();
    return (
      <div className="list-container">
        <ul className="list">
          {postList.map(post => (
            <li className="list-item" key={post.title}>
              <article>
                <div className="meta">
                  <span>
                    <time>
                      {fecha.format(
                        fecha.parse(post.date, 'YYYY-MM-DD'),
                        'YYYY, MMM DD'
                      )}
                    </time>
                  </span>
                </div>

                <header className="list-item-header">
                  <h3 className="list-item-title">
                    <Link to={post.path}>{post.title}</Link>
                  </h3>
                </header>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PostListing;
