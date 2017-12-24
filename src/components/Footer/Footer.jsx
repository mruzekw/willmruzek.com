import React, { Component } from 'react';
import fecha from 'fecha';
import config from 'config/site.toml';
// import UserLinks from '../UserLinks/UserLinks';
import SocialMenu from 'components/SocialMenu/SocialMenu';
import './Footer.css';

const { copyrightHolder } = config;

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="footer-container">
        <div className="footer">
          <SocialMenu />
          <div className="copyright">
            <p>
              &copy; {fecha.format(new Date(), 'YYYY')} {copyrightHolder},
              Content licensed under{' '}
              <a
                href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC BY-NC-ND 4.0
              </a>{' '}
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
