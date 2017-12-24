import React, { Component } from 'react';
import MainMenu from 'components/MainMenu/MainMenu';

class Header extends Component {
  render() {
    const { title, description, showTitle } = this.props;
    return (
      <header id="header" className="header-container">
        <div className="header site-header">
          <MainMenu />
          {showTitle && (
            <div className="header-info">
              <h1 className="site-title title">{title}</h1>
              <p className="site-description subtitle">{description}</p>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
