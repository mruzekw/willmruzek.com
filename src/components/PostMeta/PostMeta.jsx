import React, { Component } from 'react';
import fecha from 'fecha';
import config from 'config/site.toml';
import CalendarIcon from 'components/CalendarIcon/CalendarIcon';
import AuthorIcon from 'components/AuthorIcon/AuthorIcon';
import ClockIcon from 'components/ClockIcon/ClockIcon';

const { userName } = config;

class PostMeta extends Component {
  render() {
    const { post, timeToRead } = this.props;
    return (
      <div className="meta">
        <span className="posted-on">
          <CalendarIcon />
          <span className="screen-reader">Posted On</span>
          <time
            className="date"
            dateTime="{{ .Date.Format &quot;2006-01-02T15:04:05Z07:00&quot; }}"
          >
            {fecha.format(fecha.parse(post.date, 'YYYY-MM-DD'), 'YYYY, MMM DD')}
          </time>
        </span>

        <span className="byline">
          <AuthorIcon />
          {userName}
        </span>
        <span className="reading-time">
          <ClockIcon />
          {timeToRead <= 1 ? 'One' : timeToRead} minute read
        </span>
      </div>
    );
  }
}

export default PostMeta;
