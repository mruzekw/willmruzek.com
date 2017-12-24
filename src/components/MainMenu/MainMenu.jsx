import React, { Component } from 'react';
import Link from 'gatsby-link';
import navigation from 'config/navigation.toml';

const items = navigation.main;

class MainMenu extends Component {
  render() {
    return (
      <nav id="main-menu" className="main-menu-container">
        <ul className="main-menu">
          {items.map(({ name, url }) => (
            <li key={name}>
              <Link to={url} activeClassName="current" exact>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default MainMenu;
