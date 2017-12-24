import React, { Component } from 'react';
import MainMenu from 'components/MainMenu/MainMenu';

class Header extends Component {
  render() {
    const { title, description, isHome } = this.props;
    return (
      <header id="header" className="header-container">
        <div className="header site-header">
          <MainMenu />
          {isHome && (
            <div className="header-info">
              {isHome ? (
                <h1 className="site-title title">{title}</h1>
              ) : (
                <p className="site-title title">{title}</p>
              )}
              <p className="site-description subtitle">{description}</p>
            </div>
          )}
        </div>
      </header>
    );
  }
}

export default Header;
