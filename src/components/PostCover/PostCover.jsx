import React, { Component } from 'react';

class PostCover extends Component {
  render() {
    const { cover } = this.props;
    return (
      <div className="entry-cover-container">
        <figure className="entry-cover cover-full">
          <img src={cover} alt="" />
        </figure>
      </div>
    );
  }
}

export default PostCover;
