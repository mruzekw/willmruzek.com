import React from 'react';

const PostListHeader = props => (
  <header className="header-container">
    <div className="header list-header">
      <div className="header-info">
        <h1 className="title">
          <span className="taxonomy-type">{props.type}:</span>
          {props.term}
        </h1>
      </div>
    </div>
  </header>
);

export default PostListHeader;
