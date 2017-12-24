import React, { Component } from 'react';
import config from 'config/site.toml';
import SvgIcon from 'components/SvgIcon/SvgIcon';

const PrevIcon = () => (
  <SvgIcon>
    <line x1="20" y1="12" x2="4" y2="12" />
    <polyline points="10 18 4 12 10 6" />
  </SvgIcon>
);

const NextIcon = () => (
  <SvgIcon>
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="14 6 20 12 14 18" />
  </SvgIcon>
);

const CodePenIcon = () => (
  <SvgIcon>
    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
    <line x1="12" y1="22" x2="12" y2="15.5" />
    <polyline points="22 8.5 12 15.5 2 8.5" />
    <polyline points="2 15.5 12 8.5 22 15.5" />
    <line x1="12" y1="2" x2="12" y2="8.5" />
  </SvgIcon>
);

const EmailIcon = () => (
  <SvgIcon>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </SvgIcon>
);

const FacebookIcon = () => (
  <SvgIcon>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </SvgIcon>
);

const GithubIcon = () => (
  <SvgIcon>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </SvgIcon>
);

const InstagramIcon = () => (
  <SvgIcon>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
  </SvgIcon>
);

const TwitterIcon = () => (
  <SvgIcon>
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </SvgIcon>
);

const LinkedInIcon = () => (
  <SvgIcon>
    <path
      strokeWidth="1.8"
      d="m5.839218,4.101561c0,1.211972 -0.974141,2.194011 -2.176459,2.194011s-2.176459,-0.982039 -2.176459,-2.194011c0,-1.211094 0.974141,-2.194011 2.176459,-2.194011s2.176459,0.982917 2.176459,2.194011zm0.017552,3.94922l-4.388022,0l0,14.04167l4.388022,0l0,-14.04167zm7.005038,0l-4.359939,0l0,14.04167l4.360816,0l0,-7.370999c0,-4.098413 5.291077,-4.433657 5.291077,0l0,7.370999l4.377491,0l0,-8.89101c0,-6.915523 -7.829986,-6.66365 -9.669445,-3.259423l0,-1.891237z"
    />
  </SvgIcon>
);

const TelegramIcon = () => (
  <SvgIcon>
    <path d="m 22.05,1.577 c -0.393,-0.016 -0.784,0.08 -1.117,0.235 -0.484,0.186 -4.92,1.902 -9.41,3.64 C 9.263,6.325 7.005,7.198 5.267,7.867 3.53,8.537 2.222,9.035 2.153,9.059 c -0.46,0.16 -1.082,0.362 -1.61,0.984 -0.79581202,1.058365 0.21077405,1.964825 1.004,2.499 1.76,0.564 3.58,1.102 5.087,1.608 0.556,1.96 1.09,3.927 1.618,5.89 0.174,0.394 0.553,0.54 0.944,0.544 l -0.002,0.02 c 0,0 0.307,0.03 0.606,-0.042 0.3,-0.07 0.677,-0.244 1.02,-0.565 0.377,-0.354 1.4,-1.36 1.98,-1.928 l 4.37,3.226 0.035,0.02 c 0,0 0.484,0.34 1.192,0.388 0.354,0.024 0.82,-0.044 1.22,-0.337 0.403,-0.294 0.67,-0.767 0.795,-1.307 0.374,-1.63 2.853,-13.427 3.276,-15.38 L 23.676,4.725 C 23.972,3.625 23.863,2.617 23.18,2.02 22.838,1.723 22.444,1.593 22.05,1.576 Z" />
  </SvgIcon>
);

class SocialMenu extends Component {
  render() {
    return (
      <div className="social-menu-container">
        <nav>
          <ul className="social-menu">
            {config.social.codepen &&
              config.social.codepen.username && (
                <li>
                  <a
                    href={`https://codepen.io/${
                      config.social.codepen.username
                    }`}
                    target="_blank"
                  >
                    <CodePenIcon />
                  </a>
                </li>
              )}
            {config.social.email &&
              config.social.email.address && (
                <li>
                  <a
                    href={`mailto:${config.social.email.address}`}
                    target="_blank"
                  >
                    <EmailIcon />
                  </a>
                </li>
              )}
            {config.social.facebook &&
              config.social.facebook.username && (
                <li>
                  <a
                    href={`https://facebook.com/${
                      config.social.facebook.username
                    }`}
                    target="_blank"
                  >
                    <FacebookIcon />
                  </a>
                </li>
              )}
            {config.social.github &&
              config.social.github.username && (
                <li>
                  <a
                    href={`https://github.com/${config.social.github.username}`}
                    target="_blank"
                  >
                    <GithubIcon />
                  </a>
                </li>
              )}
            {config.social.instagram &&
              config.social.instagram.username && (
                <li>
                  <a
                    href={`https://instagram.com/${
                      config.social.instagram.username
                    }`}
                    target="_blank"
                  >
                    <InstagramIcon />
                  </a>
                </li>
              )}
            {config.social.twitter &&
              config.social.twitter.username && (
                <li>
                  <a
                    href={`https://twitter.com/${
                      config.social.twitter.username
                    }`}
                    target="_blank"
                  >
                    <TwitterIcon />
                  </a>
                </li>
              )}
            {config.social.linkedin &&
              config.social.linkedin.username && (
                <li>
                  <a
                    href={`https://linkedin.com/in/${
                      config.social.linkedin.username
                    }`}
                    target="_blank"
                  >
                    <LinkedInIcon />
                  </a>
                </li>
              )}
            {config.social.telegram &&
              config.social.telegram.username && (
                <li>
                  <a
                    href={`https://t.mem/${config.social.telegram.username}`}
                    target="_blank"
                  >
                    <TelegramIcon />
                  </a>
                </li>
              )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default SocialMenu;
